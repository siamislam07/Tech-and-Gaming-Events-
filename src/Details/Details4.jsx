import { Link, } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";


const Details4 = () => {

    const popup = () => {
        // Swal.fire({
        //     position: 'top-bottom',
        //     icon: 'success',
        //     title: 'Your work has been saved',
        //     showConfirmButton: false,
        //     timer: 1000
        // })
        Swal.fire({
            title: 'Are you sure?',
            text: "Want To Participate",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Thank You',
                    'You will be notify via e-mail soon',
                    'success'
                )
            }
        })
    }


    return (

        <div className="">

            <div className="hero min-h-screen bg-gradient-to-r from-slate-400 via-violet-500 to-blue-700">
                <div className="hero-content flex-col lg:flex-row gap-60">
                    <img src='https://i.ibb.co/hK17NDR/Cybersecurity-Conference.jpg' className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-white">Cybersecurity Conference</h1>
                        <p className="py-6 text-xl text-white">Join us for the most exciting tech expo of the year. Explore the latest gadgets, innovations, and trends in technology. Dive into immersive demonstrations of cutting-edge virtual reality and witness live presentations by industry leaders. This is your chance to get hands-on with the future of technology.</p>
                        <Link to='/'><button className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Back</button></Link><br /> <br />
                        <button onClick={popup} className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Participate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details4;