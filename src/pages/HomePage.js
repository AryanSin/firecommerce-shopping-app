import { collection, addDoc, getDocs, doc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { fireproducts } from '../firecommerce-product'
import fireDB from '../fireConfig'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function HomePage() {

  const [products, setProducts] = useState([]);
  const { cartItems } = useSelector(state => state.cartReducer)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    getdata()
  }, []);



  // async function adddata() {
  //   try {
  //     await addDoc(collection(fireDB, "users"), { name: "vikas", age: 18 })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async function getdata() {
    try {
      setLoading(true);
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];

      users.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const obj = {
          id: doc.id,
          ...doc.data()
        };

        productsArray.push(obj);
        setLoading(false);
      });

      setProducts(productsArray);

    } catch (error) {
      console.log(error)
      setLoading(false);

    }
  }

  // function addProductsData() {
  //   fireproducts.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), product);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])


  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };


  return (
    <Layout loading={loading}>
      <div className="container">
        <div className="row">

          {products.map((product) => {
            return <div className="col-md-4">
              <div className="m-2 p-1 product position-relative">
                <div className='product-content'>
                  <p>{product.name}</p>
                  <div className='text-center'>
                    <img src={product.imageURL} alt="" className='product-img' />
                  </div>
                </div>
                <div className='product-actions'>
                  <h2>Rs/-{product.price}</h2>
                  <div className='d-flex'>
                    <button className='mx-2' onClick={() => addToCart(product)}>ADD TO CART</button>
                    <button onClick={() => {
                      navigate(`./ProductInfo/${product.id}`)
                    }}>VIEW</button>
                  </div>
                </div>
              </div>
            </div>
          })}

        </div>
      </div>
      {/* <button onClick={adddata}>Add Data to Firebase</button>
      <button onClick={getdata}>Get Data from Firebase</button> */}
      {/* <button onClick={addProductsData}>Add Products to Firebase</button> */}
    </Layout>
  )
}

export default HomePage