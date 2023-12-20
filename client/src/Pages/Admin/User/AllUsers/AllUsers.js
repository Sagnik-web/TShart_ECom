import React,{useState,useEffect} from 'react'
import './AllUsers.css'
import {useNavigate} from 'react-router-dom'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import { user_delete_url, user_get_url, user_patch_url } from '../../../../API/AdminURL'
import API from '../../../../API/API'

function AdminAllUsers() {

    const navigate = useNavigate()
    const [user,setUser] = useState([])

    const getData = async()=>{
        await API.get(user_get_url,{
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



    const statusUpdate =async(ID,status)=>{
        await API.patch(`${user_patch_url}/${ID}`,{status:status},{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        }).then(res=>{
            console.log(res.data);
            getData()
        }).catch(err=>{
            console.log(err);
        })
    }

    const deleteUser = async(ID)=>{
        await API.delete(`${user_delete_url}/${ID}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        }).then(res=>{
            console.log(res.data);
            getData()
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
    <div>
        <AdminLayout>
        <div className='admin_user'>

        {user.map(el=>
            <div key={el._id}>
                <div>
                    {/* <p><img src={img} height={120}/></p> */}
                    <p>Name: {el.name}</p>
                    {/* <div> */}
                        {/* <p>Pre Price: 200</p> */}
                        <p>Email: {el.email}</p>
                    {/* </div> */}
                    
                </div>
                <div>
                    {/* <div>
                        <p>Product Name: abc</p>
                        <p>Quantity: 10</p>
        
                        
                    </div>

                    <p>Net Buy Rs: 1000</p> */}


                </div>

                <div className='admin_user_card_btn'>
                    <p className='admin_user_card_btn_edit' onClick={()=>{navigate('/admin/userDetails'); localStorage.setItem('userID',el._id)}}>View</p>
                    {el.status == 'approve' ? null:<p className='admin_user_card_btn_approve' onClick={()=>{statusUpdate(el._id,'approve')}}>Approve</p>}
                    {el.status == 'block' ? null:<p className='admin_user_card_btn_block' onClick={()=>{statusUpdate(el._id,'block')}}>Block</p>}
                    <p className='admin_user_card_btn_block' onClick={()=>{deleteUser(el._id)}}>Delete</p>

                </div>
                
            </div>
        )}
        </div>
        </AdminLayout>

    </div>
  )
}

export default AdminAllUsers