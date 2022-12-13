const addToLocalStorage = (id)=>{

    let shoppingCart = checkCart();
    
    const quantity = shoppingCart[id];
    if(quantity){

        const newQuantity = quantity+1;
        shoppingCart[id] = newQuantity;
       
    }
    else{
         shoppingCart[id] = 1;
    }
    localStorage.setItem("shopping-cart" , JSON.stringify(shoppingCart));
}



const removeFromDb = (id) =>{

    let shoppingCart = checkCart();

    if(id in shoppingCart){
        delete shoppingCart[id];
    }

    localStorage.setItem("shopping-cart" , JSON.stringify(shoppingCart));
}




const checkCart = ()=>{
    let shoppingCart;
    
    const storedCart = localStorage.getItem("shopping-cart");

    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }

    return shoppingCart;
}


const deleteShoppingCart = ()=>{
    localStorage.removeItem("shopping-cart");
}




export {
    addToLocalStorage , 
    removeFromDb , 
    deleteShoppingCart , 
    checkCart
};