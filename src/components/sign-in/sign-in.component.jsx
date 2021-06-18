import React from "react";
import './sign-in.styles.scss'
import FormInput from  '../form-input/form-input.component'
import CustomeButton from '../custom-button/button.component'
import  { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email,password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'', password:''})
    }catch(err){
      console.log(err)
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
    
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />
         
          <FormInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          
         <div className="buttons">
         <CustomeButton  type="submit" value=" Submit Form"> 
            SIGN IN
          </CustomeButton>
          <CustomeButton isGoogleSignIn  onClick={signInWithGoogle}> 
            SIGN IN with google
          </CustomeButton>
         </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
