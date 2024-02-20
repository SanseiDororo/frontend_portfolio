import { ReactNode } from 'react'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoDiamondOutline } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'

interface sidebarLink {
  id: number
  icon: ReactNode
  href: string
  textColor?: string
  bgColor?: string
}

const sidebarlinks: sidebarLink[] = [
  {
    id: 1,
    icon: <IoDiamondOutline />,
    href: '/',
    bgColor: 'bg-violet-500',
    textColor: 'text-white',
  },
  {
    id: 2,
    icon: <RxDashboard />,
    href: '/',
    bgColor: 'bg-gray-100',
  },
  {
    id: 3,
    icon: <LuUser2 />,
    href: '/',
    bgColor: 'bg-gray-100',
  },
  {
    id: 4,
    icon: <HiOutlineShoppingBag />,
    href: '/',
    bgColor: 'bg-gray-100',
  },
  {
    id: 5,
    icon: <FiSettings />,
    href: '/',
    bgColor: 'bg-gray-100',
  },
  {
    id: 6,
    icon: <MdOutlineArrowBackIos />,
    href: '/',
    bgColor: 'bg-gray-100',
  },
]
export default sidebarlinks
