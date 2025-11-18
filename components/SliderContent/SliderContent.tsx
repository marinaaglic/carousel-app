import React from 'react'
import { ImageProps } from 'next/image'
import { Slides } from '../../utils/SlideData.ts'
import ImageWrapper from '../reusable/ImageWrapper.tsx'

interface SliderContentProps {
  currentIndex: number
}

export default function SliderContent({ currentIndex }: SliderContentProps) {
  const slide = Slides[currentIndex]
  return (
    <div>
      {Slides.map((slide: ImageProps, index) => (
        <ImageWrapper key={index} {...slide} />
      ))}
    </div>
  )
}
