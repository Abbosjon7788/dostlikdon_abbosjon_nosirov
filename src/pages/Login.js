import React from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {connect} from "react-redux";
import {loginUser} from "../redux/actions/authAction";

const Login = (props) => {
    const login = (events, errors, values) => {
        console.log(values);
        props.loginUser(values);
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <AvForm onSubmit={login} className="border p-6 rounded-md font-serif w-1/3">
                <AvField name="phoneNumber" placeholder="Phone Number" type="text"
                         className="border focus:outline-none focus:ring-2 focus:ring-green-400 p-2 w-full rounded-md"/>
                <AvField name="password" placeholder="Password" type="password"
                         className="my-6 w-full border focus:outline-none focus:ring-2 focus:ring-green-400 p-2 rounded-md"/>
                <button type="submit"
                        className="bg-green-400 rounded-md text-white font-bold tracking-widest hover:bg-green-500 w-full p-2 text-center">Login
                </button>
            </AvForm>
        </div>
    );
};

export default connect(null, {loginUser})(Login);