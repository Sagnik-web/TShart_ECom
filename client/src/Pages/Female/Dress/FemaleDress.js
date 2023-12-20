import React,{useState} from 'react'

import img2 from '../../../Asset/2.jpg'
import './FemaleDress.css'
import FemaleDressCard from './DressCard/FemaleDressCard'
import Navber from '../../../Component/Layout/Navber/Navber'
import Footer from '../../../Component/Foolter/Footer'
import Filter from '../../../Component/Flter/Filter'


function FemaleDress() {
    const category = [
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
    }


  return (
    <>
        {itemShow ?      
        <div className='female_dress_category'>
            <div>
                {category.map(el=>
                <div className='female_dress_category_card' onClick={()=>categoryItemFun(el.category_name)}> 
                    <div><img src={el.image}/></div>
                    <p>{el.category_name}</p>
                </div>)}
                
            </div>
        </div>:null}



        <Navber/>

        <div>
      <div className='femaleDress'>

<div className='femaleDress_banner'>
    <div>
        <img src={img2}/>
    </div>
    <div>
        <h3>female Dress</h3>
    </div>                
</div>



<div className='femaleDress_content'>
    <div className='femaleDress_filter'>
        <p>Filter:</p>
        <p><span>Sort by:</span> <span>8 products</span></p>
    </div>

    
   
    <div className='femaleDress_card_rapper'>
        <Filter/>
        <div className='femaleDress_card_rapper_second'>
            <FemaleDressCard/>
            <FemaleDressCard/>
            <FemaleDressCard/>
            <FemaleDressCard/>
            <FemaleDressCard/>
            <FemaleDressCard/>
            <FemaleDressCard/>

        </div>
    </div>
</div>


</div>
    </div>

        <Footer/>
    </>
  )
}

export default FemaleDress