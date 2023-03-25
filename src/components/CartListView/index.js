import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      let totalAmount = 0

      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })

      return (
        <div>
          <button onClick={removeAllCartItems} type="button">
            Remove All
          </button>
          {cartList.length > 0 ? (
            <ul className="cart-list">
              {cartList.map(eachCartItem => (
                <CartItem
                  key={eachCartItem.id}
                  cartItemDetails={eachCartItem}
                />
              ))}
            </ul>
          ) : (
            <h1>Your Cart Is Empty</h1>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
