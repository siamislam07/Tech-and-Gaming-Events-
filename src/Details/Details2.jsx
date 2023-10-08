import { Link,  } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";


const Details2 = () => {

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
                <div className="hero-content flex-col lg:flex-row gap-96">
                    <img src='https://i.ibb.co/C2byHGB/Game-Con-2023.jpg' className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-white">GameCon 2023</h1>
                        <p className="py-6 text-xl text-white">GameCon is back with a bang! Get ready for three days of gaming, cosplay, and esports tournaments. Experience the thrill of competitive gaming, meet your favorite streamers, and participate in epic cosplay competitions. Whether you're a casual gamer or a hardcore esports fan, GameCon 2023 has something for everyone.</p>
                        <Link to='/'><button className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Back</button></Link><br /><br />
                        <button onClick={popup} className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Buy it</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details2;