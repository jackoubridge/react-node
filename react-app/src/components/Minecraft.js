import React from 'react';
import Header from "../Header";

const Minecraft = React.forwardRef((props, ref) => {
    return(
        <>
        <div className="container-fluid p-4 minecraft" ref={ref}>
            <Header title="Minecraft"/>
        </div>
        </>
    )
});

export default Minecraft;