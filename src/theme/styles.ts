const styles = {
  global: {
    '@keyframes rotate': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    '@keyframes fade': {
      '0%': {
        opacity: 1,
      },
      '50%': {
        opacity: 0.5,
      },
      '100%': {
        opacity: 1,
      },
    },
    '@keyframes bounce': {
      '0%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(4px)',
      },
      '100%': {
        transform: 'translateY(0)',
      },
    },
    '@keyframes float': {
      '0%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(-3px)',
      },
      '100%': {
        transform: 'translateY(0)',
      },
    },
  },
}

export default styles
