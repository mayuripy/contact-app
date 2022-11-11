import React, {Component} from "react";

class Editcontact extends  react.Component{
  constructure(props){
    super(props)
    const{ id,name,email} =props.location.state.contact;
    this,state = {
      id,
      name,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mandatory!")
      return;
    }
    this.props.updatecontactHandler(this.state);
    this.setState({ name: "", email: ""});
    this.props.history.push("/");
    
  console.log(this.props.contacts)
  window.location.replace('/')
  };
 render(){
    return(
        <div className="ui main">
          <h2>Edit contact</h2>
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
            <button type='submit' className="ui button blue">update</button>
          </form>
        </div>

    );
 }

}

export default Addcontact;