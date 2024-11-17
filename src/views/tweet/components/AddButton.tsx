import { IconButton, Text, Flex } from '@chakra-ui/react'
import AddSvg from 'assets/svgs/icon_add.svg'

const AddButton = () => {
  /**
   * 添加线报
   */
  const handleAdd = () => {}

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      position={'fixed'}
      bottom={'100px'}
      right={'20px'}
      onClick={handleAdd}
    >
      <IconButton aria-label={'add'}>
        <AddSvg />
      </IconButton>
      <Text>线报</Text>
    </Flex>
  )
}

export default AddButton
