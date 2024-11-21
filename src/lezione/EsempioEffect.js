import { useEffect, useState } from 'react';
import styles from './EsempioEffect.module.css'

const productUrl = 'https://fakestoreapi.com/products/';

function EsempioEffect(){
  const [product, setProduct] = useState({})
  const [productId, setProductId] = useState(1)

  useEffect(() => {
    fetch(productUrl + productId)
    .then(res => res.json())
    .then(product => setProduct(product))
  },[productId])

  function handlePrevProduct(){
    if(productId > 1){
      setProductId(productId - 1)
    }
  }

  function handleNextProduct(){
    setProductId(productId + 1)
  }

  return (
    <>
      <button onClick={handlePrevProduct}>Prev</button>
      <button onClick={handleNextProduct}>Next</button>
      <h3 className={styles.test}>{product.title}</h3>
      <img src={product.image} alt={product.title}/>
    </>
  )
}

export default EsempioEffect;