import React from "react";
import '../../assets/styles/authenticationStyles/TextInput.scss';

interface inputProps{
    label: string;
    name: string;
    id: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    disabled?: boolean;
}


const  TextInput: React.FC<inputProps> = (props)=> {

    const placeholderText = () => {
        if (props.label === 'Email') {
            return 'test1@gmail.com';
        } else if (props.label === 'Password' || props.label === 'Confirm Password' || props.label === 'New Password'){
            return '**************';
        } else {
            return `Write ${props.label} here`;
        }
    }
    return (
         
      <div className="TextInput" id={props.id}>
        <label className="text-label" >{props.label}</label><br/>
        <input className='text-input' placeholder={placeholderText()} type={props.type} id={props.id} name={props.name} onChange={props.onChange} required /><br/>       
      </div>
        
    )
};


export default TextInput;