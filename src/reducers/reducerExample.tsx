import { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'decrement':
      return { count: state.count - 1 }
    case 'increment':
      return { count: state.count + 1 }
    default:
      return state
  }
}

export function OrderReducers() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
