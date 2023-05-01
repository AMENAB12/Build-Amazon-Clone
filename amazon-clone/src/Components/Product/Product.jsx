import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider/StateProvider';
function Product({id, title, price, rating, image}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // console.log(action)
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
    <div className='product__info'>
        <p>{title}</p>
<p className='product__price'>
<small>$</small>
<strong>{price}</strong>
</p>
<div className='product__rating'>
<p>⭐⭐</p>
</div>
</div>


<div>
    <img src={image} />
    <button onClick={addToBasket}> Shop Now</button>
</div>

    
    </div>
  )
}

export default Product