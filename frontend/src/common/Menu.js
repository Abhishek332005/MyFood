
import React from "react";
import Hero from "../home/Hero";

function Menu() {
  const menuItems = [
    { name: "Burger", image: "img/buger.jpg" },
    { name: "Pasta", image: "img/pasta.jpg" },
    { name: "Burger", image: "img/buger.jpg" },
    { name: "Drink", image: "img/chocolate_Drink.jpg" },
    { name: "Pizza", image: "img/pizza.jpg" },
    { name: "Hot Dog", image: "img/Hot_dog.jpg" },
    { name: "Juice", image: "img/juse.jpg" },
    { name: "Biryani", image: "img/biryani.webp" },
    { name: "Chocolate", image: "img/chocolate.jpg" },
    { name: "Ice Cream", image: "img/ice_cream.jpg" },
    { name: "Spanchi", image: "img/Spanchi.jpg" },
    { name: "Sandwich", image: "img/sandwich.jpg" },
  ];

  const styles = {
    menu: {
      padding: "40px",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "40px",
      marginTop:"50px"
    },
    span: {
      color: "orangered",
    },
    menuBox: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    card: {
      width: "280px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      position: "relative",
      backgroundColor: "#f9f9f9",
    },
    imageBox: {
      width: "100%",
      height: "180px",
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    smallCard: {
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "24px",
      color: "red",
    },
    info: {
      padding: "15px",
    },
    title: {
      fontSize: "22px",
      margin: "10px 0",
    },
    desc: {
      fontSize: "14px",
      color: "#444",
      marginBottom: "10px",
    },
    price: {
      fontSize: "18px",
      color: "#222",
      marginBottom: "10px",
    },
    stars: {
      color: "orange",
      marginBottom: "10px",
    },
    btn: {
      display: "inline-block",
      backgroundColor: "orangered",
      color: "#fff",
      padding: "10px 20px",
      textDecoration: "none",
      borderRadius: "5px",
    },
  };

  return (
<>
<Hero/>

    <div style={styles.menu} id="Menu">
      <h1 style={styles.heading}>
        Our <span style={styles.span}>Menu</span>
      </h1>

      <div style={styles.menuBox}>
        {menuItems.map((item, index) => (
          <div style={styles.card} key={index}>
            <div style={styles.imageBox}>
              <img src={item.image} alt={item.name} style={styles.img} />
            </div>

            <div style={styles.smallCard}>
              <i className="bx bxs-heart"></i>
            </div>

            <div style={styles.info}>
              <h2 style={styles.title}>{item.name}</h2>
              <p style={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h3 style={styles.price}>$20.00</h3>

              <div style={styles.stars}>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>

              <a href="#" style={styles.btn}>
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Menu;
