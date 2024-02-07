import { Component } from "react";

class StudentForm extends Component{
    state = {
        firstName: '',
        lastName: '',
        age: 0
    }

    addStudent = (event) => {
        event.preventDefault();
        this.props.addStudentToList(this.state);
    }

    render = () => {
        console.log(this.props);
        return(
            <form onSubmit={this.addStudent}>
                <div>
                    <label htmlFor="firstName">
                        First name:
                    </label>
                    <input type="text"
                           value={this.state.firstName}
                           id="firstName"
                           name="firstName"
                           onChange={(event) => this.setState({firstName: event.target.value})} />
                </div>
                <div>
                    <label htmlFor="lastName">
                        Last name:
                    </label>
                    <input type="text"
                           value={this.state.lastName}
                           id="lastName"
                           name="lastName"
                           onChange={(event) => this.setState({lastName: event.target.value})} />
                </div>
                <div>
                    <label htmlFor="age">
                        Age:
                    </label>
                    <input type="number"
                           value={this.state.age}
                           id="age"
                           name="age"
                           onChange={(event) => this.setState({age: event.target.value})} />
                </div>
                <button>
                    Add student
                </button>
            </form>
        );
    }
}

export default StudentForm;