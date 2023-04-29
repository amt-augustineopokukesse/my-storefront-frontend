import React from "react";
import '../../../assets/styles/authentication/TextInput.scss';


const  TextInput: React.FC = ()=> {
    return (
         
      <div className="TextInput">
        <label className="" >First Name</label><br/>
        <input className='' placeholder='Write text here'  required /><br/>       
      </div>
        
    )
};


export default TextInput;