import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import CustomLink from '../../Hooks/CustomLink '
import "./Navbar.css"

const Navbar = () => {

    const [user, loading,] = useAuthState(auth)



    const [isScrolled, setIsScrolled] = useState(false)

    if (loading) {
        return <p>loading</p>
    }
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    console.log(user, "user")


    return (
        <div className="bg-black">
            <div className="bg-black navbar nav-head">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <nav>
                                <CustomLink to="/">Home</CustomLink>
                                <CustomLink to="/friends">Friends</CustomLink>
                                <CustomLink to="/about">About</CustomLink>
                            </nav>

                        </ul>
                    </div>
                    <div className='w-2/4'>
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <img className='w-4/5' src="https://i.ibb.co/x83r36T/0868dcacc7c50ca2c7d35b27be81e5a9-removebg-preview-1.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <nav className='flex nav-menu justify-center items-center'>
                            <CustomLink to="/">Homepage</CustomLink>
                            <CustomLink to="/series">Series</CustomLink>
                            <CustomLink to="/Movies">Movies</CustomLink>
                            <CustomLink to="/new">New and Popular</CustomLink>
                            <CustomLink to="/list">My List</CustomLink>
                        </nav>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        <button className="btn btn-error btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIcdtj17kMFqzfaT4y9osveHnkYerHClu1A&usqp=CAU" alt='' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>Settings</a></li>
                                <li onClick={() => signOut(auth)}><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>






        </div>
    )
}

export default Navbar