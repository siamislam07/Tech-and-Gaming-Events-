

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";



import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";







// const github = new GithubAuthProvider

const CreateAccount = () => {
   

    const handleRegister = e => {
        e.preventDefault()
        
        
    }

    

   


    return (
        <div>

            <main className="">
                <section className=" bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 w-full mx-auto text-center min-h-screen p-1">
                    <form className="mt-56 mb-4 md:w-3/4 lg:w-1/2 mx-auto shadow-lg rounded-2xl" onSubmit={handleRegister}>
                        <h3 className="text-4xl text-white italic mb-8 font-medium ">Welcome to your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block"><span className="relative text-white">Register-Page</span></span></h3>

                        <div className="space-y-5">
                            <input className="w-9/12 h-10 px-3  rounded-md" type="name" name="name" placeholder="Your Name " />

                            <input className="w-9/12 h-10 px-3  rounded-md" type="email" name="email" placeholder="Your Email Address" />
                            <input className="w-9/12 h-10 px-3  rounded-md" type="password" name="password" placeholder="Your password " />
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
                                <button  className="btn btn-square btn-outline border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                                    <FcGoogle className="text-2xl" />
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-square btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
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