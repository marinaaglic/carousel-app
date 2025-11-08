import React from 'react'
import SlideData from '../../utils/SlideData'
import Image from 'next/image'

export default function SliderContent() {
  return (
    <div>
      {SlideData.map((slide, index) => {
        return <Image key={index} src={slide.url} alt={slide.title} />
      })}
    </div>
  )
}
