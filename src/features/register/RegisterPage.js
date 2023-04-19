import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [countries, setCountries] = useState([]);
    const [values, setValues] = useState({
        username: "",
        password: "",
        repeatPassword: "",
        country: "",
    });

    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate("/login");
    };

    useEffect( () => {
        const getCountry = async ()=>{
            const response = await fetch("https://restcountries.com/v2/all");
            const data = await response.json();
            setCountries(data);
            console.log(data);
        }
        getCountry();

    },[]);


    function handleSubmit (event){
        event.preventDefault();
        const { password, repeatPassword } = values;

        if (password !== repeatPassword) {
            console.log("Passwords do not match");
        } else {
            console.log("Form data: ", values);
        }
        setValues({
            username: "",
            password: "",
            repeatPassword: "",
            country:'',

        });
        event.target.reset()

    };

    const handleChange = (event) => {
        const  value  = event.target.value;
        setValues({...values,[event.target.name]: value})

    };



    return (
        <div className="container">
            <form className="form" method="post" onSubmit={handleSubmit}>
                <h1>Registration</h1>
                <label>
                    <h3>Username</h3>
                    <div>
                        <input
                            className="input"
                            name="username"
                            placeholder="Enter Username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                </label>
                <label>
                    <h3>Password</h3>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>Repeat Password</h3>
                    <input
                        className="input"
                        type="password"
                        name="repeatPassword"
                        placeholder="Enter Password"
                        value={values.repeatPassword}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <h3>Country</h3>
                    <select
                        value={values.country}
                        name="country"
                        className="country"
                        onChange={handleChange}>
                        <option></option>
                        {
                            countries.map( (land)=>(
                                <option key={land.name} value={land.name}>{land.name}</option>
                            ))
                        }

                    </select>
                </label>

                <div>
                    <button className="login" type="submit">
                        Registration
                    </button>
                </div>


                <div className="reset_container">
                    <button className="reset" type="reset">
                        Cansel
                    </button>
                    <button onClick={handleRegisterClick} className="registration" type="button">
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}