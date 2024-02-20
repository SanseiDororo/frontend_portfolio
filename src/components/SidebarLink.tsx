// Badge.tsx
import { cn } from '@/lib/utils'
import Link from 'next/link'

type sidebarLinkProps = {
  icon: React.ReactNode
  href: string
  textColor?: string
  bgColor?: string
}

const SidebarLinkItem = ({
  icon,
  href,
  textColor,
  bgColor,
}: sidebarLinkProps) => {
  return (
    <>
      <div className="flex w-[350px] sm:w-[350px] 4 md:w-[450px] items-center justify-center ">
        <Link href={href}>
          <div
            className={cn(
              'flex items-center justify-center rounded-lg text-black h-[32px] w-[32px] hover:bg-gray-200',
              bgColor,
              textColor
            )}
          >
            {icon}
          </div>
        </Link>
      </div>
      <span className="border-b-[1px] w-full border-gray-200"></span>
    </>
  )
}

export default SidebarLinkItem
