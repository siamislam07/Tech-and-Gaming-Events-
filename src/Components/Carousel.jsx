
const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative h-[90vh] w-full">
                <img src="https://th.bing.com/th/id/R.0461cf981ccd77c830d91774e3f9af0c?rik=PGYntqZfmeHSxg&pid=ImgRaw&r=0" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[90vh] w-full">
                <img src="https://www.eventsforgamers.com/wp-content/uploads/2023/09/Banner-Women-in-Games-Annual-Global-Conference-2023.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[90vh] w-full">
                <img src="https://www.eventsforgamers.com/wp-content/uploads/2021/11/Serious-Play-Conference.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-[90vh] w-full">
                <img src="https://th.bing.com/th/id/R.b583a325b3105c7c957219f8269bfb36?rik=DjW7OZK%2bJ7p8Wg&pid=ImgRaw&r=0&sres=1&sresct=1" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;