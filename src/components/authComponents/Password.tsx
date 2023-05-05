import React from 'react'
import TextInput from './TextInput';
import '../../assets/styles/authenticationStyles/Email.scss';
//import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';



interface passwordProp {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    label: string;
    name: string;
    id: string;
    type: string;
    disabled?: boolean;
    endAdornment?: React.ReactNode;

}


const Password: React.FC<passwordProp> = (props) => {
  //const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    
        <div className='password-form'>
          <TextInput type='password'
           id={props.id} 
           name={props.name} 
           label={props.label} 
           onChange={props.onChange} 
           pattern={props.pattern} 
          //  endAdornment={
          //   <span onClick={togglePasswordVisibility}>
          //     {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          //   </span>
          //   }
          />  
           
        </div>
    
  )
}

export default Password;