import React, { useEffect, useState } from 'react'
import './Cart.css'
import Navber from '../../Component/Layout/Navber/Navber'
import img from '../../Asset/1.jpg' 

function Cart() {
  const [data, setData] = useState([])

  const cartData =()=>{
    setData(JSON.parse(localStorage.getItem("cart")).cart)
  }

  // console.log(data);
  useEffect(()=>{
    cartData()
  },[])

  const removeItem =async(name)=>{
    
    await setData(data.filter(el=>el.name != name))
    await localStorage.setItem("cart",JSON.stringify({cart:[...data.filter(el=>el.name != name)]}))
   
  }

  return (
    <div>
        <Navber/>
        <div className='cart'>
          <div>
            <div className='cart_items'>
              {data.map(el=>
                <div>

                <div className='cart_items_card_name'>
                  <h3>{el.name}</h3>
                  <h4><span>${el.price}</span><span className='cart_items_card_price'><s>$200</s></span></h4>
                  <p>Cotton</p>

                  <div className='cart_items_card_dropdown'>
                    <div>
                      <span>Size:</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    
                    <div>
                      <span>Qntity:</span>

                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>

                  <div className='cart_items_card_btn'>
                      <h5 onClick={()=>removeItem(el.name)}>Remove</h5>
                  </div>
                </div>

                <div>
                  <img src={img}/>
                </div>
                
              </div>
             )}
              
              


              
            </div>



            <div className='cart_items_price_rapper'>
                <div className='cart_items_price'>
                  <h3>Price Summary</h3>               
                  <div>
                    <p><span>Total MRP (Incl. of taxes) </span><span>$200</span></p>
                    <p><span>Shipping Charges </span><span>FREE</span></p>
                    <p><span>Discount </span><span>-$100</span></p>
                    <h3><samp>Subtotal </samp> <span>100</span></h3>

                    <div><p>Make Payment</p></div>
                  </div>
                  
                </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Cart