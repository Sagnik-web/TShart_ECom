import React from 'react'
import './ResetPassword.css'
import img from '../../../../Asset/2.jpg'

function ResetPassword() {
  return (
    <div className='reset_pass'>
        

        <div className='reset_pass_img_up'>
            <div className='reset_pass_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='reset_pass_form'>
          <div>
          <div>
              <h2>Reset Password</h2>
              <p>New Password</p>
              <input placeholder='abc' type='password'/>
              <p>Confirm Password</p>
              <input placeholder='abc' type='password'/>


              <div><button>Submit</button></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ResetPassword