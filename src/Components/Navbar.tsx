import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Navbar.css'
import { useShoppingCart } from "../Context/ShoppingCartContext";

function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart();
  return (
    <div className="navbar">
        <div className="navbarLeftSide">
            <Link className='navbarLeftSideLink' to='/'>Home</Link>
            <Link className='navbarLeftSideLink' to='/shop'>Shop</Link>
            <Link className='navbarLeftSideLink' to='/about'>About</Link>
        </div>
        <button className="navbarRightSide" onClick={openCart}>
            <ShoppingCartIcon/>
            <div className="ShoppingCartNumber">{cartQuantity}</div>
        </button>
    </div>
  )
}

export default Navbar