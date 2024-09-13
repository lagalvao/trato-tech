import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { Items } from '../../store/items/types'

import styles from './item.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeFavorite } from '../../store/items/itemsSlice'
import { changeCart } from '../../store/cart/cartSlice'
import { ApplicationState } from '../../store'

const iconProps = {
  size: 24,
  color: '#041833',
}

type ItemProps = {
  content: Items
}

export default function Item({ content }: ItemProps) {
  const { descricao, titulo, favorito, foto, preco, id } = content

  const dispatch = useDispatch()

  const beInCart = useSelector((state: ApplicationState) =>
    state.cart.some((itemInCart) => itemInCart.id === id),
  )

  function solveFavorite() {
    dispatch(changeFavorite(id))
  }

  function resolverCart() {
    dispatch(changeCart(id))
  }

  return (
    <div className={styles.item}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>

      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>

        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>R$ {preco.toFixed(2)}</div>
          <div className={styles['item-acoes']}>
            {favorito ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles['item-acao']}
                onClick={solveFavorite}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={styles['item-acao']}
                onClick={solveFavorite}
              />
            )}

            <FaCartPlus
              {...iconProps}
              color={beInCart ? '#1875E8' : iconProps.color}
              className={styles['item-acao']}
              onClick={resolverCart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
