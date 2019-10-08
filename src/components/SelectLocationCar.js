import React from 'react'
import { Link } from 'react-router-dom'
let myglobal=[];

var b=localStorage.getItem("SelectCarLocation");
var a=JSON.parse(b);
if(a===null)
{

}
else
{
  myglobal = [...a];
}
class SelectLocationCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      source: '',
      destination: '',
      date:''
    };
  }
  
  handleChange=(event)=>{
    event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
    console.log(this.state);  

}
handleSubmit=(event)=>{
  event.preventDefault();
  myglobal.push(this.state);
  console.log(myglobal)
  localStorage.setItem("SelectCarLocation",JSON.stringify(myglobal));
  // this.props.history.push('/bookCarConfirmation');
}

  render() {
    return (
      <div style={{ marginLeft: "700px" }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
          <label>Date</label>
            <input className="form-control" type="date" value={this.state.date} name="date"  onChange={(e)=>this.handleChange(e)} style={{ width: "400px" }}></input>
           
            <label htmlFor="select1" >Source Location</label>
            <select value={this.state.source} name="source"  onChange={(e)=>this.handleChange(e)} className="form-control" style={{ width: "400px" }} >
              <option value="0">Choose your location</option>
              <option value="Kormangla">Kormangla</option>
              <option value="BTM Layout">BTM Layout</option>
              <option value="HSR Layout">HSR Layout</option>
              <option value="MG Road">MG Road</option>
              <option value="HAL">HAL</option>
            </select>
          </div>
          <div className="form-group">
          <label htmlFor="select1" >Destination Location</label>
            <select value={this.state.destination} name="destination"  onChange={(e)=>this.handleChange(e)} className="form-control" style={{ width: "400px" }}>
              <option value="0">Choose your location</option>
              <option value="Kormangla">Kormangla</option>
              <option value="BTM Layout">BTM Layout</option>
              <option value="HSR Layout">HSR Layout</option>
              <option value="MG Road">MG Road</option>
              <option value="HAL">HAL</option>
            </select>
          </div>
          <Link to="/bookCarConfirmation"><button className="btn btn-success" style={{ marginTop: "20px", width: "400px" }}>Book</button></Link>
        </form>
      </div>
    )
  }
}
export default SelectLocationCar;