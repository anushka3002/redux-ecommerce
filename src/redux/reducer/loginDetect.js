const flag = false;

const loginDetect = (state=flag,action) =>{
    switch(action.type){
        case "LOGINDETECT":
            return state=true
        default:
            return state
    }
}

export default loginDetect