import { useLoaderData } from "react-router-dom";
import TechCard from "./TechCard";
import Footer from "./Footer";

const Tech = () => {
    const tech = useLoaderData()
    console.log(tech);
    return (
        <div className="bg-gradient-to-r from-slate-300 via-slate-500 to-slate-700">
            {
                tech.map(blogs =><TechCard
                    key={blogs.id}
                    blog={blogs}
                ></TechCard>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Tech;