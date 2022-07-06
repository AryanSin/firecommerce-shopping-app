import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'

function CartPage() {
  const { cartItems } = useSelector(state => state.cartReducer)
  const dispatch = useDispatch();
  const [total, setTotalAmount] = useState(0)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    let temp = 0;
    cartItems.forEach(element => {
      temp = temp + element.price;
    });
    setTotalAmount(temp);
  }, [cartItems])

  const deleteFromCart = (product) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: product });
  };

  return (
    <Layout>

      <table className='table mt-3'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(items => {
            return <tr>
              <td><img src={items.imageURL} height="80" width="80" /></td>
              <td>{items.name}</td>
              <td>{items.price}</td>
              <td><FaTrash onClick={() => deleteFromCart(items)} /></td>
            </tr>
          })}
        </tbody>
      </table>
      <div className='d-flex justify-content-end'>
        <h1 className='total-amount'>
          Total Amount = {total} Rs/-
        </h1>
      </div>
      <div className='d-flex justify-content-end mt-3'>
        <button>PLACE ORDER</button>
      </div>
    </Layout>
  )
}

export default CartPage