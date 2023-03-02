import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { emptyCart } from "../redux/action/index.js"

const Payment = () => {
  const [visible,setVisible] = useState(false)
  const dispatch= useDispatch()
  const handleEmpty = ()=>{
    dispatch(emptyCart())
}

  return (
    <div className='col-md-3 mx-auto mt-4 p-2'>
        <div className='text-center mt-4'>Payment Via</div>
        <div className='mx-auto'>
        <button onClick={()=>setVisible(true)} className="btn btn-secondary  w-full mx-auto text-center justify-content-center py-2 px-3">
            UPI ID
          </button>
          {visible && <input type="text" class="form-control mt-2" />}
          <p className='text-center'>or</p>
          <button onClick={()=>setVisible(false)} className="btn btn-secondary  w-full mx-auto text-center justify-content-center py-2 px-3">
            Card
          </button>

            {!visible && <input type="number" class="form-control mt-2" />}
        </div>
        <NavLink to="/thankyou" onClick={()=>{setVisible(true);handleEmpty()}} className="btn btn-dark  w-full mx-auto text-center justify-content-center py-2 px-3 mt-4">
            Pay
          </NavLink>
    </div>
  )
}

export default Payment