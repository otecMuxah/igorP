import React from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import { useState , useEffect } from "react";




export default function LoginPage() {

    const [country, setCountry]= useState([]);
    const [values, setValues] = useState({
        username:'',
        password:'',
        checkbox: true,
        country:'',

    })

    const navigate = useNavigate();
    function handleRegisterClick() {
        navigate('/register');
    }


const onChange =(e) =>{
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues({...values,[e.target.name]: value})

}

    useEffect( () => {
        const getCountry = async ()=>{
            const response = await fetch("https://restcountries.com/v2/all");
            const data = await response.json();
            setCountry(data);
            console.log(data);
        }
        getCountry();

    },[]);



    function handleSubmit(e) {

        console.log(values)
        e.preventDefault();

        setValues({
            username: "",
            password: "",
            checkbox: false,
            country:'',

        });
        e.target.reset()


    }



    return (
        <div className="container">

            <form className="form" method="post" onSubmit={handleSubmit}>
                <h1>Log Into Chat</h1>
                <label>
                    <h3>Username</h3>
                    <div>
                        <input
                            value={values.username}
                            onChange={onChange}
                            className="input"
                            name="username"
                            placeholder="Enter Username"
                        />
                    </div>
                </label>
                <label>
                    <h3>Password</h3>
                    <input
                        value={values.password}
                        onChange={onChange}
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                    />
                </label>
                <label>
                    <h3>Country</h3>
                    <select
                            value={values.country}
                            name="country"
                            className="country"
                            onChange={onChange}>
                    <option></option>
                    {
                        country.map( (land)=>(
                            <option key={land.name} value={land.name}>{land.name}</option>
                        ))
                    }

                </select>
                </label>

                <div>
                    <button className="login" type="submit" disabled={!values.password || !values.username|| !values.country}>
                        Log In
                    </button>
                </div>
                <div className="checkbox">
                    <label>
                        <input onChange={onChange} type="checkbox" name="checkbox" checked={values.checkbox} />{" "}
                        <span>Remember me</span>
                    </label>
                </div>

                <div className="reset_container">
                    <button className="reset" type="reset">
                        Cansel
                    </button>
                    <button onClick={handleRegisterClick} className="registration" type='button'>
                        Registration
                    </button>
                </div>
            </form>
        </div>
    );
}
