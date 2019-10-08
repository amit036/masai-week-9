import React from 'react'
import SelectLocationCar from './SelectLocationCar';
import { connect } from  'react-redux';
const BookCar = ({ match, location}) => {
    const { params: { itemId } } = match;
    var Car=[
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
    
    
  
    return (
      <>
     <div style={{marginLeft:"750px",marginTop:"150px"}}>
     <img src={Car[itemId-1].imgUrl} style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
     <p style={{marginLeft:"130px",fontWeight:"bold"}}> {Car[itemId - 1].name}</p>
     <p style={{marginLeft:"140px",fontWeight:"bold"}}> {Car[itemId - 1].rent}</p>
    </div>
    <SelectLocationCar />
    </>
    );
  };
  const mapStateToProps = (state) => {
    return {
        Car: state.Car,
    }
}
export default connect (mapStateToProps, null) (BookCar)


    
  


