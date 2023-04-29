import React from "react";
import '../../../assets/styles/authentication/TextInput.scss';


const  TextInput: React.FC = ()=> {
    return (
         
      <div className="TextInput">
        <label className="text-label" >First Name</label><br/>
        <input className='text-input' placeholder='Write text here'  required /><br/>       
      </div>
        
    )
};


export default TextInput;