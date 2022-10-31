import React, {Component} from "react";

class Addcontact extends Component{
  state ={
    name:"",
    email:"",
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory!")
      return;
    }
    this.props.addcontactHandler(this.state);
    this.setState({ name: "", email: ""});
    
  console.log(this.props.contacts)
  };
 render(){
    return(
        <div className="ui main">
          <h2>Add contact</h2>
          <form className="ui form"onSubmit={this.add}>
            <div className="field">
              <label>Name</label>
               <input type="text"
                name="name"
                 placeholder="Name"
                  value={this.state.name} 
                  onChange={ (e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="field">
              <label>Email</label>
               <input type="text"
                name="email"
                 placeholder="Email"
                 value={this.state.email} 
                 onChange={ (e) => this.setState({email: e.target.value})}
                 />
            </div>
            <button type='submit' className="ui button blue">Add</button>
          </form>
        </div>

    );
 }

}

export default Addcontact;