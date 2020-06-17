import React, {useState, useEffect} from 'react';
import Sitebar from './home/NavBar';
import Auth from './auth/Auth';
import FoodIndex from './results/FoodIndex';


function App() {
  const [sessionToken, setSessionToken] = useState('');
  
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  const clearToken = () => {//building our logout function. resetting the state of our sessionToken to an empty string and clearing our token from our local storage.
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <FoodIndex token={sessionToken} /> 
    : <Auth updateToken={updateToken} />)
  }


  return (
    <div style={{backgroundColor:'#f5d1c4',
    backgroundImage:'url("https://www.transparenttextures.com/patterns/black-linen.png")'}}>
      <Sitebar clearToken={clearToken} /> 
      {protectedViews()}
    </div>
  );
}

export default App;
