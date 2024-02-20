import links from '@/components/data/links'
import LinkItem from '@/components/LinkItem'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Score from '@/components/Score'
import Summary from '@/components/Summary'
import Image from 'next/image'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="bg-slate-600 min-h-screen flex flex-col items-center pt-80">
      <section className="w-[80%] flex flex-col md:flex-row gap-32 justify-center items-center">
        {/*Main Header Section*/}
        <div className="flex flex-col gap-3 md:px-2 py-2 lg:mt-0 md:-pt-46">
          <Hero content={'Welcome to the'} />
          <Hero
            content={'Frontend Portfolio!'}
            className="text-4xl font-bold text-red-400"
          />
          <div className="flex flex-row gap-4">
            <Hero content={'// React'} className="text-lg text-slate-400" />
            <Hero content={'// NextJS'} className="text-lg text-slate-400" />
            <Hero content={'// Tailwind'} className="text-lg text-slate-400" />
            <Hero content={'// ShadCN'} className="text-lg text-slate-400" />
          </div>
        </div>
        {/*Link Section */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <LinkItem
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
              textColor={link.textColor}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
