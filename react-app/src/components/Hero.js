import React from 'react';

const Hero = React.forwardRef(({ scrollToMC }, ref) => {

    return(
        <>
        <div className="container-fluid p-4 hero">
            <div className="row m-0 p-0 w-100 hero-row d-flex">
                <div className="col-md-8 col-sm-12 m-0 p-0 hero-col d-flex justify-content-center">
                    <div className="hero-left my-auto p-4 rounded">
                        <span className="tagline text-light">Immersive Worlds.<br></br>Infinite Stories.</span>
                        <button type="button" className="btn btn-primary mt-3 mb-3" onClick={scrollToMC}>Start your journey</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
});

export default Hero;