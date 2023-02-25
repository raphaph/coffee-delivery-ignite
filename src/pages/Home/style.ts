import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const OurCoffeesText = styled.p`
  margin: 0 0 3rem 0;
  font-size: 2rem;
  font-family: 'Baloo 2', cursive;
  text-align: center;
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ListCoffeesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 70vw;
`

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${defaultTheme['base-card']};
  border-radius: 6px 36px;
  margin: 1.3rem 1rem;
  text-align: center;

  strong:first-of-type {
    color: ${defaultTheme['yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
    background: ${defaultTheme['yellow-light']};
    font-size: 14px;
    margin-top: 0.5rem;
  }

  strong:last-of-type {
    font-size: 20px;
    font-family: 'Baloo 2', cursive;
    margin-top: 0.5rem;
    color: ${defaultTheme['base-subtitle']};
  }

  img {
    margin-top: -25px;
    height: 7.5rem;
    width: 7.5rem;
  }

  p {
    word-wrap: normal;
    font-size: 14px;
    color: ${defaultTheme['base-text']};
    margin: 1rem;
  }
`

export const PriceCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    color: ${defaultTheme['base-text']};
  }

  div {
    margin: 0 0.5rem;
    padding: 0.6rem 0.5rem;
    background: ${defaultTheme['base-button']};
    border-radius: 8px;

    button {
      border: none;
      background: none;
      cursor: pointer;
      color: ${defaultTheme.purple};
    }

    button:active {
      opacity: 0.8;
    }

    span {
      margin: 0 0.3rem;
    }
  }
`
export const ButtonCartAddContainer = styled.button`
  color: white;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  background: ${defaultTheme['purple-dark']};
  border: none;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
`
