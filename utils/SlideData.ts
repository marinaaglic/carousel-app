import { StaticImageData } from 'next/image'
import { ImageProps } from 'next/image'
import First from '../public/image1.jpg'
import Second from '../public/image2.jpg'
import Third from '../public/image3.jpg'
import Fourth from '../public/image4.jpg'
import Fifth from '../public/image5.jpg'

export const Slides: ImageProps[] = [
  {
    src: First,
    alt: 'First slide',
  },
  {
    src: Second,
    alt: 'Second slide',
  },
  {
    src: Third,
    alt: 'Third slide',
  },
  {
    src: Fourth,
    alt: 'Fourth slide',
  },
  {
    src: Fifth,
    alt: 'Fifth slide',
  },
]
