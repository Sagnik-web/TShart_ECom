import React, { useState } from 'react'
import './Filter.css'

function Filter() {
    const [categoryItem,setCategoryItem] = useState(false)
    const [sizesItem,setSizesItem] = useState(false)
    const [designItem,setDesignItem] = useState(false)
    const [fitItem,setFitItem] = useState(false)
    const [sleeveItem,setSleeveItem] = useState(false)
    const [neckItem,setNeckItem] = useState(false)

  return (
    <div className='filter'>
    <div>
        <h4>Filter</h4>
        <div>
            <hr></hr>

            <h2 onClick={()=>setCategoryItem(!categoryItem)}><span>Category</span><span>V</span></h2>
           { categoryItem ? 
           <><p>T-Shirt</p>
            <p>Boxer</p>
            <p>Vest</p>
            <p>Shirt</p>
            <p>Jeans</p>
            <p>Shorts</p>
            <p>Joggers</p>
            <p>Track Pant</p>
            <p>Pyjama</p>
            <p>Co-Ordinates</p>
            <p>Trousers</p>
            <p>Sweatshirt</p>
            <p>Hoodies</p>
            <p>Casual Pants</p>
            <p>Jacket</p>
            <p>Chino</p>
            <p>Kurta</p>
            <p>Sweater</p>
            <p>Tracksuit</p>
            <p>Brief</p>
            <p>Protective Outdoor Mask</p>
            <p>Sweatshirt & Jogger Set</p>
            <p>Cloth Mask</p>
            <p>Pant</p>
            <p>Denim</p>
            <p>Nehru Jacket</p>
            <p>Shirt & Shorts Set</p>
            <p>T-Shirt & Shorts Set</p>
            </> :null}
        </div>
        
        <div>
            <hr></hr>

            <h2 onClick={()=>setSizesItem(!sizesItem)}><span>Sizes</span><span>V</span></h2>
            {sizesItem ?<>
                <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>2XL</p>
            <p>3XL</p>
            <p>4XL</p>
            <p>5XL</p>
            <p>6XL</p>
            <p>28</p>
            <p>30</p>
            <p>32</p>
            <p>34</p>
            <p>36</p>
            <p>38</p>
            <p>40</p>
            <p>42</p>
            <p>44</p>
            <p>46</p>
            <p>48</p>
            <p>50</p>
            <p>52</p>
            <p>54</p>
            <p>56</p></>:null}
        </div>

        <div>
            <hr></hr>

            <h2 onClick={()=>setDesignItem(!designItem)}><span>Design</span><span>V</span></h2>
            {designItem ? <>
            <p>Graphic Print</p>
            <p>Solid</p>
            <p>Printed</p>
            <p>Typography</p>
            <p>Aop</p>
            <p>Washed</p>
            <p>Color Block</p>
            <p>Checked</p>
            <p>Striped</p>
            <p>Self Design</p>
            <p>Tie & Dye</p>
            <p>Abstract</p>
            <p>Floral Print</p>
            <p>Camouflage</p>
            <p>Geometric Print</p>
            <p>Ethnic Motifs</p>
            <p>Paisley</p>
            <p>Ombre</p>
            <p>Animal Print</p>
            <p>Polka Print</p>
            <p>Textured</p>
            <p>Marble Print</p>
            <p>Chevron/Zig Zag</p>
            <p>Cut & Sew</p>
            <p>Embroidered</p>
            <p>Ethnic Motif</p>
            <p>Polka Dots</p>
            </>:null}
        </div>

        <div>
            <hr></hr>
            
            <h2 onClick={()=>setFitItem(!fitItem)}><span>Fit</span><span>V</span></h2>
            {fitItem ? <>
            <p>Regular Fit</p>
            <p>Oversized Fit</p>
            <p>Slim Fit</p>
            <p>Relaxed Fit</p>
            <p>Super Loose Fit</p>
            <p>Boxy Fit</p>
            <p>Skinny Fit</p>
            <p>Loose Comfort Fit</p>
            <p>Straight Fit</p>
            <p>Square Fit</p>
            <p>Monster Fit</p>
            <p>Loose Fit</p>
            <p>Tapered Fit</p></>:null}
        </div>

        <div>
            <hr></hr>

            <h2 onClick={()=>setSleeveItem(!sleeveItem)}><span>Sleeve</span><span>V</span></h2>
            {sleeveItem ? <>
            <p>Half Sleeve</p>
            <p>Full Sleeve</p>
            <p>Sleeveless</p>
            <p>Raglan Sleeve</p>
            <p>Drop Shoulder</p></>:null}
        </div>

        <div>
            <hr></hr>
            <h2 onClick={()=>setNeckItem(!neckItem)}><span>Neck</span><span>V</span></h2>
            {neckItem ? <>
            <p>Round Neck</p>
            <p>Spread Collar</p>
            <p>Hooded</p>
            <p>Mandarin Collar</p>
            <p>Collar</p>
            <p>Lapel Collar</p>
            <p>Polo</p>
            <p>Henley Neck</p>
            <p>Stand Collar</p>
            <p>V-Neck</p>
            <p>High Neck</p>
            <p>Scoop Neck</p>
            <p>Peter Pan</p>
            <p>Turtle Neck</p>
            <p>Resort Collar</p></>:null}
        </div>

    </div>
</div>
  )
}

export default Filter