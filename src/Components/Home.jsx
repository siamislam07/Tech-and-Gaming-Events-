
import Carousel from './Carousel'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Footer from './Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from './details';


const Home = () => {


    


    

    const [card, setCard] = useState([])

    useEffect(() => { 
        fetch('./home-data.json')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    // console.log(card[1]?.title);


    return (
        <>
            <Carousel></Carousel>
            <h3 className="text-5xl text-center mt-28 italic mb-6 font-medium ">UpComing <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-600 relative inline-block"><span className="relative text-white">Tech&Game Updates</span></span></h3>
            <div className='max-w-[1500px] md:max-w-[1050px] lg:max-w-[1500px] mx-auto mb-40 '>

                <div className='mb-24  flex justify-around mt-20 items-center'>
                    <div className='w-96 h-80  ' data-aos='fade-right'>
                        <img className='rounded-lg shadow-lg h-full' src={card[0]?.image} alt="" />
                    </div>
                    <div className='w-96 h-56 space-y-4' data-aos='fade-left'>
                        <p className='font-mono text-5xl font-semibold' > {card[0]?.title}</p>
                        <p className='text-xl font-thin '>{card[0]?.description}<Link to={`/details/${card[0]?.id}`} state={{ fromHome: { card } }} className='ml-3 text-violet-700'>Reade More..</Link></p>
                    </div>
                </div>

                <div className=' mb-7 flex justify-between mt-20 items-center'>
                    <div className='w-96 h-56 space-y-4' data-aos=''>
                        <p className='font-mono text-5xl font-semibold' > {card[1]?.title}</p>
                        <p className='text-xl font-thin leading-8'>{card[1]?.description}<Link to={`/details/${card[1]?.id}`} state={{ fromHome: { card } }} className='ml-3 text-violet-700'>Reade More..</Link></p>
                    </div>
                    <div className='w-96 h-96  shadow-lg' data-aos='fade-left'>
                        <img className="rounded-lg shadow-lg h-full" src={card[1]?.image} alt="" />
                    </div>
                </div>

                <div className='mb-7 flex justify-between mt-56 '>
                    <div className='w-96 h-56  shadow-lg' data-aos="fade-up-right">
                        <img className="rounded-lg shadow-lg h-full mt-7" src={card[2]?.image} alt="" />
                    </div>
                    <div className='w-96 h-56 space-y-4' data-aos=''>
                        <p className='font-mono text-5xl font-semibold' > {card[2]?.title}</p>
                        <p className='text-xl font-thin'>{card[2]?.description}<Link to={`/details/${card[2]?.id}`} state={{ fromHome: { card } }} className='ml-3 text-violet-700'>Reade More..</Link></p>
                    </div>
                </div>

                <div className='flex justify-between mt-72'>
                    <div className='w-96 h-56 space-y-4' data-aos='fade-right'>
                        <p className='font-mono text-5xl font-semibold' > {card[3]?.title}</p>
                        <p className='text-xl font-thin'>{card[3]?.description}<Link to={`/details/${card[3]?.id}`} state={{ fromHome: { card } }} className='ml-3 text-violet-700'>Reade More..</Link></p>
                    </div>
                    <div className='w-96 h-60  shadow-lg' data-aos='flip-left'>
                        <img className="rounded-lg shadow-lg h-full" src={card[3]?.image} alt="" />
                    </div>
                </div>

                <div className='flex justify-between mt-72'>
                    <div className='w-96 h-56  shadow-lg' data-aos='zoom-in-up'>
                        <img className="rounded-lg shadow-lg h-full mt-6" src={card[4]?.image} alt="" />
                    </div>
                    <div className='w-96 h-56 space-y-4' data-aos='fade-left'>
                        <p className='font-mono text-5xl font-semibold' > {card[4]?.title}</p>
                        <p className='text-xl font-thin'>{card[4]?.description}<Link to={`/details/${card[4]?.id}`} state={{ fromHome: { card } }} className='ml-3 text-violet-700'>Reade More..</Link></p>
                    </div>

                </div>

                <div className='flex justify-between mt-56'>
                    <div className='w-96 h-56 space-y-4' data-aos='zoom-out'>
                        <p className='font-mono text-5xl font-semibold' > {card[5]?.title}</p>
                        <p className='text-xl font-thin'>{card[5]?.description}<Link to={`/details/${card[5]?.id}`} state={{ fromHome: { card } }} className='ml-3 text-violet-700'>Reade More..</Link></p>
                    </div>
                    <div className='w-96 h-56  shadow-lg' data-aos='fade-left'>
                        <img className="rounded-lg shadow-lg h-full mt-5" src={card[5]?.image} alt="" />
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </>
    );
};

export default Home;