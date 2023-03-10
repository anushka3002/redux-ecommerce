import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart,deleteCart, emptyCart } from "../redux/action/index.js"
// this is cart
const Cart = () => {
    let sum= 0
    const state = useSelector((state)=>state.handleCart)
    const data = JSON.parse(localStorage.getItem("cart products")) || []
    const login = JSON.parse(localStorage.getItem("logged user")) || []
    const dispatch= useDispatch()
    const loginState = useSelector((shouldLogin)=>shouldLogin.loginDetect)
    const handleAdd = (product)=>{
        dispatch(addCart(product))
    }
    const handleDel = (product)=>{
        dispatch(deleteCart(product))
    }

    const totalPrice = state.map((e)=>{
      return e.price * e.qty
    })
      
    for(let i=0;i<totalPrice.length;i++){
      sum=sum+totalPrice[i]
    }
    localStorage.setItem("total price",JSON.stringify(sum))
    
  return (
    <div className=''>
      <div>
        {state.length>0 ? state?.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4 outline-none m-4 mx-auto">
                <div className="card h-100 text-center p-4 d-flex flex-row" style={{display:"flex"}} key={product.id}>
                  <div>
                <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text lead fw-bold">
                    ${product.price}
                  </p>
                </div>
                </div>
                 <div className='col-md-4'>
                    <p className='lead fw-bold'>
                        {product.qty} X ${product.price} =${product.qty * product.price}
                    </p>
                    <button onClick={()=>handleDel(product)} className='btn btn-outline-dark me-4'>
                        <i className='fa fa-minus'></i>
                    </button>
                    <button onClick={()=>handleAdd(product)} className='btn btn-outline-dark me-4'>
                        <i className='fa fa-plus'></i>
                    </button>
                 </div>
                </div>
              </div>
            </>
          );
        }): <div style={{height: "400px"}} className='my-auto flex-col flex justify-content-center align-middle text-center'><h3 className='align-middle'>0 items in the cart</h3></div>}
        </div>
       {state.length>0 && <div className='mx-auto d-flex m-2'>
        <button className='btn btn-dark mx-auto text-center justify-content-center py-2 px-3'>Total price : ${sum}</button>
        </div>}
        {state.length > 0 && <div className='mx-auto d-flex m-2'>
        <NavLink to={login.length?"/checkout":"/login"} className='btn btn-dark mx-auto text-center justify-content-center py-2 px-3'>Proceed for checkout</NavLink>
        </div>}
    </div>
  )
}

export default Cart