import React from 'react'
import './BestSellerCard.css'
import img2 from '../../../Asset/2.jpg'


function BestSellerCard() {
  return (
    <div className='BestSeller_card'>
                        <div className='BestSeller_card_img'><img src={img2}/></div>
                        <div className='BestSeller_card_details'>
                            <h2>Name</h2>
                            <p>$ 100</p>
                            <p className='BestSeller_card_cart'>Add To Cart</p>
                        </div>
                    </div>
  )
}

export default BestSellerCard