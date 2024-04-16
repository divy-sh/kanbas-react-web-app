import UserTable from "../../Users/Table";
import Profile from "../../Users/profile";
import Signin from "../../Users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../../Users/signup";
export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/Users" element={<UserTable />} />
      </Routes>
    </div>
  );
}
