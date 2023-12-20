import React, { useState } from 'react'
import './MDressPost.css'
import img from '../../../../Asset/1.jpg'
import AdminLayout from '../../../../Component/AdminLayout/AdminLayout'
import API from '../../../../API/API'
import { mdress_post_url } from '../../../../API/AdminURL'
import { img_upload_url } from '../../../../API/BasicURL'

function AdminMDressPost() {
    const [img1,setImg1] = useState('')
    const [img2,setImg2] = useState('')
    const [img3,setImg3] = useState('')
    const [img4,setImg4] = useState('')

    // const [imgName,setImgName] = useState('')


    const [formData,setFormData] = useState({
        name:'',
        desc:'',
        price:'',
        discount_price:'',
        quantity:'',
        spacal_feature:'',
        pd_manufactured_by:'',
        pd_packaged_by:'',
        pd_commodity:'',
        pd_sold_by:'',
        pd_spec:'',
        size:[],
        img1:'',
        img2:'',
        img3:'',
        img4:''
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }


    const handleCheckboxChange = (event)=> setFormData({...formData, size:[ ...formData.size, event.target.value]});



    const postData =async()=>{
        console.log(formData);

             await API.post(mdress_post_url,formData,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
             })
              .then(async res=>{
                console.log(res.data);
             
              })
              .catch(err=>{
                console.log('Error: ',err);
              })
         
    }

 



    
    // const imgUpload = async(file) =>{
       
    
    //     await API.post(img_upload_url,file)
    //           .then(async res=>{
    //             console.log(res.data);
    //             await setImgName(res.data.data)
    //           })
    //           .catch(err=>{
    //             console.log('Error: ',err);
    //           })
              
    //     // console.log(img1);
    // }

    const fImgUpload = async(file)=>{
        const imgData = new FormData()
        imgData.append('img',file)
        await setImg1(URL.createObjectURL(file))
        
        await API.post(img_upload_url,imgData)
        .then(async res=>{
          console.log(res.data);
            await setFormData({...formData, img1:res.data.data})
        
        })
        .catch(err=>{
          console.log('Error: ',err);
        })
    }

    const sImgUpload = async(file)=>{
        
        const imgData = new FormData()
        imgData.append('img',file)
        await setImg2(URL.createObjectURL(file))
        await API.post(img_upload_url,imgData)
        .then(async res=>{
          console.log(res.data);
            await setFormData({...formData, img2:res.data.data})
        
        })
        .catch(err=>{
          console.log('Error: ',err);
        })
    }

    const tImgUpload = async(file)=>{
        
        const imgData = new FormData()
        imgData.append('img',file)
        await setImg3(URL.createObjectURL(file))
        
        await API.post(img_upload_url,imgData)
        .then(async res=>{
          console.log(res.data);
            await setFormData({...formData, img3:res.data.data})
        
        })
        .catch(err=>{
          console.log('Error: ',err);
        })

    }
    const foImgUpload = async(file)=>{
        
        const imgData = new FormData()
        imgData.append('img',file)
        await setImg4(URL.createObjectURL(file))
        
        await API.post(img_upload_url,imgData)
        .then(async res=>{
          console.log(res.data);
            await setFormData({...formData, img4:res.data.data})
        
        })
        .catch(err=>{
          console.log('Error: ',err);
        })

    }

  return (
    <AdminLayout>
      <div className='admin_mdress_post'>
        <div>
            <div className='admin_mdress_post_img'>
                {/* <div> */}
                <div>
                    {/* <p><img src={img} width={270}/></p> */}
                    <div>
                        {img1 ? <p><img src={img1} width={250}/></p>:null}
                        <p><input  type='file' onChange={(e)=>fImgUpload(e.target.files[0])}/></p>
                    </div>
                </div>

                <div>
                    {/* <p><img src={img} width={270}/></p> */}
                    <div>
                    {img2 ? <p><img src={img2} width={250}/></p>:null}
                        <p><input type='file' onChange={(e)=>sImgUpload(e.target.files[0])}/></p>
                    </div>
                </div>
                {/* </div> */}


                {/* <div> */}
                <div>
                    {/* <p><img src={img} width={270}/></p> */}
                    <div>
                    {img3 ? <p><img src={img3} width={250}/></p>:null}
                        <p><input type='file' onChange={(e)=>tImgUpload(e.target.files[0])}/></p>
                    </div>
                </div>

                <div>
                    {/* <p><img src={img} width={270}/></p> */}
                    <div>
                    {img4 ?  <p><img src={img4} width={250}/></p>:null}
                        <p><input type='file' onChange={(e)=>foImgUpload(e.target.files[0])}/></p>
                    </div>
                </div>
                {/* </div> */}
            </div>

            <hr></hr>

            <h2>Post</h2>
            <div className='admin_mdress_post_info'>
                <div>
                    <h3>Name</h3>
                    {/* <p><span>Pre Name: </span><span>T-Shart</span></p> */}
                    <p>
                        {/* <span>New Name: </span> */}
                        <span><input name="name" value={formData.name} onChange={handleChange}/></span>
                    </p>
                </div>

                <div>
                    <h3>Price</h3>
                    {/* <p><span>Pre Price: </span><span>T-Shart</span></p> */}
                    <p>
                        {/* <span>New Price: </span> */}
                        <span><input name="price" value={formData.price} onChange={handleChange} /></span>
                    </p>
                </div>

                <div>
                    <h3>Discount Price</h3>
                    {/* <p><span>Pre Discount Price: </span><span>T-Shart</span></p> */}
                    <p>
                        {/* <span>New Discount Price: </span> */}
                        <span><input name="discount_price" value={formData.discount_price} onChange={handleChange}/></span>
                    </p>
                </div>

                <div>
                    <h3>Quentity</h3>
                    {/* <p><span>Pre Quentity: </span><span>T-Shart</span></p> */}
                    <p>
                        {/* <span>New Quentity: </span> */}
                        <span><input name="quantity" value={formData.quantity} onChange={handleChange}/></span>
                    </p>
                </div>

                <div>
                    <h3>Desc</h3>
                    {/* <p><span>Pre Desc: </span><span>T-Shart</span></p> */}
                    <p className='desc'>
                        {/* <span>New Desc: </span> */}
                        <span><textarea name='desc' value={formData.desc} onChange={handleChange}></textarea></span>
                    </p>
                </div>

                <div>
                    <h3>Size</h3>
                    {/* <p><span>Pre Size: </span><span>T-Shart</span></p> */}
                    <div>
                        {/* <span>New Size: </span> */}
                        <span>
                            <p><input type='checkbox' value='M'  onChange={handleCheckboxChange}/><label>M</label></p>
                            <p><input type='checkbox' value='L'  onChange={handleCheckboxChange}/><label>L</label></p>
                            <p><input type='checkbox' value='XL'  onChange={handleCheckboxChange}/><label>XL</label></p>
                            <p><input type='checkbox' value='XXL'  onChange={handleCheckboxChange}/><label>XXL</label></p>
                            <p><input type='checkbox' value='XXXL'  onChange={handleCheckboxChange}/><label>XXXL</label></p>

                        </span>
                    </div>
                </div>
            </div>

            <div className='admin_mdress_post_submit_btn'>
                <h3 onClick={postData}>Submit</h3>
            </div>
        </div>
    </div>
    </AdminLayout>
  )
}

export default AdminMDressPost