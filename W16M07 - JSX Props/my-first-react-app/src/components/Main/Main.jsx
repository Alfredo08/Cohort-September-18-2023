import Topic from '../Topic/Topic';
import Student from './../Student/Student';

const Main = () => {
    const topics = [{
        title: "SQL",
        weeks: 2,
        instructors: ['Duy', 'Alfredo']
    },
    {
        title: "React",
        weeks: 4,
        instructors: ['Vincent', 'Alfredo', "Warren"]
    },
    {
        title: "Ruby",
        weeks: 3,
        instructors: ['Andy']
    }];

    const students = [{
        firstName: "Alex",
        lastName: "Miller",
        age: 25
    },
    {
        firstName: "Martha",
        lastName: "Smith",
        age: 28
    },
    {
        firstName: "Roger",
        lastName: "Anderson",
        age: 24
    },
    {
        firstName: "Julie",
        lastName: "Winston",
        age: 27
    }];

    const filteredStudents = students.filter((student) => student.age >= 26);

    return(
        <div>
            <h1> This is my first REACT app </h1>
            <p> REACT is not hard! It's just new! </p>  
            <h1> STUDENTS </h1>
            {students.map((student, index) => {
                return (<Student firstName={student.firstName} 
                                 lastName={student.lastName} 
                                 age={student.age}
                                 key={`student_${index}`}/>)
            })}
            <h1> STUDENTS OLDER THAN 26 </h1>
            {filteredStudents.map((student, index) => {
                return (<Student firstName={student.firstName} 
                                 lastName={student.lastName} 
                                 age={student.age}
                                 key={`student_${index}`}/>)
            })}
            <h1> TOPICS TO COVER </h1>
            {topics.map((topic, index) => {
                return( <Topic topic={topic}
                               key={`topic_${index}`}/>)
            })}
        </div>   
    );
}

export default Main;
