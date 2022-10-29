import React, {Component} from "react";

class Addcontact extends Component{
  state ={
    name:"",
    email:"",
  };

  add = (e) => {
    e.preventdefault();
    if(this.state.name)

  }
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
                  onChange={ (e) => this.setState({name: e.target.v})}/>
            </div>
            <div className="field">
              <label>Email</label>
               <input type="text"
                name="email"
                 placeholder="email"
                 value={this.state.email} 
                 onChange={ (e) => this.setState({email: e.target.v})}
                 />
            </div>
            <button className="ui button blue">Add</button>
          </form>
        </div>

    );
 }

}

export default Addcontact;