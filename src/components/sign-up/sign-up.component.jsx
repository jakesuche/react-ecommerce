import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/button.component";
import { auth, CreateUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up-styles.scss";
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (event) => {
      const { name, value} = event.target;
      this.setState({[name]:value})
     
  }
  handleSubmit= async (event)=>{
      event.preventDefault()
      const { password , email, confirmPassword, displayName} = this.state;

      if(password !== confirmPassword){
          alert('password dont match')
          return;
      }
      try{
        const {user } = await auth.createUserWithEmailAndPassword(email,password)
      

        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
     
        await CreateUserProfileDocument(user, {displayName})
      }
      catch(err){
        console.log(err)
      }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton onClick={this.handleSubmit} type="submit"> Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
