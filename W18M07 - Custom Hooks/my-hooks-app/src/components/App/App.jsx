import Cat from '../Cat/Cat';
import Counter from '../Counter/Counter';
import CounterTwo from '../CounterTwo/CounterTwo';
import Dog from '../Dog/Dog';
import MouseMove from '../MouseMove/MouseMove';
import './App.css';

const App = () => {
  return(
    <div className="App">
      <h1> My hooks app </h1>
      <Counter initialValue={10} valueToAdd={5} valueToSubtract={5}/>
      <Counter initialValue={20} valueToAdd={10} valueToSubtract={10}/>
      <CounterTwo initialValue={100} valueToAdd={15} valueToSubtract={3}/>
      {/* <MouseMove /> */}
      <Dog />
      <Cat />
    </div>
  );
}

export default App;
