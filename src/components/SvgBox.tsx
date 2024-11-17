import React, { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface SvgBoxProps extends BoxProps {
  svgColor?: string
}

const SvgBox: FC<SvgBoxProps> = ({ children, svgColor, ...other }) => {
  return (
    <Box as={Container} svgColor={svgColor} {...other}>
      {children}
    </Box>
  )
}

const Container = styled.div<{ svgColor?: string }>`
  > svg {
    width: 100%;
    height: 100%;
    fill: ${({ svgColor }) => svgColor || 'currentColor'};
  }
`

export default SvgBox
