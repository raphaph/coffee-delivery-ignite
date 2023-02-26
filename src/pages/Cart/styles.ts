import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CardLeftContainer = styled.div`
  width: 40rem;
  border-radius: 6px;
  margin-right: 2rem;

  h3 {
    margin-bottom: 0.5rem;
    font-family: 'Baloo 2', cursive;
  }

  form {
    margin-top: 2rem;

    input {
      border: 1px solid ${defaultTheme['base-button']};
      background: ${defaultTheme['base-input']};
      border-radius: 4px;
      padding: 0.75rem;
      margin: 0.5rem;
    }

    #cep {
      width: 12.5rem;
    }

    #street {
      width: 34rem;
    }

    #number {
      width: 12.5rem;
    }

    #complement {
      width: 20.5rem;
    }

    #neighborhood,
    #city,
    #uf {
      width: 10.66rem;
    }
  }
`

export const AddressInfoContainer = styled.div`
  background: ${defaultTheme['base-card']};
  padding: 40px;
  border-radius: 6px;
`

export const PaymentChooseContainer = styled.div`
  background: ${defaultTheme['base-card']};
  padding: 40px;
  border-radius: 6px;
  margin-top: 1rem;

  p:first-of-type {
    font-size: 1rem;
  }

  p:last-of-type {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    border-radius: 6px;
    padding: 1rem;
    background: ${defaultTheme['base-button']};
    font-size: 12px;
    width: 11.1rem;
    border: 1px solid transparent;

    &:active {
      outline: none;
      border: 1px solid ${defaultTheme.purple};
      background: ${defaultTheme['purple-ligth']};
    }

    span {
      margin-left: 0.5rem;
    }
  }
`

export const CardRightContainer = styled.div`
  width: 28rem;

  h3 {
    margin-bottom: 0.5rem;
    font-family: 'Baloo 2', cursive;
  }
`

export const CardItensInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${defaultTheme['base-card']};
  padding: 40px;
  border-radius: 6px 44px;

  hr {
    background: ${defaultTheme['base-button']};
  }

  #confirmOrderButton {
    cursor: pointer;
    background: ${defaultTheme.yellow};
    border: none;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 0.875rem;
    color: ${defaultTheme.white};
    font-weight: 700;

    &:active {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`
export const LineByLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
  font-family: 'Roboto', sans-serif;

  p {
    font-size: 0.875rem;
  }
`
export const CardMapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  border-bottom: 1px solid ${defaultTheme['base-button']};

  img {
    width: 4rem;
  }

  p {
    margin: 0.5rem;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    height: 21px;
  }
`

export const PlusMinorContainer = styled.div`
  margin-right: 0.5rem;
  padding: 0.6rem 0.5rem;
  background: ${defaultTheme['base-button']};
  border-radius: 8px;
  width: 5rem;
  height: 2.4rem;
  text-align: center;

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
    margin: 0 0.5rem;
    font-size: 0.875rem;
  }
`

export const ChangeAndRemoveContainer = styled.div`
  display: flex;
  padding: 0 8px;

  button {
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0 4px;
    text-align: center;
    align-items: center;
    background: ${defaultTheme['base-button']};
    border: none;
    border-radius: 6px;

    &:active {
      opacity: 0.8;
    }
  }
`
