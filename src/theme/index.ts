import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import styles from 'theme/styles'

const theme: ThemeConfig = extendTheme({
  components: {},
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: 'Inter, sans-serif',
  },
  config: {
    initialColorMode: 'dark',
  },
  styles: styles,
})

export default theme
