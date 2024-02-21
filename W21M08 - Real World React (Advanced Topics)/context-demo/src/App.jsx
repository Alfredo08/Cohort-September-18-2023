import { useState } from 'react';
import './App.css';
import GrandParent from './components/GrandParent/GrandParent';
import AppContext from './AppContext';

function App() {
  const [message, setMessage] = useState({
    grandParent : "Hey grandpa",
    parent : "Hey dad",
    child : "Hey there kid"
  });

  const contextValues = {
    message: message,
    setMessage: setMessage
  };

  return (
    <AppContext.Provider value={contextValues}>
      <div className="App">
        <h1> Welcome to the context demonstration </h1>
        <GrandParent/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
