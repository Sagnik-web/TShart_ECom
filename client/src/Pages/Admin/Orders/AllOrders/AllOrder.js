import React from 'react'
import './AllOrder.css'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'

function AdminAllOrder() {
  return (
    <AdminLayout>
        <div className='admin_all_order'>
            <h3> All Orders</h3>
            
            <div>
                

                <div>
                    {/* <div> */}
                        <p>Order ID</p>
                        <p>Product Name:</p>
                        <p>Price</p>
                        <p>Quentity: 2</p>
                        <p>Time</p>
                    {/* </div> */}

                    <div>
                        <p className='admin_all_order_btn_view'>View</p>
                        {/* <p className='admin_all_order_btn_shipping'>Shipping</p> */}
                        <p className='admin_all_order_btn_reject'>Delete</p>
                    </div>
                </div>


                <div>
                    {/* <div> */}
                        <p>Order ID</p>
                        <p>Product Name:</p>
                        <p>Price</p>
                        <p>Quentity: 2</p>
                        <p>Time</p>
                    {/* </div> */}

                    <div>
                        <p className='admin_all_order_btn_view'>View</p>
                        {/* <p className='admin_all_order_btn_shipping'>Shipping</p> */}
                        <p className='admin_all_order_btn_reject'>Delete</p>
                    </div>
                </div>


                <div>
                    {/* <div> */}
                        <p>Order ID</p>
                        <p>Product Name:</p>
                        <p>Price</p>
                        <p>Quentity: 2</p>
                        <p>Time</p>
                    {/* </div> */}

                    <div>
                        <p className='admin_all_order_btn_view'>View</p>
                        {/* <p className='admin_all_order_btn_shipping'>Shipping</p> */}
                        <p className='admin_all_order_btn_reject'>Delete</p>
                    </div>
                </div>
            </div>
        </div>
        
    </AdminLayout>
  )
}

export default AdminAllOrder