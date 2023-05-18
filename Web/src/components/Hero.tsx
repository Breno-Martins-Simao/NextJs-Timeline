import Link from 'next/link'
import spaceTimeLogo from '../assets/spacetime-logo.svg' // Logo import
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={spaceTimeLogo} alt="Spacetime application logo" />
      <div className="max-w-[420px] space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect moments that should not be forgotten in the cosmos and share
          it with the ones you love!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new"
      >
        REGISTER A MEMORY
      </Link>
    </div>
  )
}
