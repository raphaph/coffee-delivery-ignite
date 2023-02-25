import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { NewOrderContext } from '../../contexts/NewOrderContext'
import {
  ButtonCartAddContainer,
  CoffeeContainer,
  DeliveryContainer,
  ListCoffeesContainer,
  OurCoffeesText,
  PriceCountContainer,
  TypeContainer,
} from './style'

export function Home() {
  const { removeOneCoffee, addCoffeToCart, addOneCoffee, listCoffees } =
    useContext(NewOrderContext)

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

                {coffee.type.length > 1 ? (
                  <TypeContainer>
                    <strong>{coffee.type[0]}</strong>
                    <strong>{coffee.type[1]}</strong>
                  </TypeContainer>
                ) : (
                  <TypeContainer>
                    <strong>{coffee.type}</strong>
                  </TypeContainer>
                )}

                <strong>{coffee.name}</strong>
                <p>{coffee.description}</p>
                <PriceCountContainer>
                  <p>R$ {coffee.price}0</p>
                  <div>
                    <button onClick={() => removeOneCoffee(coffee.id)}>
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>{coffee.quantity}</span>
                    <button onClick={() => addOneCoffee(coffee.id)}>
                      <Plus size={14} weight="bold" />
                    </button>
                  </div>
                  <ButtonCartAddContainer
                    onClick={() => {
                      addCoffeToCart(
                        coffee.id,
                        coffee.name,
                        coffee.quantity,
                        coffee.img,
                        coffee.price,
                      )
                    }}
                  >
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
