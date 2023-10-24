import { createContext, useContext, useReducer } from "react";

const initial = {
    cart: []
}
const reducer =(state , action) => {
  switch (action.type) {
    case 'AddCart':
      // eslint-disable-next-line no-case-declarations
      const cartLength = state.cart.filter((item) => item.id === action.payload.id)
      if(cartLength.length > 0){
        return {
          cart: state.cart.map((item) => {
            if(item.id === action.payload.id){
              return {
              ...item,
                quantity: item.quantity + 1
              }
            }
            return item
          })
        }
      } else {
        return {
          ...state,
            cart: [...state.cart, action.payload]
        }
      }
      // cart Increase or Decrease the amount of cart items 
      case 'Increase' :
        return {
          cart: state.cart.map((item) => {
            if(item.id === action.payload.id){
              return {
              ...item,
                quantity: item.quantity + 1
              }
            }
            return item
          })
        }
      case 'Decrease' :
        return {
          cart: state.cart.map((item) => {
            if(item.id === action.payload.id){
              return {
             ...item,
                quantity: item.quantity - 1
              }
            }
            return item
          })
        }
      // cart product remove Dispatch
      case 'Removecart' :
        return {
          cart: state.cart.filter((item) => item.id!== action.payload.id)
        }
      
  
    default:
      return state
  } 
}


export const CartContext = createContext()
// eslint-disable-next-line react/prop-types
const CartContextProvider = ({children}) => {
    const [state ,dispatch]  = useReducer(reducer , initial) 
  return (
    <CartContext.Provider value={{state ,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;

export const GlobalHooks = () => {
    const context = useContext(CartContext)
    return context;
}