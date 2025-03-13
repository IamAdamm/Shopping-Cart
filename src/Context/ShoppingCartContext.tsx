import { useContext, ReactNode, createContext, useState } from "react";
import ShoppingCart from "../Components/ShoppingCart";
import useLocalStorage from "../Hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
    getItemQuantity: (id: number) => number
    IncreaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export default function ShoppingCartProvider({children} : ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [isOpen, setisOpen] = useState(false)

    const openCart = () => setisOpen(true)
    const closeCart = () => setisOpen(false)


    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id:number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function IncreaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity == 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }


    return <ShoppingCartContext.Provider 
    value={{ 
        getItemQuantity, 
        IncreaseItemQuantity, 
        decreaseItemQuantity,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
    }}>
        {children}   
        <ShoppingCart isOpen={isOpen} /> 
    </ShoppingCartContext.Provider>
}
