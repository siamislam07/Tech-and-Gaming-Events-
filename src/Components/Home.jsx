
import Carousel from './Carousel'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <>
            <Carousel></Carousel>
            <h3 className="text-5xl text-center mt-10 italic mb-6 font-medium ">UpComing <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-600 relative inline-block"><span className="relative text-white">Game-Events</span></span></h3>
            <div className='max-w-[1500px] mx-auto'>
                <div className='flex justify-between mt-20'>
                    <div className='w-28 h-28 border bg-red-600' data-aos='fade-right'>Img</div>
                    <div>Text</div>
                </div>
                <div className='flex justify-between mt-20'>
                    <div>Text</div>
                    <div className='w-28 h-28 border bg-red-600' data-aos='fade-left'>Img</div>
                </div>
                <div className='flex justify-between mt-20'>
                    <div className='w-28 h-28 border bg-red-600' data-aos='fade-right'>Img</div>
                    <div>Text</div>
                </div>
                <div className='flex justify-between mt-20'>
                    <div className='w-28 h-28 border bg-red-600' data-aos='fade-right'>Img</div>
                    <div>Text</div>
                </div>
            </div>


        </>
    );
};

export default Home;