import React, { useState } from 'react'
import './Home.css'
import Layout from '../../Component/Layout/Layout'
import img1 from '../../Asset/1.jpg'
import img2 from '../../Asset/2.jpg'
import img3 from '../../Asset/3.jpg'
import Footer from '../../Component/Foolter/Footer'

function Home() {

  const [fstFaq,setFstFaq] = useState(false)
  const [sFaq,setSFaq] = useState(false)
  const [tFaq,setTFaq] = useState(false)
  const [fFaq,setFFaq] = useState(false)


  const show = ()=>{

  }


  return (
    <>
        <Layout/>
        <div className='home'>
            <div className='home_img'>
              <div className='home_img_col'><img src={img1} /></div>
              <div className='home_img_col'><img src={img2}/></div>
            </div>

            <div className='home_img_msg'>
                <div>
                  <h2>Comfy. Cozy. Wear with anything.</h2>
                  <p>Sustainable Outdoor Footwear</p>
                  <a>Shop All</a>
                </div>
            </div>

            <div className='home_msg'>
              <h3>Socially and environmentally progressive outdoor <br></br> footwear that helps you #BeOutside</h3>
            </div>

            <div className='home_cart_rapper'>
              <div>
                <div className='home_cart'>
                  <div className='home_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
                <div className='home_cart'>
                  <div className='home_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
                <div className='home_cart'>
                  <div className='home_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
                <div className='home_cart'>
                  <div className='home_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
              </div>
            </div>

            <div className='home_second_img_rapper'>
                <div className='home_second_img'>
                  <img src={img1}/>
                </div>
                <div className='home_second_img_text'>
                    <div>
                      <h3>Autumn 2023 Lookbook</h3>

                    </div>
                </div>
            </div>
            
            <div className='home_trend_cart_rapper'>
              <div>
                <div className='home_trend_cart'>
                  <div className='home_trend_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
                <div className='home_trend_cart'>
                  <div className='home_trend_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
                <div className='home_trend_cart'>
                  <div className='home_trend_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
                <div className='home_trend_cart'>
                  <div className='home_trend_cart_img'><img src={img3}/></div>
                  <h4>T Shart</h4>
                </div>
              </div>
            </div>


            <div className='home_third_img_rapper'>
                <div className='home_third_img'>
                  <img src={img2}/>
                </div>
                <div className='home_third_img_text'>
                    <div>
                      <h3>Autumn 2023 Lookbook</h3>

                    </div>
                </div>
            </div>

            <div className='home_faq'>
                <h2>Try Them Out!</h2>
                <p>Easy returns as many times as you need to find the right size. Just contact our team for support!</p>
            
                <div className='fst_home_faq'>
                    <div onClick={()=>setFstFaq(!fstFaq)}><p>Find your size</p><p>V</p></div>
                    {fstFaq ? <p>Data</p>:null}
                </div>

                <div className='fst_home_faq'>
                    <div onClick={()=>setSFaq(!sFaq)}><p>Find your size</p><p>V</p></div>
                    {sFaq ? <p>Data</p>:null}
                </div>
                <div className='fst_home_faq'>
                    <div onClick={()=>setTFaq(!tFaq)}><p>Find your size</p><p>V</p></div>
                    {tFaq ? <p>Data</p>:null}
                </div>
                <div className='fst_home_faq'>
                    <div onClick={()=>setFFaq(!fFaq)}><p>Find your size</p><p>V</p></div>
                    {fFaq ? <p>Data</p>:null}
                </div>

                <div className='home_shop_all_btn'><p>ShopAll</p></div>
            </div>

          
            <div className='home_buttom_img_msg'>
              <div className='home_buttom_img_textmsg'>
                <h2>*******</h2>
                <p>MY Msg</p>
              </div>
              <div><img src={img1}/></div>
            </div>



           <div className='home_insta'>
                <div><h2>Join Us On Insta</h2></div>
                <div className='home_insta_img'>
                  <div><img src={img1}/></div>
                  <div><img src={img2}/></div>
                  <div><img src={img1}/></div>
                  <div><img src={img2}/></div>
                </div>
           </div>
        </div>

        <Footer/>
    </>
  )
}

export default Home