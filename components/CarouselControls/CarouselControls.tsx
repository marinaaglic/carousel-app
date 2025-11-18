import { ICarouselControlsProps } from './CarouselControls.ts'

export default function CarouselControls({
  onPrevClick,
  onNextClick,
}: ICarouselControlsProps) {
  return (
    <div>
      <span onClick={onPrevClick}>&#10094;</span>
      <span onClick={onNextClick}>&#10095;</span>
    </div>
  )
}
