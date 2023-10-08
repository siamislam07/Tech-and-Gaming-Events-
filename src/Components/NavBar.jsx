/* eslint-disable react/prop-types */
import { Link, NavLink, Navigate } from "react-router-dom";
import Home from "./Home";
// import '../App.css'
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user.email);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const [navbar, setNavbar] = useState(false)

    const navLinks = <>
        <li><NavLink to='/' className="btn btn-outline btn-default pt-4 border-b-red-800 text-white border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">Home</NavLink></li>
        {user &&<>
            <li><NavLink to='/tech' className="btn btn-outline btn-default pt-4 border-b-lime-600 text-white border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">Tech</NavLink></li>
            <li><NavLink to='/dashboard' className="btn btn-outline btn-default pt-4 border-b-lime-600 text-white border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">DashBoard</NavLink></li>
        </> }
        {user ? '' : <li><NavLink to='/login' className="btn btn-outline btn-default pt-2 border-b-amber-600 border-neutral normal-case text-lg text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">Login</NavLink></li>}
        {user ? '' : <li><NavLink to='/CreateAccount' className="btn btn-outline btn-default pt-2 border-b-amber-300 border-neutral normal-case text-lg text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">Create Account</NavLink></li>}
        {
            user ?
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/wC75hKV/user.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">{user?.email ? user.email : user?.displayName}</span>
                            </a>
                        </li>

                        <li><a onClick={handleLogOut} className="">Logout</a></li>
                    </ul>
                </div>
                : ''
        }

    </>

    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className=" ">
            <div className={navbar ? 'navbar bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 bg-white bg-opacity-10 fixed z-10 bg-transparent' : 'navbar bg-white bg-opacity-10 fixed z-10 bg-transparent'}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost font-serif normal-case text-2xl text-white">Tech & Gaming</Link >
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {navLinks}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;