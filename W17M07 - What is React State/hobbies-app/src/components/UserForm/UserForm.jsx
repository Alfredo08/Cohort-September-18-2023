import { useState } from "react";

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [id, setId] = useState(-1);

    const submitNewUser = (event) => {
        event.preventDefault();
        const newUser = {
            firstName,
            lastName,
            age,
            id
        }
        props.setUsers((prevList) => [...prevList, newUser])
    }

    return(
        <form onSubmit={submitNewUser}>
        <div>
          <label htmlFor='firstName'>
            First name:
          </label>
          <input type="text" 
                 name='firstName' 
                 id='firstName'
                 value={firstName}
                 onChange={(event) => setFirstName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='lastName'>
            Last name:
          </label>
          <input type="text" 
                 name='lastName' 
                 id='lastName'
                 value={lastName}
                 onChange={(event) => setLastName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='age'>
            Age:
          </label>
          <input type="number" 
                 name='age' 
                 id='age'
                 value={age}
                 onChange={(event) => setAge(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='id'>
            Id:
          </label>
          <input type="number" 
                 name='id' 
                 id='id'
                 value={id}
                 onChange={(event) => setId(event.target.value)}/>
        </div>
        <button>
          Add User
        </button>
      </form>
    );
}

export default UserForm;