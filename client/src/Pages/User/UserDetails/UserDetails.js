import React from 'react'
import './UserDetails.css'
import  img from '../../../Asset/1.jpg'
import Layout from '../../../Component/Layout/Layout'

function UserDetails() {
  return (
    <>
    <Layout/>
    <div className='user_profile'>
        <h3>Profile</h3>
        <div>
          <img src={img} height={150}/>
          <input type='file'/>
        </div>
        <div className='user_profile_details'>
          <table>
            <tr>
              <td>Name:</td>
              <td>Sagnik Biswas</td>
              
              <td className='user_profile_details_edit'><p>Edit</p></td>
              {/* <td><input/></td> */}
            </tr>

            <tr>
              <td>Email:</td>
              <td>abc@gmail.com</td>
                            <td className='user_profile_details_edit'><p>Edit</p></td>
              {/* <td><input/></td> */}

            </tr>
              
            <tr>
              <td>Mobile No(1):</td>
              <td>123456789</td>
                            <td className='user_profile_details_edit'><p>Edit</p></td>
              {/* <td><input/></td> */}

            </tr>

            <tr>
              <td>Mobile No(2):</td>
              <td>1234567</td>
                            <td className='user_profile_details_edit'><p>Edit</p></td>
              {/* <td><input/></td> */}

            </tr>

            <tr>
              <td>Address:</td>
              <td>ABC Address fhgj hjgjjh hvjgjjh hjgjh vhjjhjh hjgjg ugujjyy hgjhg</td>
                            <td className='user_profile_details_edit'><p>Edit</p></td>
              {/* <td><input/></td> */}

            </tr>

            <tr>
              <td>Pin:</td>
              <td>876543</td>
                            <td className='user_profile_details_edit'><p>Edit</p></td>
              {/* <td><input/></td> */}

            </tr>

          </table>
          
          <div className='user_profile_details_btn'>
            <p>Submit</p>
          </div>
        </div>

        <div>
            <h3>Likes</h3>
        </div>
    </div>
    </>
  )
}

export default UserDetails