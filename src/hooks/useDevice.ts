import WebApp from '@twa-dev/sdk'

type VibrateStyle = 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'

const useDevice = () => {
  const vibrate = (style: VibrateStyle = 'light') => {
    const map: Record<VibrateStyle, number> = {
      light: 10, // Light vibration
      medium: 20, // Medium vibration
      heavy: 30, // Strong vibration
      rigid: 40, // Stiff vibration
      soft: 5, // Gentle vibration
    }

    const value: number = map[style]

    if (navigator && 'vibrate' in navigator) {
      navigator.vibrate(value)
    } else {
      WebApp.HapticFeedback.impactOccurred(style)
    }
  }

  return {
    vibrate,
  }
}

export default useDevice
