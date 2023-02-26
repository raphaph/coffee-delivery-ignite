import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DolarContainer,
  IconAndInfoContainer,
  MapContainer,
  OrderConfirmContainer,
  OrderInformationContainer,
  TimerContainer,
  UhuContainer,
} from './styles'

export function OrderConfirm() {
  const stringAddress = localStorage.getItem('addressOnConfirmedOrder')
  const objAdress = JSON.parse(stringAddress)

  return (
    <>
      <UhuContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </UhuContainer>
      <OrderConfirmContainer>
        <OrderInformationContainer>
          <IconAndInfoContainer>
            <MapContainer>
              <MapPin weight="fill" color="white" />
            </MapContainer>
            <div>
              <p>
                Entrega em <strong>{objAdress.street}</strong>,{' '}
                {objAdress.number}
              </p>
              <p>
                {objAdress.city} - {objAdress.uf}
              </p>
            </div>
          </IconAndInfoContainer>
          <IconAndInfoContainer>
            <TimerContainer>
              <Timer weight="fill" color="white" />
            </TimerContainer>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </IconAndInfoContainer>
          <IconAndInfoContainer>
            <DolarContainer>
              <CurrencyDollar weight="fill" color="white" />
            </DolarContainer>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão</strong>
            </div>
          </IconAndInfoContainer>
        </OrderInformationContainer>
        <img src="src/assets/motoboy.png" alt="" />
      </OrderConfirmContainer>
    </>
  )
}
