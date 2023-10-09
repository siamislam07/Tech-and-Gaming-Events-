
import Carousel from './Carousel'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Footer from './Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';


const Home = () => {

    const [card, setCard] = useState([])

    // console.log(card);

    useEffect(() => {
        fetch('./home-data.json')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])



    // {
    //     card?.map(cards =>)
    // }

    // console.log(card[1]?.title);


    return (
        <>
            <Carousel></Carousel>
            <h3 className="text-5xl text-center mt-28 italic mb-6 font-medium ">UpComing <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-600 relative inline-block"><span className="relative text-white">Tech&Game Updates</span></span></h3>
            <div className='max-w-[1500px] md:max-w-[1050px] lg:max-w-[1500px] mx-auto mb-56 '>

                <div className='mb-24  flex justify-around mt-20 items-center'>
                    <div className='w-96 h-80  ' data-aos='fade-right'>
                        <img className='rounded-lg shadow-lg h-full' src={card[0]?.image} alt="" />
                    </div>
                    <div className='w-96 h-56 space-y-4' data-aos='fade-left'>
                        <p className='font-mono text-5xl font-semibold' > {card[0]?.title}</p>
                        <p className='text-xl font-thin '>{card[0]?.description}<Link to="/details/1" className='ml-3 text-violet-700 font-bold'>Reade More..</Link></p>
                    </div>
                </div>

                <div className=' mb-7 flex justify-between mt-20 items-center'>
                    <div className='w-96 h-56 space-y-4' data-aos=''>
                        <p className='font-mono text-5xl font-semibold' > {card[1]?.title}</p>
                        <p className='text-xl font-thin leading-8'>{card[1]?.description}<Link to="/details/2" className='ml-3 text-violet-700 font-extrabold'>Reade More..</Link></p>
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
                        <p className='text-xl font-thin'>{card[2]?.description}<Link to="/details/3" className='ml-3 text-violet-700 font-extrabold'>Reade More..</Link></p>
                    </div>
                </div>

                <div className='flex justify-between mt-72'>
                    <div className='w-96 h-56 space-y-4' data-aos='fade-right'>
                        <p className='font-mono text-5xl font-semibold' > {card[3]?.title}</p>
                        <p className='text-xl font-thin'>{card[3]?.description}<Link to="/details/4" state={{ fromHome: { card } }} className='ml-3 text-violet-700 font-extrabold'>Reade More..</Link></p>
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
                        <p className='text-xl font-thin'>{card[4]?.description}<Link to="/details/5" state={{ fromHome: { card } }} className='ml-3 text-violet-700 font-extrabold'>Reade More..</Link></p>
                    </div>
                </div>

                <div className='flex justify-between mt-56'>
                    <div className='w-96 h-56 space-y-4' data-aos='zoom-out'>
                        <p className='font-mono text-5xl font-semibold' > {card[5]?.title}</p>
                        <p className='text-xl font-thin'>{card[5]?.description}<Link to="/details/6" state={{ fromHome: { card } }} className='ml-3 text-violet-700 font-extrabold'>Reade More..</Link></p>
                    </div>
                    <div className='w-96 h-56  shadow-lg' data-aos='fade-left'>
                        <img className="rounded-lg shadow-lg h-full mt-5" src={card[5]?.image} alt="" />
                    </div>
                </div>
            </div>

            {/* hackethon banner here */}
            <div className=' mx-auto mb-32 mt-80'>
                <p className='text-center text-7xl mb-10 font-serif font-extrabold underline '>Join Our Hackathon</p>
                <img src="https://i.ibb.co/NL8Pf7J/hackthon.jpg" alt="" />
            </div>

            {/* FAQ section */}

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:gap-24 lg:flex-row">
                        <img src="https://i.ibb.co/Cv3rBRv/OIG.jpg" className="w-3/4 lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title text-xl font-medium">
                                    How do I register for the event?
                                </div>
                                <div className="collapse-content">
                                    <p>First You Have to Login than there is a Read More link go to that link in that there is a participate and buy button.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Is there a registration deadline?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes. The Registration End on 31 October </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                Can I bring my own equipment or devices to the event?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                Will there be Wi-Fi available at the venue?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                Can I volunteer or participate in event activities?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes. If you are interest then send us a mail</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                Are there age restrictions for attending the event?
                                </div>
                                <div className="collapse-content">
                                    <p>No. if you are interest about the topic then join </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </>
    );
};

export default Home;