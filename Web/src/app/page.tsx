import { User as UserIcon } from 'lucide-react'

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
