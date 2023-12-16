import React from 'react';
import Header from "./Header";

const Minecraft = React.forwardRef((props, ref) => {
    return(
        <>
        <div className="container-fluid p-4 minecraft" ref={ref}>
            <Header title="Minecraft" ip="mc.jiggz.net"/>
            <div className='container-fluid mc-info rounded'></div>
        </div>
        </>
    )
});

export default Minecraft;