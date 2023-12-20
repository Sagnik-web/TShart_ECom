import React, { Children, useState } from 'react'
import './AdminLayout.css'
import logo from '../../Asset/heart.png'
import { useNavigate } from 'react-router-dom'

function AdminLayout({children}) {
  const [mdressShow, setMdressShow] = useState(false)
  const [fdressShow, setFdressShow] = useState(false)
  const [manageShow, setManagerShow] = useState(false)
  const [userShow, setUserShow] = useState(false)
  const [orderShow, setOrderShow] = useState(false)

  const navigate = useNavigate()

  return (
  
    <div className='admin_layout'>
        <div className='admin_navber'>
            <div>
              <div className='admin_navber_col1'>
                <p><span><img src={logo} height={27}/></span></p>
                <p><span><img src="https://imgs.search.brave.com/tU8f9OmCV0lf7X6u--0b6AeQYzyiWslNxfyDtXSidVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vZDcyOWVl/MTVkOTk0NDA5MTMw/MDk3MDkyNDcyNzdj/NTdiYzVlNTk4NC0z/Mjl4MzM2LnBuZz93/PTEwODAmcT03Mg" height={60}/></span>
                </p>
                <p>
                  <span>Data URL</span>
                  <span>Data URL</span>
                </p>
              </div>
            </div>
        </div>



        <div className='sidebar_body'>    
        <div className='admin_sideber'>
          <div>
              <div>
                  <h3 onClick={()=>setMdressShow(!mdressShow)}><span>Male Dress</span><span>V</span></h3>
                  {mdressShow ? 
                  <>
                    <p onClick={()=>navigate('/admin/mdress')}>All Male Dress</p>
                    <p onClick={()=>navigate('/admin/mdress/post')}>Create Male Dress</p>
                  </>:null}
              </div>
              <div>
                  <h3 onClick={()=>setFdressShow(!fdressShow)}><span>Female Dress</span><span>V</span></h3>
                  {fdressShow ?
                  <>
                    <p onClick={()=>navigate('/admin/fdress')}> All Female Dress</p>
                    <p onClick={()=>navigate('/admin/fdress/post')}>Create Female Dress</p>
                  </>:null}
              </div>
              <div>
                  <h3 onClick={()=>setManagerShow(!manageShow)}><span>Manager</span><span>V</span></h3>
                  {manageShow ? <>
                  <p onClick={()=>navigate('/admin/manager')}>All Manager</p>
                  <p onClick={()=>navigate('/admin/manager/create')}>Create Manasger</p>
                  </> :null}
              </div>
              <div>
                  <h3 onClick={()=>setUserShow(!userShow)}><span>User</span><span>V</span></h3>
                  {userShow ? <p onClick={()=>navigate('/admin/user')}>All Users</p> :null}
              </div>


              <div>
                <h3 onClick={()=>setOrderShow(!orderShow)}><span>Order</span><span>V</span></h3>
                {orderShow ? <>
                <p onClick={()=>navigate('/admin/allorder')}>All Orders</p>
                <p onClick={()=>navigate('/admin/order')}>Orders</p>
                </>:null}
              </div>
          </div>

          
        </div>
        <div className='body'>
            {children}
        </div>
        </div>
    </div>
  )
}

export default AdminLayout