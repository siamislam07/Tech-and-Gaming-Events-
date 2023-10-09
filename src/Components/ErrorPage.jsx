import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center w-full h-[80vh]">
            <h1 className="text-5xl">Oops!</h1>
            <p className="text-3xl">Not Found Any Pages</p>
            <Link><button className="btn ">Home</button></Link>
        </div>
    );
};

export default ErrorPage;