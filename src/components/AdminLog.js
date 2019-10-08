import React from 'react'
import './Login.css';
var adminUser='root';
var password='root';
class AdminLog extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
            adminUser:'',
            password:''
        }
      }
      handleChange=(event)=>{
        event.preventDefault();
         this.setState({[event.target.name]:event.target.value});
     }
      handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.adminUser===adminUser&&this.state.password===password)
        {
            this.props.history.push('/AddVehicle');
        }
        else
        {
            alert('Invalid Username & Password')
        }
       
     }
    render(){
        return (
            <div>
                <div className="login-form" style={{ marginTop: "250px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <img src="https://icon-library.net/images/admin-login-icon/admin-login-icon-11.jpg" style={{ height: "80px", marginLeft: "90px" }}></img>
                        <h2 className="text-center">Admin Log in</h2>
                        <div className="form-group">
                            <input type="text" name="adminUser" value={this.state.adminUser} onChange={(e)=>this.handleChange(e)} className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)} className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-block">Log in</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
   
}
export default AdminLog;
