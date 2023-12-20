import React from 'react'
import './payment.css'
import img from '../../Asset/1.jpg'
import Navber from '../../Component/Layout/Navber/Navber'

const loadRazorpay =(src)=> {
  return new Promise ((resolve)=>{
    const script = document.createElement('script')
    script.src = src //'https://checkout.razorpay.com/v1/checkout.js'
    document.body.appendChild(script)
    script.onload = ()=>{
      resolve(true)
    }
    script.onerror = ()=>{
      resolve(false)
    }
  })
 

}



function Payment() {

  const displayRazorpay =async ()=>{
    const res =  await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert('ResorPay SDK Failed To Load')
    }


    var options = {
      "key": "rzp_test_AAq6cyMxUI9MLk", //Test // Enter the Key ID generated from the Dashboard
      "amount": "1000",
      "currency": "INR",
      "description": "Acme Corp",
      "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      "prefill":
      {
        "email": "gaurav.kumar@example.com",
        "contact": +917076103394,
      },
      config: {
        display: {
          blocks: {
            utib: { //name for Axis block
              name: "Pay using Axis Bank",
              instruments: [
                {
                  method: "card",
                  issuers: ["UTIB"]
                },
                {
                  method: "netbanking",
                  banks: ["UTIB"]
                },
              ]
            },
            other: { //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  // issuers: ["ICIC"]
                },
                {
                  method: 'netbanking',
                },
                {
                  method: "upi"
                },
                {
                  method: "wallet"
                }
              ]
            }
          },
          hide: [
            
          ],
          sequence: ["block.utib", "block.other"],
          preferences: {
            show_default_blocks: false // Should Checkout show its default blocks?
          }
        }
      },
      "handler": function (response) {
        alert(response.razorpay_payment_id);
        console.log(response);
      },
      "modal": {
        "ondismiss": function () {
          // if (confirm("Are you sure, you want to close the form?")) {
            // txt = "You pressed OK!";
            // console.log("Checkout form closed by the user");
          // } else {
            // txt = "You pressed Cancel!";
            // console.log("Complete the Payment")
          // }
        }
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open()
    console.log(rzp1);

  }

  

  return (
    <>
        <Navber/>

<div className='payment_display'>
<div className='payment'>
        <div>
            <h3>Address</h3>
            <div className='payment_address'>

                <p>hfsdjgjdgfs</p>
                <p>Mobile No: </p>
                <p>Pin: </p>
            </div>
            <div className='payment_address_btn'>
                <p>Change Address Details</p>
                <p>Enter Address Details</p>
            </div>
        </div>



        <div>
            <h3>Items</h3>

            <div className='payment_cart_items'>
              <div>

                <div className='payment_cart_items_card_name'>
                  <h3>Dress</h3>
                  <h4><span>$100</span><span className='payment_cart_items_card_price'><s>$200</s></span></h4>
                  <p>Cotton</p>

                  <div className='payment_cart_items_card_dropdown'>
                    <div>
                      <span>Size:</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    
                    <div>
                      <span>Qntity:</span>

                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>

                  <div className='payment_cart_items_card_btn'>
                      <h5>Remove</h5>
                  </div>
                </div>

                <div>
                  <img src={img}/>
                </div>
                
              </div>
              

              <div>

                <div className='payment_cart_items_card_name'>
                  <h3>Dress</h3>
                  <h4><span>$100</span><span className='payment_cart_items_card_price'><s>$200</s></span></h4>
                  <p>Cotton</p>

                  <div className='payment_cart_items_card_dropdown'>
                    <div>
                      <span>Size:</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    
                    <div>
                      <span>Qntity:</span>

                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>

                  <div className='payment_cart_items_card_btn'>
                      <h5>Remove</h5>
                  </div>
                </div>

                <div>
                  <img src={img}/>
                </div>
                
              </div>


              <div>

                <div className='payment_cart_items_card_name'>
                  <h3>Dress</h3>
                  <h4><span>$100</span><span className='payment_cart_items_card_price'><s>$200</s></span></h4>
                  <p>Cotton</p>

                  <div className='payment_cart_items_card_dropdown'>
                    <div>
                      <span>Size:</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    
                    <div>
                      <span>Qntity:</span>

                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>

                  <div className='payment_cart_items_card_btn'>
                      <h5>Remove</h5>
                  </div>
                </div>

                <div>
                  <img src={img}/>
                </div>
                
              </div>


              <div>

                <div className='payment_cart_items_card_name'>
                  <h3>Dress</h3>
                  <h4><span>$100</span><span className='payment_cart_items_card_price'><s>$200</s></span></h4>
                  <p>Cotton</p>

                  <div className='payment_cart_items_card_dropdown'>
                    <div>
                      <span>Size:</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                    
                    <div>
                      <span>Qntity:</span>

                      <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>

                  <div className='payment_cart_items_card_btn'>
                      <h5>Remove</h5>
                  </div>
                </div>

                <div>
                  <img src={img}/>
                </div>
                
              </div>
            </div>
        </div>


{/* 
        <div className='payment_total'>
            <p><span>Sub Total</span><span>100</span></p>
            <p><span>Delevary Charge</span><span>Free</span></p>
            <hr></hr>
            <h4><span>Total</span><span>100</span></h4>
            <div>
              <p onClick={displayRazorpay}>Make Payment</p>
            </div>
        </div> */}

        
    </div>

    <div>
    <div className='payment_total'>
            <p><span>Sub Total</span><span>100</span></p>
            <p><span>Delevary Charge</span><span>Free</span></p>
            <hr></hr>
            <h4><span>Total</span><span>100</span></h4>
            <div>
              <p onClick={displayRazorpay}>Make Payment</p>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Payment