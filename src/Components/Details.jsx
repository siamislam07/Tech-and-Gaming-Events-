import { Link, useLocation, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const Details = () => {
    // const location = useLocation()
    // const { fromHome } = location.state
    // const data = fromHome.card
    const { id } = useParams()
    const [cardDetails, setCardDetails] = useState(null)
    console.log(cardDetails);

    useEffect(() =>{

        const selected = cardDetails?.find(card => card.id == id)

        setCardDetails(selected)

    }, [id, cardDetails])

    if (!cardDetails) {
        return <span className="loading loading-bars loading-lg min-h-screen "></span>
    }

    console.log(cardDetails);

    return (

        <div className="">
            <NavBar ></NavBar>
            <div className="hero min-h-screen bg-gradient-to-r from-slate-400 via-violet-500 to-blue-700">
                <div className="hero-content flex-col lg:flex-row gap-96">
                    <img src={cardDetails.image} className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold font-serif text-white">{cardDetails.title}</h1>
                        <p className="py-6 text-xl text-white">{cardDetails.description}</p>
                        <Link to='/'><button className="btn btn-square w-full text-white btn-outline transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;