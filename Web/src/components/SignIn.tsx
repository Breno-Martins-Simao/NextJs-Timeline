import { User as UserIcon } from 'lucide-react' // Icons Import

export function SignIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
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
  )
}