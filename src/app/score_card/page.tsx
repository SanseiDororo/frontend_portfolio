import badges from '@/components/data/badges'
import Badge from '@/components/Badge'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Score from '@/components/Score'
import Summary from '@/components/Summary'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowBackIos } from 'react-icons/md'

export default function ScorePage() {
  return (
    <main className="bg-pale-blue min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-14 right-14 m-4">
        <Link href="/" passHref>
          <div className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition duration-150 ease-in-out">
            <MdOutlineArrowBackIos size="24" />
          </div>
        </Link>
      </div>
      <div className="md:flex md:items-center">
        <section className="bg-white h-auto md:h-[600px] w-full md:w-[800px] rounded-3xl flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="bg-gradient-to-b from-slate-blue-light to-slate-blue-dark w-full md:w-1/2 sm:rounded-b-3xl md:rounded-3xl  py-12 px-16 flex flex-col gap-12 items-center ">
            <Header content={'Your Result'} className="text-pale-blue" />
            <Score overall={'76'} outof={'out of 100'} />
            <Summary
              title={'Great'}
              summary={
                'Your scored higher than 65% of the people who have taken these tests'
              }
            />
          </div>
          {/* Right Side */}
          <div className="bg-white w-full md:w-1/2 rounded-3xl py-12 px-8 flex flex-col pl-14 gap-12">
            <Header content={'Summary'} className={'text-black'} />
            <div className="flex flex-col space-y-4">
              {badges.map((badge, index) => (
                <Badge
                  key={badge.label}
                  icon={badge.icon}
                  label={badge.label}
                  score={badge.score}
                  bgColor={badge.bgColor}
                  textColor={badge.textColor}
                />
              ))}
            </div>
            <Link
              className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-4 px-2 rounded-full flex item-center justify-center"
              href="/"
            >
              <div>Back</div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
