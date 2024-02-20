import cn from 'classnames'

type heroProps = {
  content: string
  className?: string
}

function Hero({ content, className }: heroProps) {
  return (
    <div>
      <h2 className={cn('text-4xl', className)}>{content}</h2>
    </div>
  )
}
export default Hero
