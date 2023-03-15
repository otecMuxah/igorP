import React from "react";
import "./LoginPage.css";
import { useState } from "react";




export default function LoginPage() {

    const [values, setValues] = useState({
        username:'',
        password:'',
        checkbox: true,
    })
    let myRef=React.createRef()



const onChange =(e) =>{

    // if (e.target.value.trim()) {
    //     myRef.current.removeAttribute('disabled')
    // }

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues({...values,[e.target.name]: value})

}

    function handleSubmit(e) {

        console.log(values)
        e.preventDefault();

        setValues({
            username: "",
            password: "",
            checkbox: false,
        });
        e.target.reset()




        // const form = e.target;
        // const formData = new FormData(form);
        // const formJson = Object.fromEntries(formData.entries());
        // form.reset()
        //
        // console.log(formJson);


    }



    return (
        <div className="container">
            <form className="form" method="post" onSubmit={handleSubmit}>
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

                <div>
                    <button ref={myRef} className="login" type="submit" disabled={!values.password || !values.username}>
                        Login
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
                </div>
            </form>
        </div>
    );
}
