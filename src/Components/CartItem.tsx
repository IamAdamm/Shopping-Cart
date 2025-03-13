import { useShoppingCart } from "../Context/ShoppingCartContext"
import shopItems from "../Data/Items.json"
import { formatCurrency } from "../Utilities/formatCurrency"
import '../Styles/CartItem.css'

type CartItemProps = {
    id: number
    quantity: number
}

export default function CartItem({id, quantity}: CartItemProps) {
    const {decreaseItemQuantity} = useShoppingCart()
    const item = shopItems.find(i => i.id === id)
    if(item == null) {
        return null
    }
  return (
    <div className="cartItem">
        <img src={item.img} />
        {item.name}
        {formatCurrency(item.price)}
        x{quantity}
        <button onClick={() => decreaseItemQuantity(item.id)}>X</button>
        <div className="cartItemTotal">
            Total: {formatCurrency(item.price * quantity)}
        </div>
    </div>

  )
}
