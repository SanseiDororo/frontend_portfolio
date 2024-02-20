import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {}

const WeatherIcon = (
  props: React.HTMLProps<HTMLDivElement> & {
    className?: string
    iconName: string
  }
) => {
  return (
    <div {...props} className={cn('relative h-20 w-20', props.className)}>
      <Image
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
        width={100}
        height={100}
        alt="Weather Icon"
        className="absolute h-full w-full"
      />
    </div>
  )
}
export default WeatherIcon
