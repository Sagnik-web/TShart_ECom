import React from 'react'
import './Signup.css'
import img from '../../Asset/1.jpg'


function signup() {
  return (
    <div className='signup'>
        

        <div className='signup_img_up'>
            <div className='signup_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='signup_form'>
          <div>
          <div>
              <h2>Signup</h2>
              <p>Full Name</p>
              <input placeholder='ABC'/>
              <p>Email ID</p>
              <input placeholder='abc@gmail.com'/>
              <p>Password</p>
              <input placeholder='************' type='password'/>
              <p>Confarm Password</p>
              <input placeholder='************' type='password'/><br></br>
              <div><button>Submit</button></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default signup