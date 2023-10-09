

import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { useContext, useState } from "react";

import { AuthContext } from "../providers/AuthProvider";

import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";







// const github = new GithubAuthProvider

const CreateAccount = () => {
    const [error, setError] = useState('')
    const [succes, setSuccess] = useState('')

    const navigate = useNavigate()

    

    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const url = form.get('url')
        const email = form.get('email')
        const password = form.get('password')
        
        if (password.length < 6 ) {
            setError('Password should be at least 6 characters or longer')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setError('Password should have at least one upper case');
            return
        }
        else if(!/[^a-zA-Z0-9._-]/.test(password)){
            setError('Password should have at least one special character');
            return
        }

        setError('')
        setSuccess('')

        createUser(email, password)
            .then(result => {
                

                // update name
                updateProfile(result.user,{
                    displayName: name,
                    photoURL : url
                })
                .then()
                .catch()
                navigate('/')
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You have Login successfully',
                    
                }))
                e.target.reset()
            })
            .catch(error => {
                
                setError(error.message)
                e.target.reset()
            })

    }

    const handleGoogleRegister = () => {
        googleSignIn()
            .then(result => {
                navigate('/')
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You have Login successfully',
                    
                }))
            })
            .catch(error => {
                
                setError(error.message)
            })
    }

    const handleGitSignIn = () => {
        githubSignIn()
            .then(result => {
                navigate('/')
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You have Login successfully',
                    
                }))
            })
            .catch(error => {
                
                setError(error.message)
            })
    }





    return (
        <div>

            <main className="">
                <section className=" bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 w-full mx-auto text-center min-h-screen p-1">
                    <form className="mt-56 mb-4 md:w-3/4 lg:w-1/2 mx-auto shadow-lg rounded-2xl" onSubmit={handleRegister}>
                        <h3 className="text-4xl text-white italic mb-8 font-medium ">Welcome to your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block"><span className="relative text-white">Register-Page</span></span></h3>

                        <div className="space-y-5">
                            <input className="w-9/12 h-10 px-3  rounded-md" type="name" name="name" placeholder="Your Name " />
                            <input className="w-9/12 h-10 px-3  rounded-md" type="url" name="url" placeholder="Your PhotoUrl " />

                            <input className="w-9/12 h-10 px-3  rounded-md" type="email" required name="email" placeholder="Your Email Address" />
                            <input className="w-9/12 h-10 px-3  rounded-md" type="password" required name="password" placeholder="Your password " />
                            {
                                error && <p className="text-white text-xl border border-red-300 w-3/5 mx-auto">{error}</p>
                            }
                            {
                                succes && {succes}
                            }
                            <div className="flex items-center justify-center gap-7 pb-4">
                                <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg" >Register</button>
                                <Link to="/login">
                                    <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Login</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <p>Already have an account <sup className="text-2xl text-white">↑</sup> click there</p>
                    <div className="mt-8">
                        <p className="font-bold">Or Also with</p>
                        <div className="flex gap-6 justify-center mt-2">
                            <div>
                                <button onClick={handleGoogleRegister} className="btn btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <FcGoogle className="text-2xl" />
                                </button>
                            </div>
                            <div>
                                <button onClick={handleGitSignIn} className="btn btn-square btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <BsGithub className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CreateAccount;