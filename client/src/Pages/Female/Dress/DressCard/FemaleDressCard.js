import React from 'react'
import './FemaleDressCard.css'
import img2 from '../../../../Asset/2.jpg'

function FemaleDressCard() {
  return (
    <div className='FemaleDressCard_card'>
                        <div className='FemaleDressCard_card_img'><img src={img2}/></div>
                        <div className='FemaleDressCard_card_details'>
                            <h2>Name</h2>
                            <p>$ 100</p>
                            <p className='FemaleDressCard_card_cart'>Add To Cart</p>
                        </div>
                    </div>
  )
}

export default FemaleDressCard