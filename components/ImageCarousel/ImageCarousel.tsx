'use client'
import React, { useState } from 'react'
import { ImageProps } from 'next/image'
import { Slides } from '../../utils/SlideData.ts'
import ImageWrapper from '../reusable/ImageWrapper.tsx'

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Slides.length)
  }

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Slides.length) % Slides.length
    )
  }
  const slide = Slides[currentIndex]
  return (
    <div>
      {Slides.map((slide: ImageProps, index) => (
        <ImageWrapper key={index} {...slide} />
      ))}
    </div>
  )
}
