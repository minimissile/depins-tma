import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export interface CommunityData {
  title: string
  link: string
  // 平台
  platform: string
  // 管理员
  admin: string
  // 进群要求
  condition?: string
}

interface CommunityCardProps {
  data: CommunityData
}

/**
 * 社群卡片
 * @constructor
 */
const CommunityCard: FC<CommunityCardProps> = ({ data }) => {
  return (
    <Flex
      flexDirection={'column'}
      border={'1px solid rgba(200,200,200,0.1)'}
      p={'15px'}
      borderRadius={'8px'}
      boxShadow={'0px 0px 10px #1b1a1c'}
      gap={'10px'}
    >
      <Text fontSize={'18px'} fontWeight={'600'}>
        {data.title}
      </Text>
      <Text>社群类型: {data.platform}</Text>
      <Text>管理员: {data.admin}</Text>
      <Text hidden={!data.condition}>进群要求: {data.condition}</Text>
    </Flex>
  )
}

export default CommunityCard
