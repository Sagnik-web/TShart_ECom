import React from 'react'
import './ForgotPassword.css'
import img from '../../../../Asset/2.jpg'

function ForgotPassword() {
  return (
    <div className='forgot_pass'>
        

        <div className='forgot_pass_img_up'>
            <div className='forgot_pass_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='forgot_pass_form'>
          <div>
          <div>
              <h2>Forgot Password</h2>
              <p>Email ID</p>
              <input placeholder='abc@gmail.com'/>

              <div><button>Submit</button></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword