import { ReactNode } from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { IoEyeOutline } from 'react-icons/io5'
import { LiaBrainSolid } from 'react-icons/lia'

interface Badge {
  icon: ReactNode
  label: string
  score: string
  bgColor: string
  textColor: string
}

const badges: Badge[] = [
  {
    icon: <AiOutlineThunderbolt />,
    label: 'Reaction',
    score: '80 / 100',
    bgColor: 'bg-light-red-alfa',
    textColor: 'text-light-red-full',
  },
  {
    icon: <LiaBrainSolid />,
    label: 'Memory',
    score: '92 / 100',
    bgColor: 'bg-orange-yellow-alfa',
    textColor: 'text-orange-yellow-full',
  },
  {
    icon: <BsChatDots />,
    label: 'Verbal',
    score: '61 / 100',
    bgColor: 'bg-green-teal-alfa',
    textColor: 'text-green-teal-full',
  },
  {
    icon: <IoEyeOutline />,
    label: 'Visual',
    score: '72 / 100',
    bgColor: 'bg-cobalt-blue-alfa',
    textColor: 'text-cobalt-blue-full',
  },
]

export default badges
