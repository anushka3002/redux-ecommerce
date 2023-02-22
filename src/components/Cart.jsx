import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart,deleteCart } from "../redux/action/index.js"

const Cart = () => {
    const state = useSelector((state)=>state.handleCart)
    const dispatch= useDispatch()
    const handleAdd = (product)=>{
        dispatch(addCart(product))
    }
    const handleDel = (product)=>{
        dispatch(deleteCart(product))
    }
  return (
    <div className=''>
      <div>
        {state?.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4 outline-none">
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
        })}
        </div>
        {/* <div className='w-25'>asdf</div> */}
    </div>
  )
}

export default Cart