import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shopage from './pages/shop/shop.component'
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.component';
import SignInAndSignUpPage from  './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils'
import React from "react";
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'





class App extends React.Component{
  constructor(props) {
    super(props);
    

  }

unsubscribeFromAuth = null

  componentDidMount(){
      const { setCurrentUser }= this.props
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
       //this.setState({currentUser:userAuth})
      // console.log(userAuth, 'user')
      // CreateUserProfileDocument(userAuth)
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
              ...snapShot.data()
          })
         
          console.log(this.state)
        })
       
      }

      setCurrentUser({currentUser:userAuth})
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  

  render(){
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shopage} />
        <Route exact path="/sigin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
