import React, { useState } from 'react'
import './BestSeller.css'
import img2 from '../../Asset/2.jpg'
import Layout from '../../Component/Layout/Layout'
import Footer from '../../Component/Foolter/Footer'
import BestSellerCard from './BestSellerCard/BestSellerCard'

function BestSeller() {

    const [popup,setPopup] = useState(true)
    const gender = (g)=>{
        console.log(g);
        setPopup(false)
    }

  return (
    <>
        {popup ? <div className='popup_gender'>
            <div>
                <p>Select Category</p>
                <div>
                    <span onClick={()=>gender('M')}>Male</span>    
                    <span onClick={()=>gender('F')}>Female</span>    
                </div>
            </div>
        </div> : null}

        <Layout/>

        <div className='BestSeller'>

            <div className='BestSeller_banner'>
                <div>
                    <img src={img2}/>
                </div>
                <div>
                    <h3>BestSeller</h3>
                </div>                
            </div>


            <div className='BestSeller_content'>
                <div className='BestSeller_filter'>
                    <p>Filter:</p>
                    <p><span>Sort by:</span> <span>8 products</span></p>
                </div>

                <div className='BestSeller_card_rapper'>
                    <div>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>
                        <BestSellerCard/>


                    </div>
                </div>
            </div>


        </div>

        <Footer/>
    </>
  )
}

export default BestSeller