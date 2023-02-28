const cart = []

const handleCart = (state=cart, action) =>{
    const product = action.payload;
    switch(action.type){
        case "ADDITEM":
            // Check if product already exists
            const exist = state.find((x)=>x.id==product.id)
            if(exist){
                return state.map((x)=>
                    x.id ==product.id ? {...x,qty:x.qty+1} : x
                )
            }
            else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1
                    }
                ]
            }

            case "DELETEITEM":
                const exist1 = state.find((x)=>x.id==product.id)
                if(exist1.qty===1){
                    return state.filter((x)=>x.id!==exist1.id)
                }
                else{
                    return state.map((x)=>
                        x.id ==product.id ? {...x,qty:x.qty-1} : x
                    )
                }

            case "ADDPRICE":
                const sum = product.price
                sum=sum+product.price
                return sum

            default:
                return state
    }
}

export default handleCart