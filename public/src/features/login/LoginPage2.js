import React from "react";
import "./LoginPage.css";


class LoginPage2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            checkbox: true,
        }
        this.myRef = React.createRef()
    }

    onChange =(e) =>{

        if (e.target.value.trim()) {
            this.myRef.current.removeAttribute('disabled')
        }

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[target.name]: value})
    }

   handleSubmit =(e) => {
       e.preventDefault();
       console.log(this.state)
       e.target.reset()

    }


    //
    //
    //
    //
    //     const form = e.target;
    //     const formData = new FormData(form);
    //     const formJson = Object.fromEntries(formData.entries());
    //     form.reset()
    //
    //     console.log(formJson);
    //
    //
    // }


    render() {
        return(
        <div className="container">
            <form className="form" method="post" onSubmit={this.handleSubmit}>
                <label>
                    <h3>Username</h3>
                    <div>
                        <input

                            onChange={this.onChange}
                            className="input"
                            name="username"
                            placeholder="Enter Username"
                        />
                    </div>
                </label>
                <label>
                    <h3>Password</h3>
                    <input
                        onChange={this.onChange}
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                    />
                </label>

                <div>
                    <button  ref={this.myRef} className="login" type="submit" disabled>
                        Login
                    </button>
                </div>
                <div className="checkbox">
                    <label>
                        <input onChange={this.onChange} type="checkbox" name="checkbox" checked={this.state.checkbox}/>{" "}
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
        )}

}
export default LoginPage2
