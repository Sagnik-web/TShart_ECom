import React,{useState} from 'react'
import './Login.css'
import img from '../../../Asset/1.jpg'
import API from '../../../API/API'
import { manager_login_url } from '../../../API/AdminURL'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {
  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const apiPost =async(formdata)=>{
    await API.post(manager_login_url,formdata)
         .then(async res=>{
            console.log(res.data)
            await localStorage.setItem('token',res.data.data)

         })
         .catch(err=>{
            console.log(err)
         })
  }


  const postData = ()=>{
    
    if(!!formData.email && !!formData.password){
        console.log(formData)

        apiPost(formData);
        navigate('/admin/home')
      
    }else{
      console.log("Error");
    }
    // console.log(!formData.email);
  }

  return (
    <div className='AdminLogin'>
        

        <div className='AdminLogin_img_up'>
            <div className='AdminLogin_img'>
              <img src={img}/>
            </div>
            {/* <div>
                Hi
            </div> */}
        </div>


        <div className='AdminLogin_form'>
          <div>
          <div>
              <h2>Admin Login</h2>
              <p>Email ID</p>
              <input placeholder='abc@gmail.com' name='email' value={formData.email} onChange={handleChange}/>
              <p>Password</p>
              <input placeholder='************' type='password' name='password' value={formData.password} onChange={handleChange}/><br></br>
              <div><button onClick={postData}>Submit</button></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin