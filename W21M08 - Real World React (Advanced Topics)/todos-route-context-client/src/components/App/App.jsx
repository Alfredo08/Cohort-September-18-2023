import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import { useState } from 'react';
import Home from '../Home/Home';
import Article from '../Article/Article';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <>
      <h1> Welcome to the Real World Advanced Topic lecture </h1>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/home" Component={() => {
          if(isLoggedIn){
            return(<Home />)
          }
          return <Login setIsLoggedIn={setIsLoggedIn}/>
        }}/>
        <Route path="/content/:articleId" element={<Article />} />
        <Route path='*' Component={() => {
          /*if(isLoggedIn){
            return <Navigate to="/home" />;
          } */
          return <Navigate to="/login" />
        }}/>
      </Routes>
    </>
  );
}

export default App;
