import { ReactNode } from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { FaWpforms } from 'react-icons/fa'
import { GrScorecard } from 'react-icons/gr'
import { IoEyeOutline } from 'react-icons/io5'
import { LiaBrainSolid } from 'react-icons/lia'
import { MdOutlineDashboard } from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'

interface Link {
  icon: ReactNode
  label: string
  href: string
  bgColor?: string
  textColor?: string
}

const links: Link[] = [
  {
    icon: <GrScorecard />,
    label: 'Score Card',
    href: '/score_card',
    textColor: 'text-red-400',
  },
  {
    icon: <FaWpforms />,
    label: 'Simple Form',
    href: '/form',
    textColor: 'text-violet-blue',
  },
  {
    icon: <MdOutlineDashboard />,
    label: 'Dashboard',
    href: '/dashboard',
    textColor: 'text-pink-400',
  },
  {
    icon: <TiWeatherCloudy />,
    label: 'Weather App',
    href: '/weather',
    textColor: 'text-blue-400',
  },
]

export default links
