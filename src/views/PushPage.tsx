import { Flex } from '@chakra-ui/react'
import Development from 'components/Development'

/**
 * 冲推
 * @constructor
 */
const PushPage = () => {
  return (
    <Flex flexDirection={'column'} h={'100%'}>
      <Development />
    </Flex>
  )
}

export default PushPage
