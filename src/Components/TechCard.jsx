
const TechCard = ({ blog }) => {
    const { title, image_url, description } = blog;
    return (
        <div className="">
            
                <div className="card pt-36 w-3/5 mx-auto border-b-2  mb-10  ">
                    <img className=" rounded-t-lg" src={image_url} alt="Shoes" />
                    <div className="card-body hover:shadow-lg space-y-5">
                        <h2 className="card-title text-3xl font-mono">{title}</h2>
                        <p className="text-xl ">
                            {description}

                        </p>

                    </div>
                </div>
                
        </div>
    );
};

export default TechCard;