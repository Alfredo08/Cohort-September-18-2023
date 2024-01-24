import { useState } from 'react';
import './App.css';
import User from './components/User/User';
import UserForm from './components/UserForm/UserForm';
import Hobby from './components/Hobby/Hobby';
import HobbyForm from './components/HobbyForm/HobbyForm';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [hobbies, setHobbies] = useState([{
    name: "Code in React",
    userId: "12345"
  }]);

  return (
    <div className="App">
      <h1> Hobbies app </h1>
      <h1> Counter {counter} </h1>
      <button onClick={() => setCounter(counter + 1)}>
        Add 1 to counter
      </button>
      <h2> Add new User </h2>
      <UserForm setUsers={setUsers}/>
      {users.map((user, index) => {
        return(<User key={index} 
                     user={user}
                     counter={counter}
                     setCounter={setCounter}/>)
      })}
      <h2> Add new hobby </h2>
      <HobbyForm users={users} setHobbies={setHobbies}/>
      {hobbies.map((hobby, index) => {
        return(<Hobby hobby={hobby} key={index}/>);
      })}
    </div>
  );
}

export default App;
