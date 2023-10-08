import { Link,  } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Details = () => {
    

    return (

        <div className="">
            
            <div className="hero min-h-screen bg-gradient-to-r from-slate-400 via-violet-500 to-blue-700">
                <div className="hero-content flex-col lg:flex-row gap-96">
                    <img src='https://i.ibb.co/dM55d0N/Tech-Expo-2023.jpg' className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-white">Tech Expo 2023</h1>
                        <p className="py-6 text-xl text-white">Join us for the most exciting tech expo of the year. Explore the latest gadgets, innovations, and trends in technology. Dive into immersive demonstrations of cutting-edge virtual reality and witness live presentations by industry leaders. This is your chance to get hands-on with the future of technology.</p>
                        <Link to='/'><button className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;