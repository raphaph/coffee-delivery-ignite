import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { NewOrderContext } from '../../contexts/NewOrderContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { newCartList } = useContext(NewOrderContext)

  return (
    <>
      <HeaderContainer>
        <NavLink to="/" title="home">
          <img src="src\assets\logo.png" alt="" />
        </NavLink>

        <nav>
          <div>
            <MapPin size={22} weight="fill" />
            Mandaguari-PR
          </div>
          <NavLink to="/cart" title="cart">
            <ShoppingCartSimple size={22} weight="fill" />
            <p>{newCartList.length}</p>
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
