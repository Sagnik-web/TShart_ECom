import React, { useState } from 'react'
import './UserOrders.css'
import Layout from '../../Component/Layout/Layout'
import img from '../../Asset/1.jpg'
import dotCircle from '../../Asset/SVG/dot_circle.svg'
import tik from '../../Asset/SVG/tik.svg'

function UserOrders() {
    const [tabName, setTabName] = useState('Pending')
    const changeTab = (tab)=>{
        setTabName(tab)
    }

    

  return (
    <div>
        <Layout/>

        <div className='order_cart'>
            <div className='order_cart_tab'>
                <p onClick={()=>changeTab('Pending')}>Pending</p>
                <p onClick={()=>changeTab('Complite')}>Complite</p>
                <p onClick={()=>changeTab('Reject')}>Reject</p>
            </div>

            <h3>{tabName}</h3>

            <div className='order_cart_items'>

              <div>

                <div className='order_cart_items_card_name'>
                  <h3>Dress</h3>
                  <h4><span>$100</span></h4>
                  <p>Cotton</p>

                  <div className='order_cart_items_card_dropdown'>
                    <div>
                      <span>Size:</span>
                      <span>M</span>
                    </div>
                    
                    <div>
                      <span>Qntity:</span>
                        <span>2</span>
                      
                    </div>
                  </div>


                    <div className='order_shipping'>
                        <div>
                            <img src={tik} height={24}/>
                            <span>Ordered</span>
                            {/* <svg id="e27k4HeRvuQ1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="11.567282" ry="11.567282" transform="matrix(.941609 0 0 0.941609 11.978891 11.989446)" fill="none" stroke="#000" stroke-width="2"/><ellipse rx="3.941953" ry="3.941953" transform="matrix(.789823 0 0 0.789823 12 11.989446)"/></svg> */}
                        </div>
                        <div className={true?'green_dot dot':'dot'}></div>
                        <div>
                            <img src={true? tik:dotCircle} height={24}/>
                            <span>Shipping</span>
                             {/* <svg id="e27k4HeRvuQ1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="11.567282" ry="11.567282" transform="matrix(.941609 0 0 0.941609 11.978891 11.989446)" fill="none" stroke="#000" stroke-width="2"/><ellipse rx="3.941953" ry="3.941953" transform="matrix(.789823 0 0 0.789823 12 11.989446)"/></svg> */}
                        </div>
                        <div className={false?'green_dot dot':'dot'}></div>
                        <div>
                            <img src={false? tik:dotCircle} height={24}/>
                            <span>Complite</span>
                            {/* <svg id="e27k4HeRvuQ1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="11.567282" ry="11.567282" transform="matrix(.941609 0 0 0.941609 11.978891 11.989446)" fill="none" stroke="#000" stroke-width="2"/><ellipse rx="3.941953" ry="3.941953" transform="matrix(.789823 0 0 0.789823 12 11.989446)"/></svg> */}
                        </div>
                    </div>



                    <div className='order_cancel'>
                        <hr></hr>
                        <p>Cancel Poduct</p>
                    </div>
                </div>

                <div>
                  <img src={img}/>
                </div>
               
              </div>
              


              
            </div>

        </div>
    </div>
  )
}

export default UserOrders