import { useState } from "react";
import { Header } from 'Header.js';

const Greetings = () => {
    const [ name , setName ] = useState('');
    

    const handleChange = event => {    
        setName(event.target.value);
    }

    return (
        <><Header />
    <div>
        <form>
            <label htmlFor="name"> Name </label>
            <input onChange={handleChange} id="name"></input>
        </form>
        <p>{name}</p>
    </div>
    </>
        );
};

export default Greetings;