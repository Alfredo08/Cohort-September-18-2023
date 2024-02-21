import { useContext, useState } from "react";
import AppContext from "../../AppContext";

const Child = () => {
    const context = useContext(AppContext);
    const [newMessage, setMessage] = useState("");

    const updateChildMessage = (e) => {
        e.preventDefault();
        context.setMessage({
            ...context.message,
            child: newMessage
        })
    }

    return(
        <>
            <h2> Child </h2>
            <p> {context.message.child} </p>

            <form onClick={updateChildMessage}>
                <div>
                    <label htmlFor="newMessage">
                        New message:
                    </label>
                    <input type="text" 
                        value={newMessage}
                        id="newMessage"
                        onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button>
                        Update
                    </button>
            </form>
        </>
    );
}

export default Child;