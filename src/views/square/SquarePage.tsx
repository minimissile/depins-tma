import { Flex } from '@chakra-ui/react'
// import Development from 'components/Development'
import Cell from 'components/Cell'

const SquarePage = () => {
  /**
   * 观看广告
   * @param times 观看次数
   * @param interval 间隔时间
   */
  const watchAds = (times: number, interval: number = 5000) => {
    if (!window.Adsgram) {
      console.error('Adsgram is not initialized')
      return
    }

    let remainingTimes = times
    // 4914
    // 5355
    const AdController = window.Adsgram.init({ blockId: '4914', debugger: false })

    const playAd = () => {
      if (remainingTimes <= 0) {
        console.log('All ads watched successfully.')
        return
      }

      AdController.show()
        .then((result: unknown) => {
          // 用户观看广告到最后
          console.log('Ad watched successfully:', result)

          remainingTimes--
          if (remainingTimes > 0) {
            console.log(`Remaining ads to watch: ${remainingTimes}`)
            setTimeout(playAd, interval)
          } else {
            console.log('Ad watching completed!')
            // 观看所有广告后奖励用户的代码
          }
        })
        .catch((error: unknown) => {
          // 用户跳过了广告或遇到了错误
          console.error('Error or ad skipped:', error)
          // （可选）递减计数器并重试
          remainingTimes--
          if (remainingTimes > 0) {
            console.log(`Remaining ads to watch: ${remainingTimes}`)
            // 等待指定的间隔，然后播放下一个广告
            setTimeout(playAd, interval)
          } else {
            console.log('Ad watching stopped due to errors or skipping.')
          }
        })
    }

    playAd()
  }

  return (
    <Flex flexDirection={'column'} h={'100%'} gap={'10px'} px={'15px'} pt={'10px'}>
      <Cell title={'基金会捐赠'} />
      <Cell title={'TA的故事'} />
      <Cell title={'赞赏激励'} onClick={() => watchAds(3, 10 * 1000)} />
    </Flex>
  )
}

export default SquarePage
