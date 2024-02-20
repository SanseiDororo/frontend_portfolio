'use client'

import { CiSearch } from 'react-icons/ci'

type weatherInputProps = {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

function WeatherInput({ handleSearch, setLocation }: weatherInputProps) {
  return (
    <form className="flex items-center justify-center md:w-[20%] lg:w-[15%] w-full order-2 md:order-1">
      <input
        type="text"
        placeholder="Search City"
        className="w-full bg-transparent border-b-2 text-white placeholder-white outline-none"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] cursor-pointer text-white">
        <CiSearch />
      </div>
    </form>
  )
}
export default WeatherInput
