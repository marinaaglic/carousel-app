'use client'
import CarouselControls from '../CarouselControls/CarouselControls.tsx'
import { useState } from 'react'
import { Slides } from '@/utils/SlideData.ts'

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

  if (currentIndex > Slides.length - 3) {
    console.log(currentIndex)
    setCurrentIndex(0)
    console.log('hi')
  }
  return (
    <div>
      <CarouselControls onPrevClick={handlePrevious} onNextClick={handleNext} />
    </div>
  )
}
