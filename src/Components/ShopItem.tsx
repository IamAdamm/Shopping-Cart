import { useShoppingCart } from '../Context/ShoppingCartContext';
import '../Styles/ShopItems.css'
import { formatCurrency } from '../Utilities/formatCurrency';

type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
}

export default function ShopItem({id, name, price, img}: StoreItemProps) {
    const { getItemQuantity, IncreaseItemQuantity, decreaseItemQuantity} = useShoppingCart()
    const quantity: number = getItemQuantity(id)
    return (
    <div className="shopItem">
        <img src={img} alt={name} className="shopItemImg" />
        <h3>{name}</h3>
        <p>Price: {formatCurrency(price)}</p>
        <div>
            {quantity === 0 ? 
            (<button onClick={() => IncreaseItemQuantity(id)}>Add to Cart</button> ) : 
            (
            <div>
                <button onClick={() => IncreaseItemQuantity(id)}>+</button>
                {quantity}
                <button onClick={() => decreaseItemQuantity(id)}>-</button>
            </div>
            )
            }
        </div>
    </div>
    );
}
