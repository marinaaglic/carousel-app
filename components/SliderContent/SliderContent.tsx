import React from 'react'
import { ImageProps } from 'next/image'
import { Slides } from '../../utils/SlideData'
import ImageWrapper from '../reusable/ImageWrapper'

export default function SliderContent() {
  return (
    <div>
      {Slides.map((slide: ImageProps, index) => (
        <ImageWrapper key={index} {...slide} />
      ))}
    </div>
  )
}
