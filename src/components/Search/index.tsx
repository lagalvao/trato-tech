import styles from './search.module.scss'

export default function Search() {
  return (
    <div className={styles.busca}>
      <input
        type="text"
        className={styles.input}
        placeholder="O que você procura"
      />
    </div>
  )
}
