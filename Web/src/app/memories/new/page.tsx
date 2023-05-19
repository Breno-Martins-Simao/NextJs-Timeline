import { MediaPicker } from '@/components/MediaPicker'
import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* Go back to timeline */}
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Go back to Timeline
      </Link>

      {/* Input form */}
      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Attach a file
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              value="true"
              className="h-4 w-4 rounded border-x-gray-400 bg-gray-700 text-purple-500"
            />
            Make a public memory
          </label>
        </div>

        <MediaPicker />

        <textarea
          name="content"
          spellCheck={false}
          className="leading-rela w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Feel free to add histories, facts, videos and infomations about the experience that should be saved in time forever"
        />
      </form>
    </div>
  )
}
