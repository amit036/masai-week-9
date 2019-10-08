import React, { Component } from 'react'
var a=JSON.parse(localStorage.getItem("SelectCarLocation"));
class BookCarConfirmation extends Component {
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
  render() {
    return (
      <div style={{marginTop:"100px",marginLeft:"650px",marginRight:"800px", border:"1px solid black"}}>
        <h4>Your Booking is Successfully Placed</h4>
        <img src={this.state.Car[0].imgUrl}></img>
        <p style={{marginLeft:"100px"}}><b>{this.state.Car[0].name}</b></p>
        <p> Your Booking Number is ABZ{(Math.random(10)*10000000000000000)}</p>
        <p>From {a[0].source} to {a[0].destination} on date {a[0].date}</p>
       
      </div>
    )
  }
}
export default BookCarConfirmation;
