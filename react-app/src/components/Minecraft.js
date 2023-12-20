import React from "react";
import Header from "./Header";

const Minecraft = React.forwardRef((props, ref) => {

    return (
        <>
        <div className="container-fluid p-4 m-0 minecraft" ref={ref}>
            <Header title={!props.ip ? "{serverIp}" : props.ip}/>
            <div className="row w-100 m-0 d-flex justify-content-center text-light">
                <div className="col mc-col p-4 rounded d-flex">
                    <span className="w-100">Server Status: {props.online === true ? "Online" : "Offline"}</span>
                </div>
            </div>
        </div>
        </>
    )
});

export default Minecraft;