import { Link,  } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";


const Details6 = () => {
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
                    'You will be notify soon ',
                    'success'
                )
            }
        })
    }

    return (

        <div className="">
            
            <div className="hero min-h-screen bg-gradient-to-r from-slate-400 via-violet-500 to-blue-700">
                <div className="hero-content flex-col lg:flex-row gap-96">
                    <img src='https://i.ibb.co/1004Z2t/Tech-Talk-Webinar.jpg' className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-white">Tech Talk Webinar</h1>
                        <p className="py-6 text-xl text-white">Join industry experts as they discuss the future of technology. Gain insights and knowledge from thought leaders in fields like artificial intelligence, blockchain, and quantum computing. Whether you're a tech enthusiast or a business leader, the Tech Talk Webinar is your gateway to understanding the latest technological advancements.</p>
                        <Link to='/'><button className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Back</button></Link><br /> <br />
                        <button onClick={popup} className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Participate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details6;