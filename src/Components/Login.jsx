
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { Result } from "postcss";






const Login = () => {
    const [error, setError] = useState('')
    const [succes, setSuccess] = useState('')
    
    const { user, signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    console.log(user?.photoURL);
    const navigate = useNavigate()

    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        setError('')
        setSuccess('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You Login successfully',
                    
                }))
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
                e.target.reset()
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You Login successfully',
                    
                }))
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGitSignIn = () => {
        githubSignIn()
            .then(result => {
                setSuccess(Swal.fire({
                    icon: 'success',
                    title: 'Great',
                    text: 'You Login successfully',
                    
                }))
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }


    return (
        <div>

            <main className="">
                <section className=" bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 w-full mx-auto  text-center p-52 min-h-screen">
                    <form className="mt-28 mb-4 md:w-3/4 lg:w-1/2 mx-auto shadow-lg rounded-2xl" onSubmit={handlelogin}>
                        <h3 className="text-3xl text-white italic mb-6 font-medium ">Welcome to your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block"><span className="relative text-white">Login-Page</span></span></h3>

                        <div className="">

                            <input className="w-9/12 h-10  mb-5 px-3 rounded-md" type="email" name="email" placeholder="Your Email Address" />
                            <input className="w-9/12 h-10 px-3 mb-4 rounded-md" type="password" name="password" placeholder="Your password " />
                            {
                                error && <p className="text-white text-xl border border-red-300 w-3/5 mx-auto">{error}</p>
                            }
                            {
                                succes && {succes}
                            }
                            <div className="flex items-center justify-center gap-5 mt-7 pb-4">
                                <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Login</button>
                                <Link to="/CreateAccount">
                                    <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Register</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <p>Don't have an account <sup className="text-2xl text-white">↑</sup> click there</p>
                    <div className="mt-8">
                        <p className="font-bold">Or Also with</p>
                        <div className="flex gap-6 justify-center mt-2">
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
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

export default Login;