import React from 'react'
import './login.css'
import img from '../../Asset/1.jpg'
import API from '../../API/API'
import { login_url } from '../../API/UserURL'


function login() {

  const postData =()=>{
    API.post(login_url)
       .then(res=>{
        console.log();
       })
  } 


  return (
    <div className='login'>
        

        <div className='login_img_up'>
            <div className='login_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='login_form'>
          <div>
          <div>
              <h2>Login</h2>
              <p>Email ID</p>
              <input placeholder='abc@gmail.com'/>
              <p>Password</p>
              <input placeholder='************' type='password'/><br></br>
              <div><button>Submit</button></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default login