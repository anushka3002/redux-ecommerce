const flag = false;

const loginDetect = (state=flag,action) =>{
    switch(action.type){
        case "LOGINDETECT":
            localStorage.setItem("login detect",JSON.stringify(true))
            return state=true
        default:
            return state
    }
}

export default loginDetect