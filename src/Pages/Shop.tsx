import Items from '../Data/Items.json'
import ShopItem from '../Components/ShopItem'
import '../Styles/Shop.css'

export default function Shop() {
  return (
    <div className='shop'>
      <h1 className='shopTitle'>Shop</h1>
      <div className='shopItemsContainer'>
        {Items.map(item => (
            <div>
              <ShopItem key={item.id} {...item} />
            </div> 
        ))}
      </div>
    </div>
  )
}
