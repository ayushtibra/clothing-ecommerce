import React from 'react';
// import './sign-in-and-sign-up.component';
import './random.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => {
  return (
    <div className='random'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
