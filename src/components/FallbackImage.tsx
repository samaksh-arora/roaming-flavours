import { useState, type ReactNode } from 'react'

type Props = {
  src: string
  alt: string
  fallback: ReactNode
  className?: string
}

export default function FallbackImage({ src, alt, fallback, className }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) return <>{fallback}</>

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}
