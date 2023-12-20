import React from 'react'
import './MaleDressCard.css'
import img2 from '../../../../Asset/2.jpg'

function MaleDressCard({data}) {

  const addCart = (name,price,img)=>{
      // if(!localStorage.getItem(key)){
      const item = JSON.parse(localStorage.getItem("cart"))
      if(!item){
        localStorage.setItem("cart",JSON.stringify({cart:[{name:name,price:price,img:img}]}))
      }else{
        // console.log(item.cart.find(el => el.name == name));
        if(!item.cart.find(el => el.name == name)){
          localStorage.setItem("cart",JSON.stringify({cart:[...item.cart,{name:name,price:price,img:img}]}))
        }
      }
      // }
  }

  return (
    <div className='DressCard_card' key={data.ID}>
                        <div className='DressCard_card_img'><img src={img2}/></div>
                        <div className='DressCard_card_details'>
                            <h2>{data.name}</h2>
                            <p>$ {data.price}</p>
                            <p className='DressCard_card_cart' onClick={()=>addCart(data.name,data.price,img2)} >Add To Cart</p>
                        </div>
                    </div>
  )
}

export default MaleDressCard