import { Flex } from '@chakra-ui/react'
import CommunityCard, { CommunityData } from './components/CommunityCard'

/**
 * 社群
 * @constructor
 */
const CommunityPage = () => {
  const list: CommunityData[] = [
    {
      title: 'DePin赛道&depins暴富8群',
      link: 'https://weixin.qq.com/g/AwYAAF1I6iNsx3ko3NBJQ4m209XxKwiU_3h7QJ8OhalmlRkQe32lnZPlAp8om3Uy',
      platform: '微信',
      admin: '拾光',
    },
    {
      title: 'DePin赛道&depins暴富8群',
      link: 'https://weixin.qq.com/g/AwYAAF1I6iNsx3ko3NBJQ4m209XxKwiU_3h7QJ8OhalmlRkQe32lnZPlAp8om3Uy',
      platform: '微信',
      admin: '拾光',
    },
    {
      title: 'DEPINS CTO核心群',
      link: 'https://t.me/+5bluqoZqvl5lNDNl',
      platform: '电报',
      admin: '拾光',
      condition: '验资1000万DePINs',
    },
  ]

  return (
    <Flex flexDirection={'column'} w={'100%'} px={'15px'} pt={'10px'} gap={'10px'}>
      {list.map((data) => {
        return <CommunityCard key={data.title} data={data} />
      })}
    </Flex>
  )
}

export default CommunityPage
