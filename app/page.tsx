import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Image Carousel</h1>
      <ImageCarousel />
    </div>
  )
}
