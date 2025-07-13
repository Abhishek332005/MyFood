
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserHeader from "../user/Userheader";
import { useCart } from "../context/CartContext"; // 🛒 Cart context ka hook import kiya gaya hai

export default function FastFood() {
  // 🍲 Food items ko rakhne ke liye state
  const [foodItems, setFoodItems] = useState([]);
  const { addToCart } = useCart(); // 🛒 Cart me item add karne ke liye function
  const [quantities, setQuantities] = useState({}); // 🧮 Quantity state
  const [sizes, setSizes] = useState({}); // 📏 Size state
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search input ka state

  // 🌐 Data fetch karna jab component mount ho
  useEffect(() => {
    axios.get("http://localhost:2008/api/food")
      .then(res => setFoodItems(res.data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  // 🔍 Filter items by search input
  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🧮 Quantity change handler
  const handleQtyChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) });
  };

  // 📏 Size change handler
  const handleSizeChange = (id, value) => {
    setSizes({ ...sizes, [id]: value });
  };

  return (
    <>
      {/* 👤 Header */}
      <UserHeader />

      {/* 🔳 Page Background */}
      <div style={{ paddingTop: "90px", backgroundColor: "#f0f4c3", height: "100vh", overflow: "hidden" }}>
        <div className="container-fluid">
          <div className="row" style={{ height: "calc(100vh - 90px)" }}>
            
            {/* 📋 Left Sidebar */}
            <div className="col-md-3" style={{ position: "sticky", top: "10px", alignSelf: "flex-start", backgroundColor: "#f0f4c3", zIndex: 10 }}>
              <h2 className="ps-2 fw-bold">🍽 Fast Food Menu</h2>

              {/* 🔍 Search Box */}
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Search food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* 📦 Right side me filtered items */}
            <div className="col-md-9" style={{ height: "calc(100vh - 90px)", overflowY: "auto", paddingRight: "15px" }}>
              <div className="row">

                {/* 🧾 Filtered food items loop */}
                {filteredItems.map((item) => {
                  const qty = quantities[item._id] || 1;
                  const size = sizes[item._id] || "half";

                  return (
                    <div className="col-md-4 mb-4" key={item._id}>
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

                          {/* 🔘 Quantity & Size */}
                          <div className="d-flex justify-content-between mb-2">
                            <select
                              className="form-select w-50 me-1"
                              value={qty}
                              onChange={(e) => handleQtyChange(item._id, e.target.value)}
                            >
                              {[1, 2, 3, 4, 5].map((q) => <option key={q} value={q}>{q}</option>)}
                            </select>

                            <select
                              className="form-select w-50 ms-1"
                              value={size}
                              onChange={(e) => handleSizeChange(item._id, e.target.value)}
                            >
                              <option value="half">Half</option>
                              <option value="full">Full</option>
                            </select>
                          </div>

                          {/* 💰 Price and Category */}
                          <div className="mt-auto">
                            <p className="mb-1 fw-bold text-success">
                              ₹{size === "full" ? item.price * 2 : item.price}
                            </p>
                            <span className="badge bg-primary">{item.category}</span>
                          </div>

                          {/* 🛒 Add to Cart */}
                          <button
                            className="btn btn-sm btn-success mt-3"
                            onClick={() => addToCart(item, qty, size)}
                          >
                            Add to Cart 🛒
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* ⚠️ No match found */}
                {filteredItems.length === 0 && (
                  <div className="text-center text-muted mt-5">
                    <h5>No matching food items found!</h5>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
