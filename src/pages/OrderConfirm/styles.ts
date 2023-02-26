import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const UhuContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    color: ${defaultTheme['yellow-dark']};
  }
`

export const OrderConfirmContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 4rem;
  }
`

export const OrderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${defaultTheme['base-button']};
  border-radius: 6px 36px;
  padding: 40px;
`

export const IconAndInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  outline: 0;
`

export const MapContainer = styled.div`
  padding: 0.4rem;
  background: ${defaultTheme.purple};
  margin-right: 0.5rem;
  border-radius: 50%;
`

export const TimerContainer = styled.div`
  padding: 0.4rem;
  background: ${defaultTheme.yellow};
  margin-right: 0.5rem;
  border-radius: 50%;
`

export const DolarContainer = styled.div`
  padding: 0.4rem;
  background: ${defaultTheme['yellow-dark']};
  margin-right: 0.5rem;
  border-radius: 50%;
`
