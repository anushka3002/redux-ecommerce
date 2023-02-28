import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { addCart } from "../redux/action/index.js"
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams()
    const cart=JSON.parse(localStorage.getItem("cart products")) || []

    useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.clone().json());
        setLoading(false);
    };
    getProducts();
  }, []);

  const dispatch = useDispatch()
  const addProduct = (product) =>{
    dispatch(addCart(product))
    cart.push(product)
    localStorage.setItem("cart products",JSON.stringify(cart))
  }

  const Loading=()=>{
    return(
        <>
        <div className='col-md-6'>
          <Skeleton height={400}/>
        </div>
        <div className='col-md-6' style={{lineHeight:2}}>
        <Skeleton height={50} width={300}/>
        <Skeleton height={75}/>
        <Skeleton height={25} width={150}/>
        <Skeleton height={50}/>
        <Skeleton height={150}/>
        <div className='row-md-2' style={{display:"flex"}}>
        <Skeleton height={50} width={100}/>
        <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div></div>
        </>
    )
  }

  const ShowProduct = ()=>{
    return(
        <>
          <div className='col-md-6'>
            <img src={product.image} alt={product.title} height="400px" width="400px"></img>
          </div>  
          <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50'>{product.category}</h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead fw-bolder'>
              Rating {product.rating && product.rating.rate}
              <i className='fa fa-star'></i>
            </p>
            <h3 className='fw-bold display-6 my-4'>
              $ {product.price}
            </h3>
            <p className='lead'>{product.description}</p>
            <button onClick={()=>addProduct(product)} className="btn btn-outline-dark px-4 py-2">
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </NavLink>
          </div>
        </>
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-5'>
          {loading? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product