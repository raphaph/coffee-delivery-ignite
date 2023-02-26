import { ShoppingCartSimple, MapPin } from 'phosphor-react'
import { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { NewOrderContext } from '../../contexts/NewOrderContext'
import { HeaderContainer } from './styles'

export function Header() {
  window.addEventListener('scroll', function () {
    const headerPosition: HTMLElement = document.querySelector('header')

    if (window.pageYOffset > 400) {
      headerPosition.style.position = 'fixed'
    } else if (this.window.pageYOffset < 400) {
      headerPosition.style.position = 'relative'
    }
  })
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
