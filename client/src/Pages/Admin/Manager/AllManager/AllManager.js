import React, { useEffect, useState } from 'react'
import './AllManager.css'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import API from '../../../../API/API'
import { manager_delete_url, manager_update_url, managers_get_url } from '../../../../API/AdminURL'
import { useNavigate } from 'react-router-dom'




function AdminAllManager() {
    const navigate = useNavigate()
    const [managerDetails, setManagerDetails] = useState([])

    const getAllManager =()=>{
        API.get(managers_get_url,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(async res=>{
           await console.log(res.data)
          await setManagerDetails(res.data.manager)

        })
        .catch(err=>{
           console.log(err)
        })
    }

    useEffect(()=>{
        getAllManager()
    },[1])




    const statusUpdate =async(ID,status)=>{
        await API.patch(`${manager_update_url}/${ID}`,{status:status},{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
         .then(res=>{
            console.log(res.data)
            getAllManager()
         })
         .catch(err=>{
            console.log(err)
         })
    }



    const deleteManager = async(ID)=>{
        await API.delete(`${manager_delete_url}/${ID}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
         .then(res=>{
            console.log(res.data)
            getAllManager()
         })
         .catch(err=>{
            console.log(err)
         })
    }



  return (
    <AdminLayout>
    <div className='admin_manager'>

{managerDetails.map(el=>
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

    <div className='admin_manager_card_btn'>
        <p className='admin_manager_card_btn_edit' onClick={()=>navigate('/admin/manager/edit')}>View</p>
        {el.status == 'approve' ? null:<p className='admin_manager_card_btn_approve' onClick={()=>statusUpdate(el._id,'approve')}>Approve</p>}
        {el.status == 'block' ? null:<p className='admin_manager_card_btn_block' onClick={()=>statusUpdate(el._id,'block')}>Block</p>}
        <p className='admin_manager_card_btn_block' onClick={()=>deleteManager(el._id)}>Delete</p>

    </div>
    
</div>
)}
</div>
    </AdminLayout>
  )
}

export default AdminAllManager