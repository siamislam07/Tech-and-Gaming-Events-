import { useLoaderData } from "react-router-dom";
import TechCard from "./TechCard";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Tech = () => {
    const [backToTop, setBackToTopButton] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 300) {
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    },[])
    
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const tech = useLoaderData()
    // console.log(tech);
    return (
        <div className="bg-gradient-to-r from-slate-300 via-slate-500 to-slate-700">
            {
                tech.map(blogs =><TechCard
                    key={blogs.id}
                    blog={blogs}
                ></TechCard>)
            }
            
            <Footer></Footer>
            {backToTop && (
                <button onClick={scrollUp} className="fixed scroll-smooth bottom-12 right-24 btn btn-outline btn-default pt-2 border-b-slate-950 border-neutral normal-case text-lg text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">△</button>
            )}
        </div>
    );
};

export default Tech;