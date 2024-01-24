import { useState } from "react";

const HobbyForm = (props) => {

    const [name, setName] = useState("");
    const [userId, setUserId] = useState(-1);

    const addHobby = (event) => {
        event.preventDefault();
        const newHobby = {
            name,
            userId
        };
        props.setHobbies((prevList) => [...prevList, newHobby]);
    }

    return(
        <form onSubmit={addHobby}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input type="text" 
                       id="name" 
                       name="name" 
                       value={name}
                       onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="userId">
                    User Id:
                </label>
                <select name="userId" id="userId" onChange={(event) => setUserId(event.target.value)}>
                    {props.users.map((user, index)=> {
                        return(<option key={index} value={user.id}> 
                                    {user.firstName} {user.lastName} 
                               </option>)
                    })}
                </select>
            </div>
            <button>
                Add Hobby
            </button>
        </form>
    );
}

export default HobbyForm;