import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", dob: "", email: "", role: "USER" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(user);
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            toast.error(err.response.data);
        }
    };
    return (
        <div>
            <ToastContainer />
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input className="form-control m-2" placeholder="Username" value={user.username} onChange={(e) => setUser({
                ...user, username: e.target.value
            })} />
            <input className="form-control m-2" placeholder="Password" type="password" value={user.password} onChange={(e) => setUser({
                ...user, password: e.target.value
            })} />
            <input className="form-control m-2" placeholder="First name" value={user.firstName} onChange={(e) => setUser({
                ...user, firstName: e.target.value
            })} />
            <input className="form-control m-2" placeholder="Last name" value={user.lastName} onChange={(e) => setUser({
                ...user, lastName: e.target.value
            })} />
            <input className="form-control m-2" value={user.dob} type="date" onChange={(e) => setUser({
                ...user, dob: e.target.value
            })} />
            <input className="form-control m-2" placeholder="Email" value={user.email} onChange={(e) => setUser({
                ...user, email: e.target.value
            })} />
            <Link className="btn btn-primary" to="/Kanbas/Account/signin"> Sign in </Link>
            <button className="btn btn-success float-end" onClick={signup}> Signup </button>
        </div>
    );
}
