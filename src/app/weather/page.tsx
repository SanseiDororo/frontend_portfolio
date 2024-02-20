'use client'

import WeatherNav from '@/components/WeatherNav'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { format, fromUnixTime, parseISO } from 'date-fns'
import ContentContainer from '@/components/ContentContainer'
import { convertCelsius } from '@/utils/convertCelsius'
import WeatherIcon from '@/components/WeatherIcon'
import { getDayOrNight } from '@/utils/dayOrNight'
import { WeatherDetails } from '@/components/WeatherDetails'
import { mToKm } from '@/utils/mToKm'
import { convertWindSpeed } from '@/utils/windSpeed'
import ForecastContainer from '@/components/ForecastContainer'
import { useAtom } from 'jotai'
import { placeAtom, loadingCityAtom } from '../atom'
import Skeleton from '@/components/Skeleton'

type weatherProps = {}

//https://api.openweathermap.org/data/2.5/forecast?q=ljubljana&appid=c7498e033f3a95c81ffe37b3dd965956&cnt=56

interface WeatherData {
  cod: string
  message: number
  cnt: number
  list: WeatherListItem[]
  city: CityInfo
}

interface WeatherListItem {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  weather: Weather[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface CityInfo {
  id: number
  name: string
  coord: {
    lat: number
    lon: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

function Weather({}: weatherProps) {
  const [place, setPlace] = useAtom(placeAtom)
  const [loadingCity] = useAtom(loadingCityAtom)
  const { isLoading, error, data, refetch } = useQuery<WeatherData>(
    'repoData',
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
      )
      return data
    }
  )

  useEffect(() => {
    refetch()
  }, [place, refetch])

  const firstData = data?.list[0]

  const uniqueDates = [
    ...new Set(
      data?.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split('T')[0]
      )
    ),
  ]

  // Filtering data to get the first entry after 6 AM for each unique date
  const firstDataForEachDate = uniqueDates.map((date) => {
    return data?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split('T')[0]
      const entryTime = new Date(entry.dt * 1000).getHours()
      return entryDate === date && entryTime >= 6
    })
  })

  if (isLoading)
    return (
      <div>
        <WeatherNav />
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-violet-500 to-orange-300">
          <p className="text-white text-2xl animate-bounce">Loading...</p>
        </div>
      </div>
    )

  return (
    <section className="min-h-screen bg-gradient-to-tr from-violet-500 to-orange-300">
      <div>
        <WeatherNav location={data?.city.name} />
        <main className="px-3 max-w-[90%] mx-auto flex-col gap-9 w-full pb-10 pt-28">
          {loadingCity ? (
            <Skeleton />
          ) : (
            <>
              <section className="space-y-8">
                {/* Data for today */}
                <div className="space-y-6">
                  <h2 className="flex gap-1 text-2xl items-center text-slate-800">
                    <p>{format(parseISO(firstData?.dt_txt ?? ''), 'EEEE')}: </p>
                    <p className="text-slate-800">
                      {format(parseISO(firstData?.dt_txt ?? ''), 'dd.MM.yyyy')}
                    </p>
                  </h2>
                  <ContentContainer className="flex gap-16 px-6 items-center">
                    <div className="flex flex-col px-4 gap-4">
                      <span className="text-5xl text-slate-800">
                        {convertCelsius(firstData?.main.temp ?? 0)}°C
                      </span>
                      <p className="flex flex-col items-center text-xs space-x-1 whitespace-nowrap text-slate-800">
                        <span className="text-sm  text-slate-800">
                          Feels Like:{' '}
                          {convertCelsius(firstData?.main.feels_like ?? 0)}°C
                        </span>
                        <div className="flex justify-center gap-2">
                          <p className="text-xs space-y-1 whitespace-nowrap">
                            <span className="text-sm  text-black">
                              {convertCelsius(firstData?.main.temp_min ?? 0)}°C
                              ↓
                            </span>
                          </p>
                          <p className="text-xs space-x-2">
                            <span className="text-sm  text-black">
                              {convertCelsius(firstData?.main.temp_max ?? 0)}°C
                              ↑
                            </span>
                          </p>
                        </div>
                      </p>
                    </div>
                    {/*Time and Weather Icon */}
                    <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between py-12">
                      {data?.list.map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-between gap-2 items-center text-xs text-slate-800 whitespace-nowrap"
                        >
                          <p>{format(parseISO(data.dt_txt), 'h:mm a')}</p>
                          <WeatherIcon
                            iconName={getDayOrNight(
                              data.weather[0].icon,
                              data.dt_txt
                            )}
                          />
                          <p>{convertCelsius(firstData?.main.temp ?? 0)}°C</p>
                        </div>
                      ))}
                    </div>
                  </ContentContainer>
                </div>
                <div className="flex gap-4">
                  {/*Left Container */}
                  <ContentContainer className="w-fit justify-center flex flex-col items-center p-16">
                    <p className="capitalize text-center text-slate-800">
                      {firstData?.weather[0].description}
                    </p>
                    <WeatherIcon
                      iconName={getDayOrNight(
                        firstData?.weather[0].icon ?? '',
                        firstData?.dt_txt ?? ''
                      )}
                    />
                  </ContentContainer>
                  {/*Right Container */}
                  <ContentContainer className="bg-yellow-200/30 px-6 gap-4 overflow-x-auto">
                    <WeatherDetails
                      visibility={mToKm(firstData?.visibility ?? 10000)}
                      airPressure={`${firstData?.main.pressure} hPa`}
                      humidity={`${firstData?.main.humidity}%`}
                      windSpeed={convertWindSpeed(
                        firstData?.wind.speed ?? 1.67
                      )}
                      sunrise={format(
                        fromUnixTime(data?.city.sunrise ?? 1702949452),
                        'H:mm'
                      )}
                      sunset={format(
                        fromUnixTime(data?.city.sunset ?? 1702949452),
                        'H:mm'
                      )}
                    />
                  </ContentContainer>
                </div>
              </section>
              <section className="space-y-8">
                {/*7 day forecast data */}
                <p className="text-2xl text-slate-800 mt-12">
                  Forecast (7 days)
                </p>
                {firstDataForEachDate.map((d, index) => (
                  <ForecastContainer
                    key={index}
                    description={d?.weather[0].description ?? ''}
                    weatherIcon={d?.weather[0].icon ?? '01d'}
                    date={format(parseISO(d?.dt_txt ?? ''), 'dd.MM')}
                    day={format(parseISO(d?.dt_txt ?? ''), 'EEEE')}
                    feels_like={d?.main.feels_like ?? 0}
                    temp={d?.main.temp ?? 0}
                    temp_max={d?.main.temp_max ?? 0}
                    temp_min={d?.main.temp_min ?? 0}
                    airPressure={`${d?.main.pressure} hPa `}
                    humidity={`${d?.main.humidity}% `}
                    sunrise={format(
                      fromUnixTime(data?.city.sunrise ?? 1702517657),
                      'H:mm'
                    )}
                    sunset={format(
                      fromUnixTime(data?.city.sunset ?? 1702517657),
                      'H:mm'
                    )}
                    visibility={`${mToKm(d?.visibility ?? 10000)} `}
                    windSpeed={`${convertWindSpeed(d?.wind.speed ?? 1.64)} `}
                  />
                ))}
              </section>
            </>
          )}
        </main>
      </div>
    </section>
  )
}
export default Weather
