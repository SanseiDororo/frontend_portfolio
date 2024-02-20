import { CiDroplet } from 'react-icons/ci'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { PiEyeLight } from 'react-icons/pi'
import { WiStrongWind } from 'react-icons/wi'

export interface WeatherDetailProps {
  visibility: string
  humidity: string
  windSpeed: string
  airPressure: string
  sunrise: string
  sunset: string
}

export function WeatherDetails(props: WeatherDetailProps) {
  const {
    visibility = '25km',
    humidity = '61%',
    windSpeed = '7km',
    airPressure = '1012 hPa',
    sunrise = '6:20',
    sunset = '18:48',
  } = props

  return (
    <div className="flex items-center gap-48 justify-center pt-8">
      <SingleWeatherDetail
        icon={<PiEyeLight />}
        information="Visibility"
        value={props.visibility}
      />
      <SingleWeatherDetail
        icon={<CiDroplet />}
        information="Humidity"
        value={props.humidity}
      />
      <SingleWeatherDetail
        icon={<WiStrongWind />}
        information="Wind Speed"
        value={props.windSpeed}
      />
      <SingleWeatherDetail
        icon={<WiStrongWind />}
        information="Air Pressure"
        value={props.airPressure}
      />
      <SingleWeatherDetail
        icon={<GiSunrise />}
        information="Sunrise"
        value={props.sunrise}
      />
      <SingleWeatherDetail
        icon={<GiSunset />}
        information="Sunset"
        value={props.sunset}
      />
    </div>
  )
}

export interface SingleWeatherDetailProps {
  information: string
  icon: React.ReactNode
  value: string
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-8 items-center text-xs font-semibold text-slate-800">
      <p className="whitespace-nowrap text-base">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p className="text-base">{props.value}</p>
    </div>
  )
}
