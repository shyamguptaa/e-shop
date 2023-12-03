// add items

export const addItem=(product)=>{
    console.log(product)
    return{
        type:"ADDITEM",
        data:product
    }
}
// remove items

export const removeItem=(product)=>{
    return{
        type:"REMOVEITEM",
        data:product
    }
}