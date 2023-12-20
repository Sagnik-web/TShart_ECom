import React, { useEffect, useState } from 'react'
import './MDress.css'
import img from '../../../../Asset/1.jpg'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import API from '../../../../API/API'
import { mdress_delete_url, mdress_get_url, mdress_patch_url } from '../../../../API/AdminURL'
import { useNavigate } from 'react-router-dom'

function AdminMDress() {
    const navigate = useNavigate()
    const [mdress,setMdress] = useState([])

    const getData = async()=>{
        await API.get(mdress_get_url,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        })
        .then(res=>{
            console.log(res.data);
            setMdress(res.data.dress)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
         getData()
    },[])



    const statusUpdate =async(ID,status)=>{
        await API.patch(`${mdress_patch_url}/${ID}`,{status:status},{
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

    const deleteMDress = async(ID)=>{
        await API.delete(`${mdress_delete_url}/${ID}`,{
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
    <>
        <AdminLayout>
        <div className='admin_mdress'>
            
        {mdress.map(el=>
            <div key={el._id}>
                <div>
                    <p><img src={img} height={120}/></p>
                    <p>{el.name}</p>
                </div>
                <div>
                    <p>Price: {el.price}</p>
                    <p>Quantity: {el.quantity}</p>


                </div>

                <div className='admin_mdress_card_btn'>
                    <p className='admin_mdress_card_btn_view' onClick={()=>{navigate(`/admin/mdressDetails`)}} >View</p>
                    {el.status == 'approve' ? null:<p className='admin_mdress_card_btn_approve' onClick={()=>statusUpdate(el._id,'approve')}>Approve</p>}
                    {el.status == 'block' ? null:<p className='admin_mdress_card_btn_block' onClick={()=>statusUpdate(el._id,'block')}>Block</p>}
                    <p className='admin_mdress_card_btn_block' onClick={()=>deleteMDress(el._id)}>Delete</p>
                </div>
                
            </div>
        )}


            
        </div>
        </AdminLayout>
    </>
  )
}

export default AdminMDress