import { ImageProps } from 'next/image'
import Image from 'next/image'

export default function ImageWrapper({ ...rest }: ImageProps) {
  return (
    <figure>
      <Image {...rest} fill />
    </figure>
  )
}
