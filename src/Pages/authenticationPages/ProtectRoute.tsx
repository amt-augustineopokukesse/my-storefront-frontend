import { Navigate } from 'react-router-dom';

type Props = {
  children: any | JSX.Element | JSX.Element[];
};

const ProtectRoute = ({ children }: Props) => {
 const user = localStorage.getItem('merchant')

    if (!user){
        return <Navigate to='/login' />
    }
    return children
};

export default ProtectRoute
