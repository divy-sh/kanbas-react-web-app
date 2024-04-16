import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "", username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      navigate("/Kanbas/Account/Profile");
    } catch (e) {
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <ToastContainer />
      <h1>Signin</h1>
      <input className="form-control m-2" value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })} />
      <input className="form-control m-2" value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })} />
      <button className="btn btn-primary" onClick={signin}> Signin </button>
      <Link className="btn btn-success float-end" to="/Kanbas/Account/signup"> Signup </Link>
    </div>
  );
}
