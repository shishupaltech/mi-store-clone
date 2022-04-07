import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReview.css'

const ProductReview = ({productReviews}) => {
  return (
    <div className='ProductReview'>
        {productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
        ))}
    </div>
  )
}

export default ProductReview