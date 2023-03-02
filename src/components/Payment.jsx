import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { emptyCart } from "../redux/action/index.js"
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [visible,setVisible] = useState(false)
  const [error,setError] = useState("")
  const [errorUPI,setErrorUPI] = useState("")
  const [upi,setUPI] = useState()
  const [number,setNumber] = useState()
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const handleEmpty = ()=>{
    dispatch(emptyCart())
}
console.log(number)
const handlePay=()=>{
  console.log("handlepay")
  console.log(number,"num")
  if(number.length===13){
    setError("")
    console.log("error")
    navigate("/thankyou");
  }
  else{
    setError("Please fill valid input")
    console.log("no errors")
  }
}

const handleUPI=()=>{
  if(upi.length>5){
    setErrorUPI("")
    navigate("/thankyou");
  }
  else{
    setErrorUPI("Invalid UPI")
  }
}

const handlePayClick = ()=>{
  !visible && handlePay()
  visible && handleUPI()
  // setVisible(true);
  handleEmpty();

}


  return (
    <div className='col-md-3 mx-auto mt-4 p-2'>
        <div className='text-center mt-4'>Payment Via</div>
        <div className='mx-auto'>
        <button onClick={()=>setVisible(true)} className="btn btn-secondary  w-full mx-auto text-center justify-content-center py-2 px-3">
            UPI ID
          </button>
          {visible && <input onChange={(e)=>setUPI(e.target.value)} type="text" class="form-control mt-2" />}
          <p className='text-sm text-danger'>{errorUPI}</p>
          <p className='text-center'>or</p>
          <button onClick={()=>setVisible(false)} className="btn btn-secondary  w-full mx-auto text-center justify-content-center py-2 px-3">
            Card
          </button>

            {!visible && <input onChange={(e)=>setNumber(e.target.value)} type="number" class="form-control mt-2" />}
            <p className='text-sm text-danger'>{error}</p>
        </div>
        <button onClick={handlePayClick} className="btn btn-dark  w-full mx-auto text-center justify-content-center py-2 px-3 mt-4">
            Pay
          </button>
    </div>
  )
}

export default Payment