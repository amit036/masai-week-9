import React from 'react'
import {Link} from 'react-router-dom'
import VehicleTitle from './VehicleTitle';
var Car=JSON.parse(localStorage.getItem("carDetails"));
//console.log(Car)
class Rentcar extends React.Component{
    constructor(props){
        super(props);
    this.state={
        Car:[
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1600/day",
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹1500/day",
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1700/day",
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹1400/day"
    
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹2000/day"
                
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹2500/day"
                
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹2000/day"
                
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹2300/day"
                
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹2100/day"
                
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹1500/day"
            }
        ]
    }
    }
    render(){
        return(
        <div style={{float:"left"}}>
            <div>
                <VehicleTitle bg="red" vname="Car"/>
            </div>
        {
          this.state.Car.map((items,index) => {
            return (
                <div style={{float:"left"}}>
                <div className="card" style={{ width: "300px", marginLeft: "60px",marginBottom:"20px"}}>
                 <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                 <hr></hr>
                 <p style={{ textAlign: "center" }}>{items.name}</p>
                 <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
                 <Link to={`/bookCar/${index + 1}`}><button className="btn btn-primary" style={{width:"100%"}} >BOOK</button></Link>       
             </div>      
             </div>
            )
          })
        }
      </div>
        );
    }
}
export default Rentcar;