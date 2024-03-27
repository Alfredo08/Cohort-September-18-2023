import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";

const Dashboard = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodosOfCurrentUser = async () => {
            const URL = "http://localhost:8080/todosByUser";
            const settings = {
                method: 'GET',
                headers: {
                    'usertoken': localStorage.getItem("token")
                }
            };

            const response = await fetch(URL, settings);
            const data = await response.json();

            if(response.status === 406){
                navigate("/login");
            }
            else{
               setTodos(data.todos); 
            }
        }
        fetchTodosOfCurrentUser();
    }, []);

    return(
        <>
            <h2> Your list of todos </h2>
            {todos.map((todo, index) => {
                return (<Todo description={todo.description}
                              status={todo.status}
                              key={index}/>);
            })}
        </>
    );
}

export default Dashboard;