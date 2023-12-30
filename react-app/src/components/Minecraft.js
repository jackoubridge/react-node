import React from "react";
import Header from "./Header";

const Minecraft = React.forwardRef((props, ref) => {

    const online = {
        backgroundColor: 'green',
    };

    const offline = {
        backgroundColor: 'red',
    }

    console.log(props.playersCurrent);

    return (
        <>
            <div className="container-fluid p-4 m-0 minecraft" ref={ref}>
                <Header title={!props.ip ? "{serverIp}" : props.ip} />
                <div className="row w-100 mc-row m-0 d-flex justify-content-center text-light">

                    <div className="col-12 col-md-6 col-sm-12 h-md-100 h-sm-50 mc-col p-3">
                        <div className="mc-card rounded w-100 h-100 p-4 m-0 d-flex">
                            <div className="mc-card-info my-auto w-100">
                                <span className="w-100 d-block text-center rounded mb-1"><b>Server Status:</b>&nbsp;<span className="p-2 rounded" style={props.online === true ? online : offline}>{props.online === true ? "Online" : "Offline"}</span></span>
                                <span className="w-100 d-block text-center"><b>Current players: </b> &nbsp; {props.playersCurrent}</span>
                                <span className="w-100 d-block text-center"><i>Version {props.version}</i></span>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12 m-0 p-0 h-md-100 h-sm-50 ads"></div>

                </div>
            </div>
        </>
    )
});

export default Minecraft;