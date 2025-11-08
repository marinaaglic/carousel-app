import { IArrowsProps } from './CarouselControls'

export default function CarouselControls({
  prevSlide,
  nextSlide,
}: IArrowsProps) {
  return (
    <div>
      <span onClick={prevSlide}>&#10094;</span>
      <span onClick={nextSlide}>&#10095;</span>
    </div>
  )
}
