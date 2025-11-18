import styles from './page.module.css'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel.tsx'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home page</h1>
      <ImageCarousel />
    </div>
  )
}
