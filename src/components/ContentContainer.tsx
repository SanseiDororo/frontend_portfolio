import { cn } from '@/lib/utils'

type contentContainerProps = {}
function ContentContainer(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        'w-full bg-white/30 border rounded-xl py-4 shadow-lg',
        props.className
      )}
    />
  )
}
export default ContentContainer
