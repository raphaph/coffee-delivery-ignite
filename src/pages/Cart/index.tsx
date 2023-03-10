/* eslint-disable jsx-a11y/alt-text */
import { Bank, CreditCard, Minus, Money, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { NewOrderContext } from '../../contexts/NewOrderContext'
import {
  AddressInfoContainer,
  CardItensInfoContainer,
  CardLeftContainer,
  CardMapContainer,
  CardRightContainer,
  ChangeAndRemoveContainer,
  LineByLineContainer,
  OrderInfoContainer,
  PaymentChooseContainer,
  PlusMinorContainer,
} from './styles'

export function Cart() {
  const { newCartList, setNewCartList, setPayType, payType } =
    useContext(NewOrderContext)

  const { register, handleSubmit, reset } = useForm()

  function handleCreateNewOrder(data: any) {
    const addressJSON = JSON.stringify(data)
    localStorage.setItem('addressOnConfirmedOrder', addressJSON)
    console.log(addressJSON)
    window.location.href = '/order-confirm'
    reset()
  }

  function sumTotalCart(motoboy: number) {
    const totalCart: number = newCartList.reduce(
      (accumulated, cart) => accumulated + cart.totalItem,
      0,
    )
    return (totalCart + motoboy).toFixed(2)
  }

  function removerCoffeeFromCart(id: number) {
    const updateCart = newCartList.filter((item) => item.idCart !== id)
    setNewCartList(updateCart)
  }

  function addOneMoreCoffeCart(idCart: number) {
    const cartListFinal = newCartList.map((coffee) => {
      if (coffee.idCart === idCart) {
        return {
          ...coffee,
          quantityCart: coffee.quantityCart + 1,
          totalItem: (coffee.quantityCart + 1) * coffee.priceCart,
        }
      } else {
        return coffee
      }
    })
    sumTotalCart(0)
    setNewCartList(cartListFinal)
  }

  function removeOneCoffeeCart(idCart: number) {
    const cartListFinal = newCartList.map((coffee) => {
      if (coffee.quantityCart === 0) {
        return coffee
      } else if (coffee.idCart === idCart) {
        return {
          ...coffee,
          quantityCart: coffee.quantityCart - 1,
          totalItem: (coffee.quantityCart - 1) * coffee.priceCart,
        }
      } else {
        return coffee
      }
    })
    sumTotalCart(0)
    setNewCartList(cartListFinal)
  }

  return (
    <OrderInfoContainer>
      <CardLeftContainer>
        <h3>Complete seu pedido</h3>
        <AddressInfoContainer>
          <strong>Endere??o de entrega</strong>
          <p>Informe o endere??o onde deseja receber seu pedido</p>
          <form id="confirmOrder" onSubmit={handleSubmit(handleCreateNewOrder)}>
            <input
              id="cep"
              type="text"
              placeholder="CEP"
              required
              {...register('cep')}
            />
            <input
              id="street"
              type="text"
              placeholder="Rua"
              {...register('street')}
              required
            />
            <div>
              <input
                id="number"
                type="number"
                placeholder="N??mero"
                {...register('number')}
                required
              />
              <input
                id="complement"
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
                required
              />
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                {...register('city')}
                required
              />
              <input
                id="uf"
                type="text"
                placeholder="UF"
                {...register('uf')}
                maxLength={2}
                required
              />
            </div>
          </form>
        </AddressInfoContainer>
        <PaymentChooseContainer>
          <p>Pagamento</p>
          <p>
            O pagamento ?? feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div>
            <button
              onClick={() => {
                setPayType('Cart??o de Cr??dito')
              }}
            >
              <CreditCard size={15} color="purple" />
              <span>CART??O DE CR??DITO</span>
            </button>
            <button
              onClick={() => {
                setPayType('Cart??o de D??bito')
              }}
            >
              <Bank size={15} color="purple" />
              <span>CART??O DE D??BITO</span>
            </button>
            <button
              onClick={() => {
                setPayType('Dinheiro')
              }}
            >
              <Money size={15} color="purple" />
              <span>DINHEIRO</span>
            </button>
          </div>
        </PaymentChooseContainer>
      </CardLeftContainer>
      <CardRightContainer>
        <h3>Caf??s selecionados</h3>
        <CardItensInfoContainer>
          {newCartList.map((coffe) => {
            return (
              <CardMapContainer key={coffe.idCart}>
                <img src={coffe.pictureCart} />
                <div>
                  <p>{coffe.nameCart}</p>
                  <ChangeAndRemoveContainer>
                    <PlusMinorContainer>
                      <button
                        onClick={() => {
                          removeOneCoffeeCart(coffe.idCart)
                        }}
                      >
                        <Minus size={12} weight="bold" />
                      </button>
                      <span>{coffe.quantityCart}</span>
                      <button
                        onClick={() => {
                          addOneMoreCoffeCart(coffe.idCart)
                        }}
                      >
                        <Plus size={12} weight="bold" />
                      </button>
                    </PlusMinorContainer>
                    <button
                      onClick={() => {
                        removerCoffeeFromCart(coffe.idCart)
                      }}
                    >
                      <Trash size={14} color="purple" />
                      REMOVER
                    </button>
                  </ChangeAndRemoveContainer>
                </div>
                <strong>R$ {coffe.priceCart}0</strong>
              </CardMapContainer>
            )
          })}
          <LineByLineContainer>
            <p>Total de itens</p>
            <p>R$ {sumTotalCart(0)}</p>
          </LineByLineContainer>
          <LineByLineContainer>
            <p>Entrega</p>
            <p>R$ 3.50</p>
          </LineByLineContainer>
          <LineByLineContainer>
            <p>Pagamento</p>
            <p>{payType}</p>
          </LineByLineContainer>
          <LineByLineContainer>
            <h3>Total</h3>
            <strong>R$ {sumTotalCart(3.5)}</strong>
          </LineByLineContainer>

          <button
            id="confirmOrderButton"
            type="submit"
            form="confirmOrder"
            disabled={
              sumTotalCart(0) === '0.00' ||
              payType === 'Escolha a forma de pagamento'
            }
          >
            CONFIRMAR PEDIDO
          </button>
        </CardItensInfoContainer>
      </CardRightContainer>
    </OrderInfoContainer>
  )
}
