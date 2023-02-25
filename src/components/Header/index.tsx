import { ShoppingCartSimple, MapPin } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
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
            <p>1</p>
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
