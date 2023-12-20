import React,{useState,useEffect} from 'react'
import './UserDetails.css'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import API from '../../../../API/API'
import { user_get_url } from '../../../../API/AdminURL'

function AdminUserDetails() {
    const [user,setUser]= useState({})

    const getData = async()=>{
        let ID = await localStorage.getItem('userID')
        await API.get(`${user_get_url}/${ID}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(res=>{
            console.log(res.data);
            setUser(res.data.user)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
         getData()
    },[])


  return (
    <div>
        <AdminLayout>
            <div className='admin_user_details'>
                <h3>User Details</h3>
                <div>
                    <p><span>User Name: </span><span>{user.name}</span></p>
                    <p><span>Email: </span><span>{user.email}</span></p>
                    <p><span>Phone No: </span><span>7076103394</span></p>
                    <p><span>Address: </span><span>dnd</span></p>
                    
                    <div>
                        <h4>Likes</h4>

                        <div className='admin_user_details_likes'>
                            
                            <div>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>
                                <p>0012</p>

                                {/* <p>Name</p> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4>Products</h4>

                        <div className='admin_user_details_product'>
                            <div>
                                <p>Product ID: </p>
                                <p>Product Name: Prd</p>
                                <p>Quantity: 1</p>
                                <p>Time: </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    </div>
  )
}

export default AdminUserDetails