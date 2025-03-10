import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarLeftSide">
            <Link className='navbarLeftSideLink' to='/'>Home</Link>
            <Link className='navbarLeftSideLink' to='/shop'>Shop</Link>
            <Link className='navbarLeftSideLink' to='/about'>About</Link>
        </div>
        <button className="navbarRightSide">
            <ShoppingCartIcon/>
            <div className="ShoppingCartNumber">3</div>
        </button>
    </div>
  )
}

export default Navbar