import Header from "./Header";

const Gallery = (props) => {
    return (
        <>
        <div className="container-fluid p-4 gallery">
            <Header title="Gallery"/>

            <div id="carousel" className="carousel slide rounded" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner rounded">
                <div className="carousel-item active">
                <img className="d-block w-100 rounded" src="https://i.redd.it/r8cdbvfefbf51.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 rounded" src="https://i.pinimg.com/originals/16/41/24/16412467f92e3dfbbade7a105c2397ba.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 rounded" src="https://i.redd.it/p2r6ga8m9ho11.png" alt="Third slide"/>
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