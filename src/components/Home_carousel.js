import React from 'react'
import { Link } from "react-router-dom";
const Home_carousel=()=>{
    return(
 <div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: "800px"}}>
    <div class="carousel-item active">
      <img style={{height: "800px"}} class="d-block w-100" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/og_city_home-49f86ab1b6f03e6ac461849bf5e5aabf9d1a28660ae121e99bde93444e38b973.jpg" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
     <Link to="/rent"><button className="btn btn-primary ">BOOK </button></Link>
      <Link to="/trail"><button className="btn btn-primary ml-4">FREE 1 DAY TRAIL</button></Link>
     </div>
   </div>
    <div class="carousel-item">
      <img style={{height: "800px"}} class="d-block w-100" src="https://cdn4.vectorstock.com/i/1000x1000/02/33/man-giving-woman-keys-of-red-car-present-vector-22710233.jpg" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
     <Link to="/signup"> <button className="btn btn-primary">Sign Up </button></Link>
      
     </div>
    </div>
    <div class="carousel-item">
      <img  style={{height: "800px"}} class="d-block w-100" src="https://entrackr.com/wp-content/uploads/2019/05/scooter-rental.jpg" alt="Third slide" />
      <div class="carousel-caption d-none d-md-block">
      <Link to="/rent"><button className="btn btn-danger">BOOK YOUR FIRST RIDE</button></Link>
     </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}
export default Home_carousel;