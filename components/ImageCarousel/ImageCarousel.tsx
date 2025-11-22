'use client'
import React, { useState } from 'react'
import { Slides } from '../../utils/SlideData.ts'
import ImageWrapper from '../reusable/ImageWrapper.tsx'
import CarouselControls from '../CarouselControls/CarouselControls.tsx'
import styles from './ImageCarousel.module.css'

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

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imagesRow}>
        {Slides.map((slide, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? styles.activeImage : styles.inactiveImage
            }
          >
            <ImageWrapper {...slide} />
          </div>
        ))}
      </div>
      <div className={styles.controlsContainer}>
        <CarouselControls
          onPrevClick={handlePrevious}
          onNextClick={handleNext}
        />
      </div>
    </div>
  )
}
