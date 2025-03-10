import Items from '../Data/Items.json'
import '../Styles/Shop.css'

export default function Shop() {
  return (
    <div className='shop'>
      <h1 className='shopTitle'>Shop</h1>
      <div>
        {Items.map(item => (
            <div>{JSON.stringify(item)}</div> 
        ))}
      </div>
    </div>
  )
}
