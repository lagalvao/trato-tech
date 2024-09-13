import classNames from 'classnames'
import Logo from '../Icons/Logo'
import styles from './navbar.module.scss'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import Search from '../Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const iconProps = {
  color: 'white',
  size: 24,
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />

      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === '/',
            })}
          >
            Página Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Search />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  )
}
