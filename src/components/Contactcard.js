import React from 'react';
import { Link} from "react-router-dom";
import user from "../images/user.png"

const Contactcard = (props) => {
  const{id,name,email} = props.contact;
  console.log(props.contact)
    return(
        <div className="item">
          <img style={{height: '30px', width: '30px'}} className="ui avater image" src={user?user:''} alt="user"/>
       <div className="contact">
         <Link to={{pathname:'./contact/${id}',state:{contact: props.contacts}}}>
          <div  className="header"> {name}</div>
          <div>{email}</div>
         </Link>
         {/* </div> */}
         <i className=" trash alternate outline icon"
         style={{ color:"red", marginTop:"7px",marginleft:"10px" }}
         onClick={() => props.clickHander(id)}
         ></i>
         <Link 
          to={{pathname: '/edit', state: { contact: props.contact}}}>

         <i 
          className=" edit alternate outline icon"
         style={{ color:"blue", marginTop: "7px"}}
         
         />

        </Link>
         </div>
       </div>
    );
};

export default Contactcard;