import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import {
  ButtonCartAddContainer,
  CoffeeContainer,
  DeliveryContainer,
  ListCoffeesContainer,
  OurCoffeesText,
  PriceCountContainer,
} from './style'

const listCoffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: 'src/assets/coffees/expresso_tradicional.png',
    type: 'Tradicional',
    price: 9.9,
    initialQuantity: 1,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: 'src/assets/coffees/expresso_americano.png',
    type: 'Tradicional',
    price: 9.9,
    initialQuantity: 1,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    img: 'src/assets/coffees/expresso_cremoso.png',
    type: 'Tradicional',
    price: 9.9,
    initialQuantity: 1,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: 'src/assets/coffees/expresso_gelado.png',
    type: 'Tradicional',
    price: 9.9,
    initialQuantity: 1,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: 'src/assets/coffees/cafe_com_leite.png',
    type: 'Tradicional',
    price: 9.9,
    initialQuantity: 1,
  },
]

export function Home() {
  return (
    <>
      <img src="src/assets/intro.svg" alt="" />
      <OurCoffeesText>Nossos cafés</OurCoffeesText>
      <DeliveryContainer>
        <ListCoffeesContainer>
          {listCoffees.map((coffee) => {
            return (
              <CoffeeContainer key={coffee.id}>
                <img src={coffee.img} alt="" />
                <strong>{coffee.type}</strong>
                <strong>{coffee.name}</strong>
                <p>{coffee.description}</p>
                <PriceCountContainer>
                  <p>R$ {coffee.price}0</p>
                  <div>
                    <button>
                      <Plus size={14} weight="bold" />
                    </button>
                    <span>{}</span>
                    <button>
                      <Minus size={14} weight="bold" />
                    </button>
                  </div>
                  <ButtonCartAddContainer>
                    <ShoppingCartSimple size={22} weight="fill" />
                  </ButtonCartAddContainer>
                </PriceCountContainer>
              </CoffeeContainer>
            )
          })}
        </ListCoffeesContainer>
      </DeliveryContainer>
    </>
  )
}
