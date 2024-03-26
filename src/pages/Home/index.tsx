import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../../store'

import Header from '../../components/Header'

import styles from './home.module.scss'

import headerImg from '../../assets/initial.png'

export default function Home() {
  const navigate = useNavigate()

  const { categories } = useSelector((state: ApplicationState) => state)

  return (
    <div>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil!"
        image={headerImg}
        className={styles.header}
      />

      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>

        <div className={styles['categorias-container']}>
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${category.id}`)}
            >
              <img src={category.thumbnail} alt={category.nome} />
              <h1>{category.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
