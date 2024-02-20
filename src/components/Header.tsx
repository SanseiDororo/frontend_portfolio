import cn from 'classnames'

type headerProps = {
  content: string
  className?: string
}

function Header({ content, className }: headerProps) {
  return (
    <div>
      <h2
        className={cn('text-2xl font-semibold', className, {
          'text-white': !className?.includes('text-'),
        })}
      >
        {content}
      </h2>
    </div>
  )
}
export default Header
