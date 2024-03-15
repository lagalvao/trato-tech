import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import styles from './default.module.scss'
import Footer from '../../components/Footer'

export default function Default() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
