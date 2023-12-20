import React from 'react'
import './MDressUpdate.css'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import img from '../../../../Asset/1.jpg'

function AdminMDressUpdate() {
  return (
    <AdminLayout>
      <div className='admin_mdress_update'>
        <div>
            <div className='admin_mdress_update_img'>
                {/* <div> */}
                <div>
                    <p><img src={img} width={270}/></p>
                    <div>
                        <p><img src={img} width={100}/></p>
                        <p><input  type='file'/></p>
                    </div>
                </div>

                <div>
                    <p><img src={img} width={270}/></p>
                    <div>
                        <p><img src={img} width={100}/></p>
                        <p><input type='file'/></p>
                    </div>
                </div>
                {/* </div> */}


                {/* <div> */}
                <div>
                    <p><img src={img} width={270}/></p>
                    <div>
                        <p><img src={img} width={100}/></p>
                        <p><input type='file'/></p>
                    </div>
                </div>

                <div>
                    <p><img src={img} width={270}/></p>
                    <div>
                        <p><img src={img} width={100}/></p>
                        <p><input type='file'/></p>
                    </div>
                </div>
                {/* </div> */}
            </div>

            <hr></hr>

            <h2>update</h2>
            <div className='admin_mdress_update_info'>
                <div>
                    <h3>Name</h3>
                    <p><span>Pre Name: </span><span>T-Shart</span></p>
                    <p><span>New Name: </span><span><input/></span></p>
                </div>

                <div>
                    <h3>Price</h3>
                    <p><span>Pre Price: </span><span>T-Shart</span></p>
                    <p><span>New Price: </span><span><input/></span></p>
                </div>

                <div>
                    <h3>Discount Price</h3>
                    <p><span>Pre Discount Price: </span><span>T-Shart</span></p>
                    <p><span>New Discount Price: </span><span><input/></span></p>
                </div>

                <div>
                    <h3>Quentity</h3>
                    <p><span>Pre Quentity: </span><span>T-Shart</span></p>
                    <p><span>New Quentity: </span><span><input/></span></p>
                </div>

                <div>
                    <h3>Desc</h3>
                    <p><span>Pre Desc: </span><span>T-Shart</span></p>
                    <p className='desc'><span>New Desc: </span><span><textarea></textarea></span></p>
                </div>

                <div>
                    <h3>Size</h3>
                    <p><span>Pre Size: </span><span>T-Shart</span></p>
                    <p>
                        <span>New Size: </span>
                        <span>
                            <p><input type='checkbox' /><label>M</label></p>
                            <p><input type='checkbox' /><label>L</label></p>
                            <p><input type='checkbox' /><label>XL</label></p>
                            <p><input type='checkbox' /><label>XXL</label></p>
                            <p><input type='checkbox' /><label>XXXL</label></p>

                        </span>
                    </p>
                </div>
            </div>

            <div className='admin_mdress_update_submit_btn'>
                <h3>Submit</h3>
            </div>
        </div>
    </div>
    </AdminLayout>
  )
}

export default AdminMDressUpdate