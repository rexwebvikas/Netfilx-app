import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { login, logout,selectUser} from './features/userSlice';
import { useDispatch, useSelector} from 'react-redux';

function App() {
 const user = useSelector(selectUser)
  const  dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
       
      }else{
        //Logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  },[dispatch])
  return (
    <div className="App">
     
      <Router>
      {!user ? (
        <LoginScreen/>
      ): (
        <Switch>
        <Route path='/profile'>
        <ProfileScreen />

        </Route>
        
            <Route  exact path= "/">
             <HomeScreen/>
            </Route>
          </Switch>

      )}
          

      </Router>
    </div>
  );
}

export default App;
