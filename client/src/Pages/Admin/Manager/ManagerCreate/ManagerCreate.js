import React, { useState } from 'react'
import './ManagerCreate.css'
import axios from 'axios'
// import Navber from '../../../../Component/Layout/Navber/Navber'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import API from '../../../../API/API'
import { manager_create_url } from '../../../../API/AdminURL'

function ManagerCreate() {

  const [cnfPass,setCnfPass] = useState('')
  // const [passMatch,setPassMatch] = useState(false)


  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }


  const apiPost =async(formdata)=>{
    await API.post(manager_create_url,formdata)
         .then(res=>{
            console.log(res.data)
         })
         .catch(err=>{
            console.log(err)
         })
  }


  const postData = (data)=>{
    // if(!!formData.name) 
    // if(!!formData.email) 
    // if(!!formData.password )
    if(!!formData.name && !!formData.email && !!formData.password && cnfPass === formData.password){
        console.log(data)

        apiPost(formData);
      
    }else{
      console.log("Error");
    }
    // console.log(!formData.email);
  }

  return (
    <>
    <AdminLayout>
    <div className='manager_account'>
        <div className='create_manager'>
            <h2>Create Manager Account</h2>
            
            <p><span>Name:</span><span><input name='name' value={formData.name} onChange={handleChange}/></span></p>
            <p><span>Email:</span><span><input name='email' value={formData.email} onChange={handleChange}/></span></p>
            <p><span>Password:</span><span><input type='password'name='password' value={formData.password} onChange={handleChange}/></span></p>
            <p><span>Confirm Password:</span><span><input type='password' value={cnfPass} onChange={(e)=>setCnfPass(e.target.value)}/></span></p>
            <p>{cnfPass === formData.password ? null : <span>Password Not Match</span>}</p>

            <div>
                <p onClick={()=>postData(formData)}>Submit</p>
            </div>
        </div>
    </div>
    </AdminLayout>
    </>
  )
}

export default ManagerCreate