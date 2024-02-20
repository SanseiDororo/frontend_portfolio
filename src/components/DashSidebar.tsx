import Image from 'next/image'
import sidebarlinks from './data/sidebarlinks'
import { cn } from '@/lib/utils'
import SidebarLinkItem from './SidebarLink'

type DashboardPageProps = {
  children?: React.ReactNode
}

const DashboardPage: React.FC<DashboardPageProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        {/*Links */}
        <div className="flex flex-col items-center gap-4">
          {sidebarlinks.map((link, index) => (
            <SidebarLinkItem
              key={link.id}
              href={link.href}
              icon={link.icon}
              bgColor={link.bgColor}
              textColor={link.textColor}
            />
          ))}
        </div>
        {/*Profile */}
        <div className="">Pic</div>
      </div>

      <main className="ml-20 w-full bg-slate-100 min-h-screen">{children}</main>
    </div>
  )
}
export default DashboardPage
