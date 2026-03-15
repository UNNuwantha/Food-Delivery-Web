import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]= useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [food_list,setFoodList] = useState([])


    const addToCart = async (itemId) => {
        if(token){
            const response = await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}});
            if(response.data.success){
                setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1}))
            }
        }
    }

    const removeFromCart = async (itemId) => {
        if(token){
            const response = await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}});
            if(response.data.success){
                setCartItems((prev)=>{
                    const newCart = {...prev};
                    if(newCart[itemId] > 1){
                        newCart[itemId] -= 1;
                    } else {
                        delete newCart[itemId];
                    }
                    return newCart;
                })
            }
        }
    }

   const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    let itemInfo = food_list.find((product)=> product._id === item);
                totalAmount += cartItems[item] * itemInfo.price;
                }           
            }
            return totalAmount;
        }

        const fetchFoodList = async () =>{
            const response = await axios.get(url+"/api/food/list");
            setFoodList(response.data.data)
        }
     
        const loadCartData = async (token) => {
            try{
                const response = await axios.get(url+"/api/cart/get", {headers:{token}});
                setCartItems(response.data.cartData);
            } catch(error){
                console.log("Error loading cart:", error);
            }
        }
     
        useEffect(()=>{
            async function loadData() {
             await fetchFoodList();
           if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
              }           
           }
              loadData();
        },[])

        useEffect(()=>{
            if(token){
                loadCartData(token);
            }
        },[token])
        

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;