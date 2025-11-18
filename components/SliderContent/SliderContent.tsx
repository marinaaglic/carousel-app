import React from 'react'
import { ImageProps } from 'next/image'
import { Slides } from '../../utils/SlideData.ts'
import ImageWrapper from '../reusable/ImageWrapper.tsx'

export default function SliderContent() {
  return (
    <div>
      {Slides.map((slide: ImageProps, index) => (
        <ImageWrapper key={index} {...slide} />
      ))}
    </div>
  )
}
