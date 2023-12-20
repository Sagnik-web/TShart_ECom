import React, { useState } from 'react'
import img2 from '../../../Asset/2.jpg'
import './MaleDress.css'
import MaleDressCard from './DressCard/MaleDressCard'
import Navber from '../../../Component/Layout/Navber/Navber'
import Footer from '../../../Component/Foolter/Footer'
import Filter from '../../../Component/Flter/Filter'
import API from '../../../API/API'
import { male_dress_url } from '../../../API/BasicURL'


function MaleDress() {

    const [dressData,setDressData] = useState([])

     const category = [
        {
            image:img2,
            category_name:"All"
        },
        {
            image:img2,
            category_name:"T-Shart"
        },
        {
            image:img2,
            category_name:"T-Shart"
        },{
            image:img2,
            category_name:"T-Shart"
        },{
            image:img2,
            category_name:"T-Shart"
        },{
            image:img2,
            category_name:"T-Shart"
        },{
            image:img2,
            category_name:"T-Shart"
        },{
            image:img2,
            category_name:"T-Shart"
        },{
            image:img2,
            category_name:"T-Shart"
        }
    ]


    const [itemShow, setItemShow] = useState(true)

    const categoryItemFun = (categoryName) =>{
        setItemShow(false)
        console.log(categoryName)
        if(categoryName == 'All'){
            getMaleDress(categoryName)
        }
    }

    const getMaleDress =async(query)=>{
        await API.get(`${male_dress_url}`)
            .then(async res=>{
                await setDressData(res.data.dress)
                // await console.log(res.data.dress);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    
    // console.log(dressData);
  return (
  <>
    {itemShow ?      
        <div className='male_dress_category'>
            <div>
                {category.map(el=>
                <div className='male_dress_category_card' onClick={()=>categoryItemFun(el.category_name)}> 
                    <div><img src={el.image}/></div>
                    <p>{el.category_name}</p>
                </div>)}
                
            </div>
        </div>:null}


        <Navber/>

    <div>
      <div className='MaleDress'>

<div className='MaleDress_banner'>
    <div>
        <img src={img2}/>
    </div>
    <div>
        <h3>Male Dress</h3>
    </div>                
</div>



<div className='MaleDress_content'>
    <div className='MaleDress_filter'>
        <p>Filter:</p>
        <p><span>Sort by:</span> <span>8 products</span></p>
    </div>

    
   
    <div className='MaleDress_card_rapper'>
        <Filter/>
        <div className='MaleDress_card_rapper_second'>
            {dressData.map(el=>
                <MaleDressCard data={el} />

            )}
           

        </div>
    </div>
</div>


</div>
    </div>

        <Footer/>
    </>
  )
}

export default MaleDress