// for adding items in cart
export const addCart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}


// for deleting items from cart
export const deleteCart = (product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}