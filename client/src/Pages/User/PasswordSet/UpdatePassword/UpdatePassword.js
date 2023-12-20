import React from 'react'
import './UpdatePassword.css'
import img from '../../../../Asset/1.jpg'

function UpdatePassword() {
  return (
    <div className='update_pass'>
        

        <div className='update_pass_img_up'>
            <div className='update_pass_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='update_pass_form'>
          <div>
          <div>
              <h2>Change Password</h2>
              <p>Old Password</p>
              <input placeholder='abc' type='password'/>
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

export default UpdatePassword