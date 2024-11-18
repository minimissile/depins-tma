import { Flex, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import ArrowIcon from 'assets/svgs/arrow_right.svg'
import SvgBox from './SvgBox.tsx'

interface CellProps {
  title: string
  onClick?: () => void
}

const Cell: FC<CellProps> = ({ title, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      border={'1px solid rgba(200,200,200,0.1)'}
      p={'15px'}
      borderRadius={'10px'}
      boxShadow={'0px 0px 8px #1b1a1c'}
      gap={'10px'}
      alignItems={'center'}
    >
      <Text>{title}</Text>
      <SvgBox w={'16px'} h={'16px'} ml={'auto'}>
        <ArrowIcon />
      </SvgBox>
    </Flex>
  )
}

export default Cell
