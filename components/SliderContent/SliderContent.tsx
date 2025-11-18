import React from 'react'
import { ImageProps } from 'next/image'
import { Slides } from '../../utils/SlideData'
import ImageWrapper from '../reusable/ImageWrapper'

export default function SliderContent() {
  return (
    <div>
      <h1>Images</h1>
      {Slides.map((slide: ImageProps, index) => (
        <ImageWrapper key={index} {...slide} />
      ))}
    </div>
  )
}
