import { useState } from "react";

const SimpleForm = () => {
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);
        console.log(password);
    }
    
    const [email, setEmail] = useState(null);
    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
        console.log(event.target.value);
        //check console to understand more clearly
    }

    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
        console.log(event.target.value);
        //check console to understand more clearly

        //checking password changes we can set state here
        if(password.length <= 6){
            setError('Password should be at least 7 characters long');
        }
        else{
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 w-[200px] mx-auto m-10">
                <input className="border" onChange={handleEmailChange} type="email" name="email" id=""/>
                <input className="border" onChange={handlePasswordChange} type="password" name="password" id="" />
                <input className="border" type="submit" value="Submit" id="" />
                <p className="text-center">{error}</p>
            </form>
        </div>
    );
};

export default SimpleForm;