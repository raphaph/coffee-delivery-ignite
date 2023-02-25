import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;

  img {
    margin-left: 10rem;
  }

  nav {
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      background: ${defaultTheme['purple-ligth']};
      padding: 0.5rem;
      border-radius: 6px;
      margin-right: 4px;
      color: ${defaultTheme.purple};
    }

    a {
      text-decoration: none;
      margin-right: 10rem;
      margin-left: 0.5rem;
      padding: 8px;
      background: ${defaultTheme['yellow-light']};
      border-radius: 6px;

      p {
        position: absolute;
        background: ${defaultTheme['yellow-dark']};
        color: ${defaultTheme.white};
        border-radius: 50%;
        height: 1.2rem;
        width: 1.2rem;
        font-size: 0.9rem;
        text-align: center;
        transform: translate(20px, -40px);
      }
    }
  }
`
