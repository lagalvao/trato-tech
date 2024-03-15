import styles from './header.module.scss'

type HeaderProps = {
  title: string
  description: string
  className: string
  image: string
}

export default function Header({
  className = '',
  description,
  image,
  title,
}: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img alt={title} src={image} />
      </div>
    </header>
  )
}
