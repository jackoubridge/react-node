import Header from "./Header";

import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"

const Gallery = (props) => {
    return (
        <>
            <div className="container-fluid p-4 gallery">
                <Header title="Gallery" />

                <div id="carousel" className="carousel slide rounded" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner rounded">
                        <div className="carousel-item active">
                            <img className="d-block w-100 rounded" src={image1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 rounded" src={image2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 rounded" src={image3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
};

export default Gallery;