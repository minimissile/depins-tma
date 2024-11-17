import { Text, Image, Flex } from '@chakra-ui/react'
import developmentImg from 'assets/images/development.png'

const Development = () => {
  return (
    <Flex flexDirection="column" alignItems={'center'} justifyContent={'center'} h={'100%'}>
      <Image src={developmentImg} w={'40%'} />
      <Text fontSize={'16px'} fontWeight={500}>
        开发中...
      </Text>
    </Flex>
  )
}

export default Development
