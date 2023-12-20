import React from 'react'
import './Navber.css'
import img from '../../../Asset/1.jpg'
import { Navigate, useNavigate } from 'react-router-dom'

function Navber() {
    const navigate = useNavigate()
  return (
    <>
        <div className="nav_up">Free shipping in NA. Easy returns. Pay in 4 installments.</div>
    
        <div className='nav'>
            <div >
                <div>
                <p className='nav_logo'>
                    <span><img src="https://imgs.search.brave.com/tU8f9OmCV0lf7X6u--0b6AeQYzyiWslNxfyDtXSidVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vZDcyOWVl/MTVkOTk0NDA5MTMw/MDk3MDkyNDcyNzdj/NTdiYzVlNTk4NC0z/Mjl4MzM2LnBuZz93/PTEwODAmcT03Mg" height={80}/>    </span>
                </p>
                <p className="nav_link">
                    <span onClick={()=>navigate('/bestseller')}>Bestsellers</span>
                    <span onClick={()=>navigate('/trending')}>Trending</span>
                    <span onClick={()=>navigate('/male')}>Male</span>
                    <span onClick={()=>navigate('/female')}>Female</span>
                    
                </p>
                </div>
                {false ?<div className='nav_link'>
                    <span onClick={()=>navigate('/login')}>Login</span>
                    <span onClick={()=>navigate('/signup')}>Signup</span>
                

                </div>:
                <div className='nav_user'>
                    <span><img src={img} height={50} width={50}/></span>
                    <p>Sagnik Biswas</p>
                        {/* <div class="nav_user_dropdown_content">
                            <p>Hello World!</p>
                        </div> */}
                        <div class="nav_user_dropdown_content">
                            <a onClick={()=>navigate('/user')}>Profile</a>
                            <a onClick={()=>navigate('/order')}>Order</a>
                            <a onClick={()=>navigate('/updatePassword')}>Change Password</a>
                            </div>
                    {/* <span>V</span> */}
                </div>}
            </div>
        </div>
    </>
  )
}

export default Navber