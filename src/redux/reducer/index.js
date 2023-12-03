import { combineReducers } from "redux";

const cart=[];


const handlecart=(state=cart,action)=>{
    // console.log(state,action)
    
    const product=action.data

    switch(action.type){

        case "ADDITEM":
            return [...state]
        case "REMOVEITEM":
            return [...state]
        default:
            return state
    }
}

const rootReducers=combineReducers({
    handlecart,
})



export default rootReducers