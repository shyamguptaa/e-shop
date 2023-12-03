// add items

export const addItem=(product)=>{
    console.log(product,"Add Item called ")
    return{
        type:"ADDITEM",
        data:product
    }
}
// remove items

export const removeItem=(product)=>{
    console.log(product,"remove Item called ")
    return{
        type:"REMOVEITEM",
        data:product
    }
}