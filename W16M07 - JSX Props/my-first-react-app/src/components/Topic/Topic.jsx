
const Topic = (props) => {
    return (
        <div>
            <h2> Title: {props.topic.title} </h2>
            <h2> Number of weeks: {props.topic.weeks} </h2>
            <h2> Instructors: {props.topic.instructors} </h2>
        </div>
    );
}

export default Topic;