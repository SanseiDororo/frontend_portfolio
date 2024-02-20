// Badge.tsx

import { cn } from '@/lib/utils'

type BadgeProps = {
  icon: React.ReactNode
  label: string
  score: string
  bgColor: string
  textColor: string
}

const Badge = ({ icon, label, score, textColor, bgColor }: BadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center p-4 rounded-lg shadow-md justify-between bg-light-red-alfa',
        bgColor
      )}
    >
      <div className="flex items-center gap-2">
        <div className={cn('p-2 rounded-full text-gray-500', textColor)}>
          {icon}
        </div>
        <div className={cn('font-medium text-gray-500', textColor)}>
          {label}
        </div>
      </div>
      <div className="text-gray-500">{score}</div>
    </div>
  )
}

export default Badge
