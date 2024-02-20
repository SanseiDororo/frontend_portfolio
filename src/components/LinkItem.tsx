// Badge.tsx
import { cn } from '@/lib/utils'
import Link from 'next/link'

type linkProps = {
  icon: React.ReactNode
  label: string
  href: string
  bgColor?: string
  textColor?: string
}

const LinkItem = ({ icon, label, href, textColor, bgColor }: linkProps) => {
  return (
    <div className="flex w-[350px] sm:w-[350px] 4 md:w-[450px] items-center justify-center">
      <Link
        href={href}
        className=" bg-slate-200 flex flex-col space-y-4 w-full rounded-lg p-4 justify-center"
      >
        <ul className="flex items-center space-x-4 no-underline text-current">
          <li className={cn('text-black', textColor)}>{icon}</li>
          <li className={cn('text-black', textColor)}>{label}</li>
        </ul>
      </Link>
    </div>
  )
}

export default LinkItem
