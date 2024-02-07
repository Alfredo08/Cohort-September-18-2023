import { Component } from 'react';
import './App.css';
import Student from '../Student/Student';
import StudentForm from '../StudentForm/StudentForm';
import Cat from '../Cat/Cat';
import CatForm from '../CatForm/Cat';

class App extends Component{
  
  state = {
    title: "Welcome to the Class-based component lecture",
    counter: 0,
    students: [{
      firstName: 'Alex',
      lastName: 'Miller',
      age: 25
    },
    {
      firstName: 'Martha',
      lastName: 'Smith',
      age: 28
    },
    {
      firstName: 'Roger',
      lastName: 'Anderson',
      age: 23
    }],
    cats: []
  }

  addOneUnitToCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  addStudentToList = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent]
    });
  }

  updateCats = (newCatList) => {
    this.setState({
      cats: newCatList
    });
  }

  componentDidMount = async () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        if(response.ok){
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          cats: [...this.state.cats, data[0].url]
        })
      });
  }

  render = () => {
    return(
      <div>
        <h1> {this.state.title} </h1>
        <h2> Counter: {this.state.counter} </h2>
        <div>
          <button onClick={this.addOneUnitToCounter}>
            Add to counter
          </button>
        </div>
        <StudentForm addStudentToList={this.addStudentToList}/>
        {this.state.students.map((student, index) => {
          return(
            <Student student={student} key={index}/>
          )
        })}
        <CatForm updateCats={this.updateCats}/>
        {this.state.cats.map((cat, index) => {
          return(<Cat cat={cat} key={index}/>)
        })}
      </div>
    );
  }
}
export default App;
