import React from 'react'
import './TrendingCard.css'
import img2 from '../../../Asset/2.jpg'


function TrendingCard() {
  return (
    <div className='trending_card'>
                        <div className='trending_card_img'><img src={img2}/></div>
                        <div className='trending_card_details'>
                            <h2>Name</h2>
                            <p>$ 100</p>
                            <p className='trending_card_cart'>Add To Cart</p>
                        </div>
                    </div>
  )
}

export default TrendingCard