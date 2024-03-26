import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ApplicationState } from '../../store'
import Header from '../../components/Header'
import Item from '../../components/Item'

import styles from './category.module.scss'

export default function Category() {
  const { nomeCategoria } = useParams()

  const { category, items } = useSelector((state: ApplicationState) => ({
    category: state.categories.find(
      (category) => category.id === nomeCategoria,
    ),
    items: state.items.filter((item) => item.categoria === nomeCategoria),
  }))

  return (
    <div>
      {category && (
        <Header
          title={category.nome}
          description={category.descricao}
          image={category.header}
          className=""
        />
      )}

      <div className={styles.itens}>
        {items?.map((item) => <Item key={item.id} content={item} />)}
      </div>
    </div>
  )
}
