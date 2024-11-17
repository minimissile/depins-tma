import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export interface CommunityData {
  title: string
  link: string
  platform: string
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
      borderRadius={'10px'}
      boxShadow={'0px 0px 10px #1b1a1c'}
      gap={'10px'}
    >
      <Text>{data.title}</Text>
    </Flex>
  )
}

export default CommunityCard
