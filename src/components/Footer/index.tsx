import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import styles from './footer.module.scss'

const iconProps = {
  color: 'white',
  size: 24,
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconProps} />
        <FaTwitter {...iconProps} />
        <FaInstagram {...iconProps} />
      </div>
      <span>Desenvolvido por Alura.</span>
    </footer>
  )
}
