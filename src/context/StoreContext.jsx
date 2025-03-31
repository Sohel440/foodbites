import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Use 0 if undefined
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // Prevent errors

            if (prev[itemId] === 1) {
                const newCart = { ...prev };
                delete newCart[itemId]; // Remove item from cart when count reaches zero
                return newCart;
            }

            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = food_list.find((product) => product._id.toString() === item);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };
    useEffect(()=>{
        console.log(cartItems);
        
    }, [cartItems])
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
