
// ✅ React ke necessary hooks import kar rahe hain
import React, { createContext, useContext, useState } from "react";

// ✅ Cart context banaya jisse data share ho sake pure app me
const CartContext = createContext();

// ✅ useCart naam ka custom hook banaya jisse hum context ko kahin bhi use kar sake
export const useCart = () => useContext(CartContext);

// ✅ Provider component banaya jisse cart ka data children components ko mile
export const CartProvider = ({ children }) => {
  // 🛒 cartItems naam ka state banaya jisme cart ke sabhi items rahenge
  const [cartItems, setCartItems] = useState([]);

  // ✅ Cart me item add karne ka function
  const addToCart = (item, quantity, size) => {
    // ✅ Agar size full hai to price double, warna original price
    const price = size === "full" ? item.price * 2 : item.price;

    // ✅ Check kar rahe ki kya same item aur same size already cart me hai
    const existingIndex = cartItems.findIndex(
      (cart) => cart._id === item._id && cart.size === size
    );

    // ✅ Agar item already cart me hai to uski quantity aur price update karo
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems]; // cart ka copy banaya
      updatedCart[existingIndex].quantity += quantity; // quantity badhayi
      updatedCart[existingIndex].totalPrice += price * quantity; // total price update
      setCartItems(updatedCart); // updated cart ko set kiya
    } else {
      // ✅ Agar item naye hai to cart me push karo
      setCartItems([
        ...cartItems, // existing items
        {
          ...item,           // item ke saare details
          quantity,          // selected quantity
          size,              // selected size
          totalPrice: price * quantity, // total price calculate karke
        },
      ]);
    }
  };

  // ✅ Cart se item hatane ka function
  const removeFromCart = (id) => {
    // ✅ filter karke sirf wahi items rakho jiska id match nahi karta
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  // ✅ Provider ke through sabhi children components ko cart ka data aur functions de rahe
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
