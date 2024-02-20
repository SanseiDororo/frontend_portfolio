'use client'

import { CiLocationOn } from 'react-icons/ci'
import { MdLocationSearching, MdOutlineArrowBackIos } from 'react-icons/md'
import { PiSunDimThin } from 'react-icons/pi'
import SearchBox from './SearchBox'
import { useState } from 'react'
import axios from 'axios'
import { useAtom } from 'jotai'
import { loadingCityAtom, placeAtom } from '@/app/atom'
import Link from 'next/link'

type weatherNavProps = { location?: string }

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY

function WeatherNav({ location }: weatherNavProps) {
  const [city, setCity] = useState('Ljubljana')
  const [error, setError] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [place, setPlace] = useAtom(placeAtom)
  const [_, setLoadingCity] = useAtom(loadingCityAtom)

  async function handleInputChange(value: string) {
    setCity(value)
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}`
        )
        const suggestions = response.data.list.map((item: any) => item.name)
        setSuggestions(suggestions)
        setError('')
        setShowSuggestions(true)
      } catch (error) {
        setSuggestions([])
        setShowSuggestions(false)
      }
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  function handleSuggestionClick(value: string) {
    setCity(value)
    setShowSuggestions(false)
  }

  function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    setLoadingCity(true)
    e.preventDefault()
    if (suggestions.length == 0) {
      setError('Location not found')
      setLoadingCity(false)
    } else {
      setError('')
      setTimeout(() => {
        setLoadingCity(false)
        setPlace(city)
        setShowSuggestions(false)
      }, 500)
    }
  }

  function handleCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (postiion) => {
        const { latitude, longitude } = postiion.coords
        try {
          setLoadingCity(true)
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
          )
          setTimeout(() => {
            setLoadingCity(false)
            setPlace(response.data.name)
          }, 500)
        } catch (error) {
          setLoadingCity(false)
        }
      })
    }
  }
  return (
    <>
      <nav className="bg-slate-600 sticky-top flex w-full flex-col h-fit">
        {/*Input & Logo */}
        <div className="flex flex-col justify-between items-center p-12 md:flex-row">
          {/*Search Section */}
          <div className="flex gap-2 items-center justify-center">
            <div className="relative hidden md:flex">
              {/*SearchBox */}
              <SearchBox
                value={city}
                onSubmit={handleSubmitSearch}
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <CiLocationOn className="text-white text-2xl cursor-pointer hover:opacity-50" />
              <MdLocationSearching
                title="Current Location"
                className="text-white text-2xl cursor-pointer hover:opacity-50"
                onClick={handleCurrentLocation}
              />
              <p className="text-white text-sm">{location}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            {/* Back arrow */}
            <Link href="/" passHref>
              <div className="text-white inline-flex items-center justify-center p-2 rounded-full hover:text-gray-900 hover:bg-gray-200 transition duration-150 ease-in-out">
                <MdOutlineArrowBackIos size="24" />
              </div>
            </Link>
            <Link href="/">
              <PiSunDimThin className="text-white text-5xl" />
            </Link>
            <h1 className="text-white py-2 rounded-xl font-bold text-2xl px-4 mb-8 md:mb-0 order-1">
              <Link href="/">Weather App</Link>
            </h1>
          </div>
        </div>
      </nav>
      <section className="flex max-w-7xl px-3 md:hidden">
        <div className="relative">
          {/*SearchBox */}
          <SearchBox
            value={city}
            onSubmit={handleSubmitSearch}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </section>
    </>
  )
}

export default WeatherNav

function SuggetionBox({
  showSuggestions,
  suggestions,
  handleSuggestionClick,
  error,
}: {
  showSuggestions: boolean
  suggestions: string[]
  handleSuggestionClick: (item: string) => void
  error: string
}) {
  return (
    <>
      {((showSuggestions && suggestions.length > 1) || error) && (
        <ul className="mb-4 bg-white/20 absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">
          {error && suggestions.length < 1 && (
            <li className="text-red-950 p-1 "> {error}</li>
          )}
          {suggestions.map((item, i) => (
            <div key={i} className="text-black">
              <li
                onClick={() => handleSuggestionClick(item)}
                className="cursor-pointer p-1 rounded  text-slate-800 hover:bg-gray-200"
              >
                {item}
              </li>
            </div>
          ))}
        </ul>
      )}
    </>
  )
}
