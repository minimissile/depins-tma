// 当前版本缓存
export const CURRENT_CACHE_VERSION = 'v1'
// 某一版本数据是否已迁移完成
const MIGRATION_COMPLETED = 'cacheMigrationCompleted_v1'
// 跳过当前版本数据迁移
const MIGRATION_SKIPPED = 'cacheMigrationSkipped'

/**
 * 本地缓存所用到的key
 */
export const STORAGE_KEY = Object.freeze({
  USER_ID: 'USER_ID',
})

/**
 * 获取当前账户用户id
 */
export function getCurrentUserId() {
  return localStorage.getItem(STORAGE_KEY.USER_ID)
}

/**
 * 获取缓存
 * @param key
 * @param defaultValue
 */
export const getCache = (key: string, defaultValue = {}) => {
  const userId = getCurrentUserId()
  if (!userId) return defaultValue

  const userKey = `${key}_${userId}`
  const cachedData = localStorage.getItem(userKey)

  if (cachedData) {
    try {
      const { version, data } = JSON.parse(cachedData)
      if (version === CURRENT_CACHE_VERSION) {
        return data
      } else {
        return defaultValue
      }
    } catch (e) {
      console.error(`Error parsing cache for key ${key}:`, e)
      return defaultValue
    }
  }

  // 如果缓存不存在，执行迁移
  migrateOldCache(key)

  // 如果缓存不存在或不是当前版本，则返回默认值
  return defaultValue
}

/**
 * 设置缓存
 * @param key
 * @param data
 */
export const setCache = (key: string, data: any) => {
  const userId = getCurrentUserId()
  if (!userId) return

  const userKey = `${key}_${userId}`
  const cacheToStore = JSON.stringify({
    version: CURRENT_CACHE_VERSION,
    data,
  })
  localStorage.setItem(userKey, cacheToStore)
}

/**
 * 移除缓存
 * @param key
 */
export const removeCache = (key: string) => {
  const userId = getCurrentUserId()
  if (!userId) return

  const userKey = `${key}_${userId}`

  localStorage.removeItem(userKey)

  const migratedKey = `${key}_migrated`
  localStorage.removeItem(migratedKey)
}

/**
 * 迁移旧缓存
 * @param oldKey
 */
export const migrateOldCache = (oldKey: string) => {
  const oldCache = localStorage.getItem(oldKey)
  if (oldCache) {
    const oldData = JSON.parse(oldCache)

    if (!oldData.version) {
      setCache(oldKey, oldData) // Migrate old data to the new format
      localStorage.removeItem(oldKey) // Delete the old cache
    }
  }
}

/**
 * 迁移缓存项并标记迁移是否完成
 * @param key
 */
const migrateAndMark = (key: string) => {
  const migratedKey = `${key}_migrated`
  const migrationStatus = localStorage.getItem(migratedKey)

  if (!migrationStatus) {
    // 如果缓存的项尚未迁移，请运行迁移逻辑
    migrateOldCache(key)

    // 如果迁移完成，请将缓存的项目标记为已迁移
    localStorage.setItem(migratedKey, 'true')
    console.log(`Cache for key ${key} migrated successfully.`)
  }
}

/**
 * 检查是否需要迁移
 */
export function checkAndMigrateCache(migrationKeys: string[] = []) {
  // 检查是否因为缓存已清空而跳过迁移
  const migrationSkipped = localStorage.getItem(MIGRATION_SKIPPED)

  if (migrationSkipped) {
    console.log('Cache migration skipped due to empty cache.')
    return
  }

  const migrationCompleted = localStorage.getItem(MIGRATION_COMPLETED)

  // 如果整体迁移未完成
  if (!migrationCompleted) {
    // 需要迁移的缓存项
    const MIGRATION_KEYS: string[] = migrationKeys || []
    let hasOldCache = false

    MIGRATION_KEYS.forEach((key) => {
      const oldCache = localStorage.getItem(key)
      if (oldCache) {
        hasOldCache = true
        // 每个缓存项都会被迁移并标记
        migrateAndMark(key)
      }
    })

    // 如果已迁移所有缓存项，则会标记整个迁移
    if (MIGRATION_KEYS.every((key) => localStorage.getItem(`${key}_migrated`) === 'true')) {
      localStorage.setItem(MIGRATION_COMPLETED, 'true')
      console.log('All caches have been migrated successfully.')
    } else if (!hasOldCache) {
      // If no old caches are found, the tag skips the migration
      localStorage.setItem(MIGRATION_SKIPPED, 'true')
      console.log('No old caches found, migration skipped.')
    } else {
      console.log('Some caches are still pending migration.')
    }
  }
}
