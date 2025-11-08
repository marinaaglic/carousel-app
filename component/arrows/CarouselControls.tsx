import { IArrowsProps } from './CarouselControls'

export default function CarouselControls({
  onPrevClick,
  onNextClick,
}: IArrowsProps) {
  return (
    <div>
      <span onClick={onPrevClick}>&#10094;</span>
      <span onClick={onNextClick}>&#10095;</span>
    </div>
  )
}
