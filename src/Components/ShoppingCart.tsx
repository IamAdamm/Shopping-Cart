import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../Context/ShoppingCartContext"
import CartItem from "./CartItem"
import { formatCurrency } from "../Utilities/formatCurrency"
import ShopItems from "../Data/Items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({isOpen}:ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div>
                {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            </div>
            <div>
                TOTAL: {formatCurrency(cartItems.reduce((total, cartItem) => {
                const item = ShopItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
            },0))}
            </div>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
