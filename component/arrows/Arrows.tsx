import React from 'react'
import { ArrowsType } from './Arrows.types'
import styles from './Arrows.module.scss'

export default function Arrows({ prevSlide, nextSlide }: ArrowsType) {
  return (
    <div className={styles.arrows}>
      <span className={styles.prevArrow} onClick={prevSlide}>
        &#10094;
      </span>
      <span className={styles.nextArrow} onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  )
}
