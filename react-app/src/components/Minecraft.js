import React from "react";
import Header from "./Header";

const Minecraft = React.forwardRef((props, ref) => {

    const online = {
        backgroundColor: 'green',
    };

    const offline = {
        backgroundColor: 'red',
    }



    return (
        <>
            <div className="container-fluid p-4 m-0 minecraft" ref={ref}>
                <Header title={"Minecraft - " + (!props.ip ? "{serverIp}" : props.ip)} />
                <div className="row w-100 mc-row m-0 d-flex justify-content-center text-light">

                    <div className="col-12 col-md-6 col-sm-12 h-md-100 h-sm-50 mc-col p-3">
                        <div className="mc-card rounded w-100 h-100 p-4 m-0 d-flex">
                            <div className="mc-card-info my-auto w-100">
                                <span className="w-100 d-block text-center mb-1"><b>Server Status:</b>&nbsp;<span className="status rounded" style={props.online === true ? online : offline}>{props.online === true ? "Online" : "Offline"}</span></span>
                                <span className="w-100 d-block text-center mb-1"><b>Current players: </b> &nbsp; {props.playersCurrent}</span>
                                <span className="w-100 d-block text-center"><i>Version {props.version}</i></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Minecraft;