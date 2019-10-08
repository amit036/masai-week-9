import React from "react";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div>
    <div>
      <div style={{ marginTop: "100px", float: "left" }}>
        <img src="https://entrackr.com/wp-content/uploads/2019/05/scooter-rental.jpg" style={{ width: "500px", height: "600px", marginLeft: "200px" }}></img>
      </div>
      <div style={{ marginTop: "100px", marginLeft: "80px", float: "left", width: "700px" }}>
        <h5 style={{ fontWeight: "bold", marginTop: "100px" }}>THE BRAND</h5>
        <p>
          Rent & Go is a ‘modern nostalgic’ jewelry brand. Each piece is conceptualized and
          hand-crafted with love by a small team in Bengaluru, led by founder Amit Kumar.
          Born in 2019, Rent & Go draws inspiration from global treasures and found curiosities that
          translate into wearable, contemporary silhouettes. 
      </p>
        <h5 style={{ fontWeight: "bold", marginTop: "100px" }}>THE IDEA</h5>
        <p>
          Born and raised in Bengaluru, Corrine Anestopoulos is inspired by contemporary design and
          exotic heirlooms from around the world. Behind Rent & Go for last 2 years, Amit has become
           an inspirational entrepreneur, mentor and colleague to many creative businesses in North America.
           Amit graduated in 2019 with a Bachelor of Technology as well as design from Delhi University.
           Her artistry combines attention to detail, assorted materials and symbolic design elements.
      </p>
      </div>
      </div>
      <div style={{clear:"both"}} >
      <Footer />
      </div>
    </div>
  );
};
export default Contact;