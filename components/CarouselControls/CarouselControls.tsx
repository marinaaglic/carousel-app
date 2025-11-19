import { ICarouselControlsProps } from './CarouselControls.ts'
import styles from './CarouselControls.module.css'

export default function CarouselControls({
  onPrevClick,
  onNextClick,
}: ICarouselControlsProps) {
  return (
    <div className={styles.controlsWrapper}>
      <span onClick={onPrevClick} className={styles.leftArrow}>
        &#10094;
      </span>
      <span onClick={onNextClick} className={styles.rightArrow}>
        &#10095;
      </span>
    </div>
  )
}
