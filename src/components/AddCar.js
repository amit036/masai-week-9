import React, { Component } from 'react'
// let mygolbal=[];

// var b=localStorage.getItem("carDetails");
// var a=JSON.parse(b);
// if(a===null)
// {

// }
// else
// {
//   mygolbal = [...a];
// }
import { addCar } from "./CarAction";

import { connect } from "react-redux";
 class AddCar extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          carName:'',
          carModel:'',
          imgUrl:'',
          rent:'',
          location:''
       }
     }
     
     handleChange=(event)=>{
        event.preventDefault();
         this.setState({[event.target.name]:event.target.value});
        // console.log(this.state.carName,this.state.imgUrl,this.state.rent);
         

     }
     handleSubmit=(event)=>{
        event.preventDefault();
        let obj = {
          carName: this.state.carName,
          carModel: this.state.carModel,
          carImgUrl: this.state.imgUrl,
          carRent: this.state.rent,
          carLocation: this.state.location
        };
        this.props.add(obj);
       // mygolbal.push(this.state)
       // localStorage.setItem("carDetails",JSON.stringify(mygolbal));
       // this.props.history.push('/addSuccess');
     }
  render() {
    return (
      <div style={{marginLeft:"700px",marginTop:"120px"}}>
          <h1 className="ml-5 mb-5">ADD CAR</h1> 
        <form onSubmit={this.handleSubmit}>
        <h5>Car Name</h5>
        <input type="text" className="form-control w-25 mb-4" name="carName" value={this.state.carName} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Car Model</h5>
        <input type="text" className="form-control w-25 mb-4" name="carModel" value={this.state.carModel} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Add Image Link</h5>
        <input type="text" className="form-control w-25 mb-4" name="imgUrl" value={this.state.imgUrl} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Add Rent/Km</h5>
        <input type="text" className="form-control w-25 mb-4" name="rent" value={this.state.rent} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Add Location</h5>
        <input type="text" className="form-control w-25 mb-4" name="location" value={this.state.location} onChange={(e)=>this.handleChange(e)}></input>
        <button className="btn btn-primary w-25">ADD</button>
        </form> 
        {/* {this.props.Car.map(item => {
          return (
            <div>
              {`${item.carName} ${item.carModel} ${item.carRent}`}
            </div>
          );
        })} */}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log("map State called");
  return {
    Car: state.Car
  };
  
};
const mapDispatchToProps = dispatch => {
  console.log("map dispatcher called");
  return {
    add: item => dispatch(addCar(item))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(AddCar);

