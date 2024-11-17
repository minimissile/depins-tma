import { Flex } from '@chakra-ui/react'
import TweetCard, { TweetData } from './components/TweetCard.tsx'
import { Tweet } from 'react-tweet'
import AddButton from './components/AddButton.tsx'

/**
 * 发推
 * @constructor
 */
const TweetPage = () => {
  const list: TweetData[] = [
    {
      source: 'Twitter',
      link: 'https://x.com/depinsapp/status/1857402315080393076?t=neg7vOiwWoYZQeOkfvzw5Q&s=05',
      retweet: true,
      follow: true,
      star: true,
      reply: true,
    },
    {
      source: 'Twitter',
      link: 'https://x.com/depinsapp/status/1857602146734322021?s=46&t=8okv4JLyqmLrR_yK9X8nPQ',
      retweet: true,
      follow: true,
      star: true,
      reply: true,
    },
    {
      source: 'Twitter',
      link: 'https://x.com/loyaxmws/status/1857748849651233153',
      retweet: true,
      follow: true,
      star: true,
      reply: true,
    },
  ]

  return (
    <Flex flexDirection={'column'} px={'15px'} gap={'10px'} py={'20px'} pb={'220px'}>
      <AddButton />

      {list.map((item) => {
        return <TweetCard key={item.link} data={item} />
      })}

      {/*<Tweet id="1628832338187636740" />*/}
      {/*<Tweet id="1857809970038808611" />*/}
    </Flex>
  )
}

export default TweetPage
