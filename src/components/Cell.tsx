import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface CellProps {
  title: string
}

const Cell: FC<CellProps> = ({ title }) => {
  return (
    <Flex>
      <Text>{title}</Text>
    </Flex>
  )
}

export default Cell
