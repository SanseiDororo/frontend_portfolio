import { cn } from '@/lib/utils'
import { CiSearch } from 'react-icons/ci'
import { string } from 'zod'

type searchBoxProps = {
  className?: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const SearchBox = ({
  className,
  value,
  onChange,
  onSubmit,
}: searchBoxProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'flex relative items-center justify-center h-10',
        className
      )}
    >
      <input
        type="text"
        onChange={onChange}
        className="placeholder-white border-b border-white focus:outline-none focus:border-pink-200/80 bg-transparent"
        placeholder="Search Location"
      />
      <button>
        <CiSearch className="text-2xl" />
      </button>
    </form>
  )
}
export default SearchBox
