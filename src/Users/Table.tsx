import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import { BsPencil, BsFillCheckCircleFill, BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserTable() {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = async () => {
        try {
            const users = await client.findAllUsers();
            setUsers(users);
        } catch (e: any) {
            toast.error(e.response.data);
            navigate('/Kanbas/Account/signin');
        }
    };
    const [user, setUser] = useState<User>({
        _id: "", username: "", password: "", firstName: "",
        lastName: "", role: "USER"
    });
    const [role, setRole] = useState("USER");
    const fetchUsersByRole = async (role: string) => {
        try {
            const users = await client.findUsersByRole(role);
            setRole(role);
            setUsers(users);
        } catch (e: any) {
            toast.error(e.response.data);
            navigate('/Kanbas/Account/signin');
        }
    };
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err: any) {
            toast.error(err.response.data);
            console.log(err);
        }
    };

    const deleteUser = async (user: User) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err: any) {
            toast.error(err.response.data);
        }
    };

    const selectUser = async (user: User) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err: any) {
            toast.error(err.response.data);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) =>
                (u._id === user._id ? user : u)));
        } catch (err: any) {
            toast.error(err.response.data);
        }
    };

    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <ToastContainer/>
            <select
                onChange={(e) => fetchUsersByRole(e.target.value)}
                value={role || "USER"}
                className="form-control m-2 w-25 float-end"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <h1>User Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <input className="form-control" type="password" placeholder="Password" value={user.password} onChange={(e) =>
                                setUser({ ...user, password: e.target.value })} />
                            <input className="form-control" placeholder="Username" value={user.username} onChange={(e) =>
                                setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            <input className="form-control" placeholder="First Name" value={user.firstName} onChange={(e) =>
                                setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input className="form-control" placeholder="Last Name" value={user.lastName} onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select className="form-control" value={user.role} onChange={(e) =>
                                setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-warning" onClick={updateUser}>
                                <BsFillCheckCircleFill className="m-1 text" />
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={createUser}>
                                <BsPlusCircleFill className="m-1 text" />
                            </button>
                        </td>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.username}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                                    <BsTrash3Fill />
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-warning">
                                    <BsPencil onClick={() => selectUser(user)} />
                                </button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
