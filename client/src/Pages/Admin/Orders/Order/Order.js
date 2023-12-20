import React from 'react'
import './Order.css'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'

function AdminOrder() {
  return (
    <AdminLayout>
        <div className='admin_order'>
            <h3>Orders</h3>
            <div className='admin_order_tab'>
                <h4>Pending</h4>
                <h4>Shipping</h4>
                <h4>Complite</h4>
                <h4>Reject</h4>
                <h4>Refund Request</h4>
                <h4>Refund Complite</h4>
            </div>

            <div>
                <h3>Pending</h3>

                <div>
                    {/* <div> */}
                        <p>Order ID</p>
                        <p>Product Name:</p>
                        <p>Price</p>
                        <p>Quentity: 2</p>
                        <p>Time</p>
                    {/* </div> */}

                    <div>
                        <p className='admin_order_btn_view'>View</p>
                        <p className='admin_order_btn_shipping'>Shipping</p>
                        <p className='admin_order_btn_reject'>Reject</p>
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
                        <p className='admin_order_btn_view'>View</p>
                        <p className='admin_order_btn_shipping'>Shipping</p>
                        <p className='admin_order_btn_reject'>Reject</p>
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
                        <p className='admin_order_btn_view'>View</p>
                        <p className='admin_order_btn_shipping'>Shipping</p>
                        <p className='admin_order_btn_reject'>Reject</p>
                    </div>
                </div>
            </div>
        </div>
        
    </AdminLayout>
  )
}

export default AdminOrder