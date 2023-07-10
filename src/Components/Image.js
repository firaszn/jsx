import React from 'react'
import product from '../Product';

const Image = () => {
  return (
    <div>
        <img style ={{width: "400px"}}  src={product.Image} alt="Product" />
    </div>
  )
}

export default Image