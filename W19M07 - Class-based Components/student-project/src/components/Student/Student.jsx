import { Component } from "react";
/*
const Student = (props) => {
    return(
        <div>
            <h2>{props.student.firstName} {props.student.lastName}</h2>
            <p> <strong>Age: {props.student.age} </strong> </p>
        </div>
    );
}
*/

class Student extends Component{
    render = () => {
        return(
            <div>
                <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                <p> <strong>Age: {this.props.student.age} </strong> </p>
            </div>
        );
    }
}

export default Student;