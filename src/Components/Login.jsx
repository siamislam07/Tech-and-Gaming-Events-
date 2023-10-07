import { Link } from "react-router-dom";

const Login = () => {


    const handlelogin = () =>{

    }
    return (
        <div>
            
            <main className="">
                <section className=" bg-gradient-to-r from-slate-300 via-blue-500 to-blue-700 w-full mx-auto  text-center p-52">
                    <form className="mt-28 mb-4 md:w-3/4 lg:w-1/2 mx-auto shadow-lg rounded-2xl" onSubmit={handlelogin}>
                        <h3 className="text-3xl text-white italic mb-6 font-medium ">Welcome to your <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block"><span className="relative text-white">Login-Page</span></span></h3>

                        <div className="">

                            <input className="w-9/12 h-10  mb-5 px-3 rounded-md" type="email" name="email" id="user-email" placeholder="Your Email Address" />
                            <input className="w-9/12 h-10 px-3 mb-2 rounded-md" type="password" name="password" id="user-pass" placeholder="Your password " />
                            <div className="flex items-center justify-center gap-5 mt-7 pb-4">
                                <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Login</button>
                                <Link to="/CreateAccount">
                                    <button id="btn-submit" className="bg-gray-50 hover:bg-sky-100  px-8 py-2 font-medium rounded-lg  " >Register</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <p>Don't have an account <sup className="text-2xl text-white">↑</sup> click there</p>
                </section>
            </main>
        </div>
    );
};

export default Login;