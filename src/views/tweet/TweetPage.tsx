import { Flex } from '@chakra-ui/react'
import TweetCard from './components/TweetCard'
import AddButton from './components/AddButton'
import list from 'data/tweet'

/**
 * 发推
 * @constructor
 */
const TweetPage = () => {
  return (
    <Flex flexDirection={'column'} px={'15px'} gap={'10px'} pt={'10px'} pb={'180px'}>
      <AddButton />

      {list.map((item) => {
        return <TweetCard key={item.link} data={item} />
      })}
    </Flex>
  )
}

export default TweetPage
