import { Flex } from '@chakra-ui/react'
import Development from 'components/Development'
import Cell from 'components/Cell'

const SquarePage = () => {
  return (
    <Flex flexDirection={'column'} h={'100%'} gap={'10px'}>
      <Development />
      <Cell title={'基金会捐赠'} />
      <Cell title={'TA的故事'} />
      {/*<Text>123</Text>*/}
    </Flex>
  )
}

export default SquarePage
