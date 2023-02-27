import { useReducer } from 'react'

function reducerCoffe(listCoffees: any, action: any) {
  switch (action.type) {
    case 'decrementCoffee':
      return listCoffees.map((coffee: any) => {
        if (coffee.id === listCoffees.id) {
          return { ...coffee, quantity: coffee.quantity - 1 }
        } else {
          return coffee
        }
      })
    case 'incrementCoffee':
      return listCoffees.map((coffee: any) => {
        if (coffee.id === listCoffees.id) {
          return { ...coffee, quantity: coffee.quantity + 1 }
        } else {
          return coffee
        }
      })

    default:
      return listCoffees
  }
}

export function OrderReducer() {
  const [listCoffees, dispatch] = useReducer(reducerCoffe, [
    {
      id: 1,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      img: 'src/assets/coffees/expresso_tradicional.png',
      type: ['TRADICIONAL'],
      price: 5.9,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      img: 'src/assets/coffees/expresso_americano.png',
      type: ['TRADICIONAL'],
      price: 4.9,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      img: 'src/assets/coffees/expresso_cremoso.png',
      type: ['TRADICIONAL'],
      price: 8.9,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      img: 'src/assets/coffees/expresso_gelado.png',
      type: ['TRADICIONAL', 'GELADO'],
      price: 8.9,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      img: 'src/assets/coffees/cafe_com_leite.png',
      type: ['TRADICIONAL', 'COM LEITE'],
      price: 7.9,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro e espuma cremosa',
      img: 'src/assets/coffees/latte.png',
      type: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 7,
      name: 'Cappucino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      img: 'src/assets/coffees/cappucino.png',
      type: ['TRADICIONAL', 'COM LEITE'],
      price: 5.9,
      quantity: 0,
    },
    {
      id: 8,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      img: 'src/assets/coffees/macchiato.png',
      type: ['TRADICIONAL', 'COM LEITE'],
      price: 7.9,
      quantity: 0,
    },
    {
      id: 9,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      img: 'src/assets/coffees/mocaccino.png',
      type: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      quantity: 0,
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      img: 'src/assets/coffees/chocolate_quente.png',
      type: ['ESPECIAL', 'COM LEITE'],
      price: 11.9,
      quantity: 0,
    },
    {
      id: 11,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      img: 'src/assets/coffees/cubano.png',
      type: ['ESPECIAL', 'ALCOÓLICO'],
      price: 13.9,
      quantity: 0,
    },
    {
      id: 12,
      name: 'Havaiano',
      description: 'Bebida adocicada com café e leite de coco',
      img: 'src/assets/coffees/havaiano.png',
      type: ['ESPECIAL'],
      price: 13.9,
      quantity: 0,
    },
    {
      id: 13,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      img: 'src/assets/coffees/arabe.png',
      type: ['ESPECIAL'],
      price: 13.9,
      quantity: 0,
    },
    {
      id: 14,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantily',
      img: 'src/assets/coffees/irlandes.png',
      type: ['ESPECIAL', 'ALCOÓLICO'],
      price: 13.9,
      quantity: 0,
    },
  ])

  return (
    <>
      <button onClick={() => dispatch({ type: 'decrementCoffee' })}>-</button>
      <p>{listCoffees[0].quantity}</p>
      <button onClick={() => dispatch({ type: 'incrementCoffee' })}>+</button>
    </>
  )
}
