import '../Styles/ShopItems.css'
import { formatCurrency } from '../Utilities/formatCurrency';

type StoreItemProps = {
    id: number
    name: string
    price: number
    img: string
}

export default function ShopItem({id, name, price, img}: StoreItemProps) {
    return (
    <div className="shopItem">
        <img src={img} alt={name} className="shopItemImg" />
        <h3>{name}</h3>
        <p>Price: {formatCurrency(price)}</p>
        <button>Add to Cart</button>
    </div>
    );
}
