import React, { useState } from 'react'
import './Trending.css'
import img2 from '../../Asset/2.jpg'
import Layout from '../../Component/Layout/Layout'
import Footer from '../../Component/Foolter/Footer'
import TrendingCard from './TrendingCard/TrendingCard'

function Trending() {

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

        <div className='trending'>

            <div className='trending_banner'>
                <div>
                    <img src={img2}/>
                </div>
                <div>
                    <h3>Trending</h3>
                </div>                
            </div>


            <div className='trending_content'>
                <div className='trending_filter'>
                    <p>Filter:</p>
                    <p><span>Sort by:</span> <span>8 products</span></p>
                </div>

                <div className='trending_card_rapper'>
                    <div>
                        <TrendingCard/>
                        <TrendingCard/>
                        <TrendingCard/>
                        <TrendingCard/>
                        <TrendingCard/>
                        <TrendingCard/>
                        <TrendingCard/>
                        <TrendingCard/>


                    </div>
                </div>
            </div>


        </div>

        <Footer/>
    </>
  )
}

export default Trending