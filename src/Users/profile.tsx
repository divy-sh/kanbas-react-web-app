import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const [profile, setProfile] = useState({
        _id: "", username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });
    const navigate = useNavigate();
    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (e: any) {
            toast.error(e.response.data);
            navigate("/Kanbas/Account/Signin");
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    const save = async () => {
        await client.updateUser(profile);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };
    return (
        <div>
            <ToastContainer />
            <h1>Profile</h1>
            {profile && (
                <div>
                    <Link to="/Kanbas/Account/Admin/Users"
                        className="btn btn-warning w-100">
                        Users
                    </Link>
                    <input className="form-control m-2" value={profile.username} onChange={(e) =>
                        setProfile({ ...profile, username: e.target.value })} />
                    <input className="form-control m-2" value={profile.password} onChange={(e) =>
                        setProfile({ ...profile, password: e.target.value })} />
                    <input className="form-control m-2" value={profile.firstName} onChange={(e) =>
                        setProfile({ ...profile, firstName: e.target.value })} />
                    <input className="form-control m-2" value={profile.lastName} onChange={(e) =>
                        setProfile({ ...profile, lastName: e.target.value })} />
                    <input className="form-control m-2" value={profile.dob.split('T')[0]} type="date" onChange={(e) =>
                        setProfile({ ...profile, dob: e.target.value })} />
                    <input className="form-control m-2" value={profile.email} onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })} />
                    <select className="form-control m-2" onChange={(e) =>
                        setProfile({ ...profile, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-danger" onClick={signout}>
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
