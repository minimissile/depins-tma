import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import useDevice from 'hooks/useDevice'

import TweetIcon from 'assets/tabbar/tab_tweet.svg'
import TweetActiveIcon from 'assets/tabbar/tab_tweet_active.svg'

import PushIcon from 'assets/tabbar/tab_push.svg'
import PushActiveIcon from 'assets/tabbar/tab_push_active.svg'

import CommunityIcon from 'assets/tabbar/tab_community.svg'
import CommunityActiveIcon from 'assets/tabbar/tab_community_active.svg'

import SquareIcon from 'assets/tabbar/tab_square.svg'
import SquareActiveIcon from 'assets/tabbar/tab_square_active.svg'

const Tabbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const { vibrate } = useDevice()

  const tabs = [
    {
      to: '/tweet',
      label: '冲推',
      icon: <TweetIcon />,
      activeIcon: <TweetActiveIcon />,
      width: '28px',
      height: '28px',
    },
    { to: '/push', label: '发推', icon: <PushIcon />, activeIcon: <PushActiveIcon /> },
    { to: '/community', label: '社群', icon: <CommunityIcon />, activeIcon: <CommunityActiveIcon /> },
    { to: '/square', label: '广场', icon: <SquareIcon />, activeIcon: <SquareActiveIcon /> },
  ]

  const handleClick = (link: string) => {
    vibrate()
    navigate(link)
  }

  return (
    <Box
      w={'100%'}
      maxWidth={'640px'}
      position={'fixed'}
      bottom={'0'}
      zIndex={100}
      bg={'#1b1a1c'}
      pb={'calc(env(safe-area-inset-bottom) / 2)'}
      boxShadow={'0px 0px 10px #1b1a1c'}
    >
      <Flex h={'72px'} alignItems={'center'} borderRadius={'100px'} justifyContent={'space-between'}>
        {tabs.map((tab) => (
          <TabItem
            width={tab.width}
            height={tab.height}
            key={tab.label}
            to={tab.to}
            icon={tab.icon}
            activeIcon={tab.activeIcon}
            label={tab.label}
            onClick={() => handleClick(tab.to)}
            isActive={pathname.includes(tab.to)}
          />
        ))}
      </Flex>
    </Box>
  )
}

interface TabItemProps {
  to: string
  icon: React.ReactNode
  activeIcon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
  width?: string
  height?: string
  isGradient?: boolean
}

export const TabItem: React.FC<TabItemProps> = ({
  width = '24px',
  height = '24px',
  icon,
  onClick,
  activeIcon,
  label,
  isActive,
  isGradient = false,
}) => (
  <TabItemContainer onClick={onClick}>
    <Box
      as={SvgBox}
      width={width}
      h={height}
      mb={'3px'}
      cursor={'pointer'}
      className={isActive && isGradient ? 'flame-active' : ''}
    >
      {isActive ? activeIcon : icon}
    </Box>

    <TabbarText className={isGradient ? 'gradient-text' : ''} isActive={isActive}>
      {label}
    </TabbarText>
  </TabItemContainer>
)

const TabItemContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: transform 0.3s ease;
  height: 100%;
  padding-bottom: 12px;
  width: 20%;
  cursor: pointer;
`

const SvgBox = styled.div`
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  &:active svg {
    transform: scale(1.1);
  }
`

const TabbarText = styled('div')<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#4284ff' : '#fff')};
  font-size: 12px;
  font-weight: 500;
  line-height: 115%;
  margin-top: 4px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.8)};
  cursor: pointer;
`

export default Tabbar
