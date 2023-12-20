import React from 'react'
import Navber from '../../Component/Layout/Navber/Navber'
import './DressDetails.css'
import img1 from '../../Asset/1.jpg'
import heart from '../../Asset/heart.png'
import heart_red from '../../Asset/heart_red.png'
import star from '../../Asset/star.png'


function DressDetails() {

    const allStars = count => {
        let content = [];
        for (let i = 0; i < count; i++) {
          
          content.push(<span className='review_start' key={i}><img src={star}/></span>);
        }
        return content;
      };

  return (
    <>
        <Navber/>
        <div>
        <div className='dress_details'>
            <div className='dress_details_first'>
                <div className='dress_details_img'>
                    <div className='dress_details_img_small'>
                        <div><img src={img1}/></div>
                        <div><img src={img1}/></div>
                        <div><img src={img1}/></div>
                        <div><img src={img1}/></div>
                    </div>
                    <div className='dress_details_img_big'><img src={img1}/></div>
                </div>
                <div className='dress_details_details'>
                    <h2>Name</h2>
                    <h4>Desc</h4>
                    <h3>Rs: 1000</h3>
                    <p>About</p>
                    <div className='dress_details_details_color'>
                        <h4>COLOUR OPTIONS:   BOLD RED</h4>
                        <p><span></span></p>
                    </div>
                    <div className='dress_details_details_size'>
                        <h4><span>Size</span><span className='dress_details_details_size_guide'>size guide</span></h4>
                        <p className='dress_details_details_size_guide_type'><span>M</span><span>L</span><span>XL</span><span>XXL</span><span>XXXL</span></p>
                        {/* <p></p> */}
                        <p className='dress_details_details_size_cart'>Add To Cart</p>
                        {/* <div><span></span></div> */}
                    </div>
                    <div className='dress_details_details_pin'>
                        <h3>CHECK FOR DELIVERY DETAILS</h3>
                        <p>Delivering in India </p>
                        <div><input/><span>Check</span></div>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
            <div className='dress_reviews'>
                <h2>Review</h2>
                <hr></hr>
                <div className='dress_reviews_card'>
                    <div>
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>
                    </div>
                    <p><textarea placeholder='Your Op'></textarea></p>
                    {/* <p><img/></p> */}
                    <div className='review_submit_btn'><p>Submit</p></div>
                    {/* <div className='review_like'>
                        <img src={heart}/>
                        <img src={heart_red}/>
                    </div> */}
                </div>

                
                <hr></hr>

                <div className='dress_reviews_card_details'>
                    <div className='review_start'>
                        {allStars(3)}
                        
                    </div>
                    <p>Review Desc</p>
                    {/* <p><img/></p> */}
                    {/* <div className='review_submit_btn'><p>Submit</p></div> */}
                    <div className='review_like'>
                        <img src={heart}/>
                        {/* <img src={heart_red}/> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DressDetails