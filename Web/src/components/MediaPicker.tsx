'use client'
import { ChangeEvent, useState } from 'react'

// Reccomended to use in solo componentes that are alone and independent as a child

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }

  return (
    <>
      <input
        onChange={onMediaSelected}
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt="Selected image"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
