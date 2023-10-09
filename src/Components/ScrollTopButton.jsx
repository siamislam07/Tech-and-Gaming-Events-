import { useEffect, useState } from "react";

const ScrollTopButton = () => {
    const [backToTop, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 5500) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {backToTop && (
                <button onClick={scrollUp} className="fixed scroll-smooth bottom-12 right-24 btn btn-outline btn-default pt-2 border-b-slate-950 border-neutral normal-case text-lg text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white">△</button>
            )}
        </div>
    );
};

export default ScrollTopButton;