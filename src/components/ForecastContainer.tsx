import { convertCelsius } from '@/utils/convertCelsius'
import ContentContainer from './ContentContainer'
import { WeatherDetailProps, WeatherDetails } from './WeatherDetails'
import WeatherIcon from './WeatherIcon'

export interface ForecastContainerProps extends WeatherDetailProps {
  weatherIcon: string
  date: string
  day: string
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  description: string
}

function ForecastContainer(props: ForecastContainerProps) {
  const {
    weatherIcon = '02d',
    date = '27.8',
    day = 'Friday',
    temp,
    feels_like,
    temp_min,
    temp_max,
    description,
  } = props

  function convertKelvinToCelsius(arg0: any): import('react').ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
    <ContentContainer className="flex gap-4 items-center bg-white/30">
      {/*Left Section */}
      <section className="flex gap-4 items-center justify-center px-4">
        <div className="flex flex-col items-center ml-20 text-slate-800">
          <WeatherIcon iconName={weatherIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>
        {/* */}
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 ml-24">
          <span className="text-4xl text-slate-800">
            {convertCelsius(temp ?? 0)}°
          </span>
          <p className="whitespace-nowrap text-slate-800">
            <span>Feels Like </span>
            <span>
              <span>{convertCelsius(feels_like ?? 0)} °</span>
            </span>
          </p>
          <p className="capitalize text-center text-slate-800">{description}</p>
        </div>
      </section>
      {/*Right Section */}
      <section className="overflow-x-auto flex justify-between mb-6 gap-4 w-full pr-10 px-36">
        <WeatherDetails {...props} />
      </section>
    </ContentContainer>
  )
}
export default ForecastContainer
