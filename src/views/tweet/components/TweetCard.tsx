import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import JumpIcon from 'assets/svgs/icon_jump.svg'
import SvgBox from 'components/SvgBox'
import WebApp from '@twa-dev/sdk'

export interface TweetData {
  source: string
  link: string
  star?: boolean
  follow?: boolean
  retweet?: boolean
  reply?: boolean
}

export interface TweetCardProps {
  data: TweetData
}

/**
 * 推文卡片
 * @constructor
 */
const TweetCard: FC<TweetCardProps> = ({ data }) => {
  /**
   * 跳转链接
   */
  const handleJump = () => {
    WebApp.openLink(data.link)
  }

  /**
   * 跳转点赞
   */
  const handleStar = () => {
    const id = _extractTweetId(data.link)
    WebApp.openLink(`https://x.com/intent/like?tweet_id=${id}`)
  }

  const handleReply = () => {
    const id = _extractTweetId(data.link)
    const text = '123'
    WebApp.openLink(`https://x.com/intent/post?in_reply_to=${id}&text=${text}`)
  }

  const handleRetweet = () => {
    const id = _extractTweetId(data.link)
    WebApp.openLink(`https://x.com/intent/retweet?tweet_id=${id}`)
  }

  /**
   * 提取推文 ID 的方法
   * @param url 推文链接
   * @returns 推文 ID（字符串）或 null
   */
  const _extractTweetId = (url: string): string | null => {
    const regex = /\/status\/(\d+)/ // 匹配 /status/ 后的数字
    const match = url.match(regex)
    return match ? match[1] : null
  }

  return (
    <Flex
      flexDirection={'column'}
      border={'1px solid rgba(200,200,200,0.1)'}
      p={'15px'}
      borderRadius={'10px'}
      boxShadow={'0px 0px 10px #1b1a1c'}
      gap={'10px'}
      position={'relative'}
    >
      <SvgBox
        w={'24px'}
        h={'24px'}
        position={'absolute'}
        bottom={'14px'}
        right={'14px'}
        cursor={'pointer'}
        onClick={handleJump}
      >
        <JumpIcon />
      </SvgBox>
      <Text>{data.link}</Text>
      <Text>流量来源: {data.source}</Text>
      <Flex gap={'15px'} alignItems={'center'}>
        操作:
        {data.star ? (
          <Text onClick={handleStar} cursor={'pointer'}>
            点赞
          </Text>
        ) : null}
        <Box w={'1px'} h={'15px'} bg={'#fff'} />
        {data.reply ? (
          <Text onClick={handleReply} cursor={'pointer'}>
            回复
          </Text>
        ) : null}
        <Box w={'1px'} h={'15px'} bg={'#fff'} />
        {data.retweet ? (
          <Text onClick={handleRetweet} cursor={'pointer'}>
            转推
          </Text>
        ) : null}
      </Flex>
    </Flex>
  )
}

export default TweetCard
