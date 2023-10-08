import { Link,  } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";


const Details5 = () => {
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
            text: "Want To Buy It",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Thank You',
                    'You will be notify ',
                    'success'
                )
            }
        })
    }

    return (

        <div className="">
                
            <div className="hero min-h-screen bg-gradient-to-r from-slate-400 via-violet-500 to-blue-700">
                <div className="hero-content flex-col lg:flex-row gap-60">
                    <img src='https://i.ibb.co/Y8KT0yF/Indie-Game-Showcase.jpg' className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-white">Indie Game Showcase</h1>
                        <p className="py-6 text-xl text-white">Discover hidden gems in the world of indie gaming. Meet indie developers and play their creations. Immerse yourself in unique and innovative gameplay experiences. From pixel art classics to cutting-edge 3D adventures, the Indie Game Showcase is a celebration of creativity and independent game development.</p>
                        <Link to='/'><button className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Back</button></Link><br /> <br />
                        <button onClick={popup} className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Buy It</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details5;