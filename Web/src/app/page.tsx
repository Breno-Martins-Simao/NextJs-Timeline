import { User as UserIcon } from 'lucide-react' // Icons Import
import spaceTimeLogo from '../assets/spacetime-logo.svg' // Logo import
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Grid Left Section */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full " />

        {/* Stripe */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* User Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <UserIcon className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Create your account</span> and keep your
            memories safe!
          </p>
        </a>

        {/* Hero Section */}
        <div className="space-y-5">
          <Image src={spaceTimeLogo} alt="Spacetime application logo" />
          <div className="max-w-[420px] space-y-4">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect moments that should not be forgotten in the cosmos and
              share it with the ones you love!
            </p>
          </div>

          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
            href=""
          >
            REGISTER A MEMORY
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Made with 💟 during{' '}
          <a
            target="_blank"
            className="underline hover:text-gray-100"
            href="https://rocketseat.com.br"
            rel="noreferrer" // Avoid CORS
          >
            Rocketseat
          </a>{' '}
          NLW
        </div>
      </div>
      {/* Grid Right Section */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You have not registered any memories yet, start to{' '}
            <a href="" className="underline hover:text-gray-50">
              Create now!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
