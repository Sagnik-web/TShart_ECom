import React from 'react'
import './OTP.css'
import img from '../../../../Asset/1.jpg'

function OTP() {


  
  return (
    <div>
       <div className='otp'>
        

        <div className='otp_img_up'>
            <div className='otp_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='otp_form'>
          <div>
          <div>
              <h2>Verification</h2>
              <p>OTP</p>
              {/* <div class="otp-field">
                  <input type="text" maxlength="1" />
                  <input type="text" maxlength="1" />
                  <input class="space" type="text" maxlength="1" />
                  <input type="text" maxlength="1" />
                  <input type="text" maxlength="1" />
                  <input type="text" maxlength="1" />
              </div> */}
              <input type='number' max={6}/>

              <div><button>Submit</button></div>
          </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default OTP