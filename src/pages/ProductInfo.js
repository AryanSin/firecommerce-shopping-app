import { doc, Doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { fireproducts } from '../firecommerce-product'
import fireDB from '../fireConfig'

function ProductInfo() {

  const [product, setProduct] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getdata()
  }, [])


  async function getdata() {
    try {
      setLoading(true);
      const productTemp = await getDoc(doc(fireDB, "products", params.productid));
      console.log(productTemp.data());
      setProduct(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }


  return (
    <Layout loading={loading}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            {product && (< div >
              <h3><b>{product.name}</b></h3>
              <img src={product.imageURL} alt="" className='productinfo-img' />
            </div>
            )}
          </div>
        </div>
        <hr />
        <p> {product.description}</p>
        <div className='d-flex justify-content-end my-3'>
          <button>ADD TO CART</button>
        </div>
      </div>

    </Layout >
  )
}
export default ProductInfo