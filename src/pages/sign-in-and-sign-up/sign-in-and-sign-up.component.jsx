import  React from 'react';

import './sign-in-and-sign-up.styles.scss';

import Sigin from  '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component'
const SignUpAndSignupPage =()=>{
    return(
        <div className='sign-in-and-sign-up'>
          <Sigin/>
          <Signup/>
        </div>
    )
}   

export default SignUpAndSignupPage