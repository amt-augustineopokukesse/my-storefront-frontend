import React from "react";
import SignUpForm from "../../Auth-Components/SignUpForm";
//import AuthHero from "../../Auth-Components/AuthHero";
import AuthHeroNew from "../../Auth-Components/authHeroNew";

import '../../../../assets/styles/authentication/SignUp.scss';

const SignUp: React.FC = () => {

  return (
    <div className="signup">
      <AuthHeroNew />
      <SignUpForm/>
    </div>
  );
};

export default SignUp;
