import { useEffect, useState } from "react";
import Todo from './../Todo/Todo';
import {Link} from 'react-router-dom';

const Home = () => {

    const [user, setUser] = useState({});
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const loadUserInformation = async () => {
            const URL = "http://localhost:8080/verify";
            const settings = {
                method: 'GET',
                headers: {
                    usertoken: localStorage.getItem('token')
                }
            }
            const response = await fetch(URL, settings);
            const data = await response.json();
            setUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                id: data.id
            });
        }

        const loadUserTodos = async () => {
            const URL = "http://localhost:8080/todosByUser";
            const settings = {
                method: 'GET',
                headers: {
                    usertoken: localStorage.getItem('token')
                }
            }
            const response = await fetch(URL, settings);
            const data = await response.json();
            setTodos(data.todos);
        }

        loadUserInformation();
        loadUserTodos();
    }, []);

    return(
        <>
            <h1> Home </h1>
            <Link to={`/content/${Math.random() * 100}`}> Go to content </Link>
            <h2> Welcome back {user.firstName} {user.lastName} </h2>
            {todos.map((todo, index) => {
                return <Todo todo={todo} key={index} />;
            })}
        </>
    );
}

export default Home;