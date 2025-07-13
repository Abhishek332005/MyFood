
// import React from "react";
// import { useCart } from "../context/CartContext";
// import UserHeader from "../user/Userheader";
// import axios from "axios";

// export default function MyCart() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

//   const placeOrder = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:2008/api/place-order",
//         { items: cartItems },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       alert("✅ Order placed successfully!");
//       clearCart();
//     } catch (err) {
//       console.error("Order error:", err);
//       alert("❌ Failed to place order");
//     }
//   };

//   return (
//     <>
//       <UserHeader />

//       <div style={{ backgroundColor: "#f0f4c3", minHeight: "100vh", paddingTop: "90px", overflow: "hidden" }}>
//         <div className="container-fluid">
//           <div className="row" style={{ height: "calc(100vh - 90px)" }}>
//             {/* ✅ Left Fixed Panel */}
//             <div
//               className="col-md-3"
//               style={{
//                 position: "sticky",
//                 top: "90px",
//                 height: "100%",
//                 alignSelf: "flex-start",
//                 backgroundColor: "#f0f4c3",
//                 zIndex: 10,
//                 padding: "20px",
//                 borderRight: "2px solid #ccc",
//               }}
//             >
//               <h3 className="fw-bold text-success">🛒 My Cart</h3>
//               <hr />
//               <h5>Total: ₹{totalAmount}</h5>
//               <button className="btn btn-success mt-3" onClick={placeOrder}>
//                 ✅ Place Order
//               </button>
//             </div>

//             {/* ✅ Right Scrollable Items */}
//             <div
//               className="col-md-9"
//               style={{
//                 height: "calc(100vh - 90px)",
//                 overflowY: "auto",
//                 padding: "20px",
//               }}
//             >
//               {cartItems.length === 0 ? (
//                 <div className="text-center text-muted mt-5">
//                   <h5>Your cart is empty.</h5>
//                 </div>
//               ) : (
//                 <div className="row">
//                   {cartItems.map((item, index) => (
//                     <div className="col-md-4 mb-4" key={index}>
//                       <div className="card shadow-sm h-100">
//                         <img
//                           src={item.img}
//                           className="card-img-top"
//                           alt={item.name}
//                           style={{ height: "200px", objectFit: "cover" }}
//                         />
//                         <div className="card-body d-flex flex-column">
//                           <h5 className="card-title">{item.name}</h5>
//                           <p className="card-text text-muted">{item.description}</p>
//                           <p className="mb-1">Qty: <strong>{item.quantity}</strong></p>
//                           <p className="mb-1">Size: <strong>{item.size}</strong></p>
//                           <p className="fw-bold text-success">₹{item.totalPrice}</p>
//                           <button
//                             className="btn btn-sm btn-outline-danger mt-auto"
//                             onClick={() => removeFromCart(index)}
//                           >
//                             ❌ Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Cart context se functions aur data le rahe hain
import UserHeader from "../user/Userheader";       // ✅ Header component import kar rahe hain
import axios from "axios";                         // ✅ HTTP requests bhejne ke liye axios use ho raha

export default function MyCart() {
  // ✅ CartContext se cartItems, removeFromCart, clearCart functions le rahe hain
  const { cartItems, removeFromCart, clearCart } = useCart();

  // ✅ Total price calculate kar rahe hain cart ke sabhi items ka
  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // ✅ Order place karne ka function
  const placeOrder = async () => {
    const token = localStorage.getItem("token"); // 🔐 Login token le rahe hain localStorage se
    if (!token) {
      alert("Please login first"); // ❌ Agar login nahi to alert
      return;
    }

    try {
      // ✅ Order bhej rahe backend me POST request ke through
      const res = await axios.post(
        "http://localhost:2008/api/place-order",
        { items: cartItems }, // 🛒 Cart items ko bhej rahe hain
        {
          headers: { Authorization: `Bearer ${token}` }, // 🔐 Auth header ke sath
        }
      );
      alert("✅ Order placed successfully!");
      clearCart(); // ✅ Order hone ke baad cart clear kar rahe
    } catch (err) {
      console.error("Order error:", err);
      alert("❌ Failed to place order");
    }
  };

  return (
    <>
      <UserHeader /> {/* ✅ Header show kar rahe hain */}

      {/* ✅ Pure cart ka layout wrapper */}
      <div style={{ backgroundColor: "#f0f4c3", minHeight: "100vh", paddingTop: "90px", overflow: "hidden" }}>
        <div className="container-fluid">
          <div className="row" style={{ height: "calc(100vh - 90px)" }}>

            {/* ✅ Left panel jisme total amount aur place order button hai */}
            <div
              className="col-md-3"
              style={{
                position: "sticky",        // ✅ Sticky banaya scroll ke sath
                top: "90px",
                height: "100%",
                alignSelf: "flex-start",
                backgroundColor: "#f0f4c3",
                zIndex: 10,
                padding: "20px",
                borderRight: "2px solid #ccc",
              }}
            >
              <h3 className="fw-bold text-success">🛒 My Cart</h3>
              <hr />
              <h5>Total: ₹{totalAmount}</h5> {/* ✅ Cart ka total amount show ho raha */}
              <button className="btn btn-success mt-3" onClick={placeOrder}>
                ✅ Place Order
              </button>
            </div>

            {/* ✅ Right side me cart items dikh rahe hain */}
            <div
              className="col-md-9"
              style={{
                height: "calc(100vh - 90px)",
                overflowY: "auto",
                padding: "20px",
              }}
            >
              {/* ✅ Agar cart empty hai to message show hoga */}
              {cartItems.length === 0 ? (
                <div className="text-center text-muted mt-5">
                  <h5>Your cart is empty.</h5>
                </div>
              ) : (
                <div className="row">
                  {/* ✅ Sabhi cart items ko map karke UI me dikha rahe hain */}
                  {cartItems.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card shadow-sm h-100">
                        <img
                          src={item.img}
                          className="card-img-top"
                          alt={item.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text text-muted">{item.description}</p>
                          <p className="mb-1">Qty: <strong>{item.quantity}</strong></p> {/* ✅ Quantity */}
                          <p className="mb-1">Size: <strong>{item.size}</strong></p>     {/* ✅ Size */}
                          <p className="fw-bold text-success">₹{item.totalPrice}</p>      {/* ✅ Total price per item */}
                          <button
                            className="btn btn-sm btn-outline-danger mt-auto"
                            onClick={() => removeFromCart(index)} // ❌ Item remove karne ka function
                          >
                            ❌ Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
