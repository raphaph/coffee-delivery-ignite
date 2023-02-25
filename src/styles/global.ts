import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// fiz de tudo pra nao precisar importar o defaultTheme
// mas nao encontrei erro algum na sintaxe e ainda assim nao conseguia acessar a bendita variavel global

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${defaultTheme.background};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`
