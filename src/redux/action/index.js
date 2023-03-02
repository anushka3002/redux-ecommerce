// for adding items in cart
export const addCart = (product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}


// for adding price
export const addPrice = (product)=>{
    return{
        type:"ADDPRICE",
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

// for removing items from cart
export const emptyCart = (product)=>{
    return{
        type:"DELETEITEM",
    }
}

// for login signup identification
export const loginDetect = ()=>{
    return{
        type:"LOGINDETECT",
        // payload:product
    }
}