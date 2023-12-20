import React from 'react'
import './FDress.css'
import img from '../../../../Asset/1.jpg'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'

function AdminFDress() {
  return (
    <>
        <AdminLayout>
        <div className='admin_fdress'>
            

            <div>
                <div>
                    <p><img src={img} height={120}/></p>
                    <p>Name</p>
                </div>
                <div>
                    <p>Quantity: 10</p>


                </div>

                <div className='admin_fdress_card_btn'>
                    <p className='admin_fdress_card_btn_edit'>Edit</p>
                    <p className='admin_fdress_card_btn_delete'>Delete</p>
                </div>
                
            </div>



            <div>
                <div>
                    <p><img src={img} height={120}/></p>
                    <p>Name sbj bjdbfbj</p>
                    <div>
                        <p>Pre Price: 200</p>
                        <p>Rs. 100</p>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <p>Quantity: 10</p>
                        <p>Sold Quantity: 10</p>
                        
                    </div>

                    <p>Sold Rs: 1000</p>


                </div>

                <div className='admin_fdress_card_btn'>
                    <p className='admin_fdress_card_btn_edit'>View</p>
                    <p className='admin_fdress_card_btn_approve'>Approve</p>
                    <p className='admin_fdress_card_btn_block'>Block</p>
                </div>
                
            </div>
        </div>
        </AdminLayout>
    </>
  )
}

export default AdminFDress