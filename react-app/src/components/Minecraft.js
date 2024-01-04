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
                <Header title="Minecraft" />
                <div className="row w-100 mc-row m-0 d-flex justify-content-center text-light">

                    <div className="mc-col p-3">
                        <div className="mc-card rounded w-100 h-100 p-4 m-0 d-flex">
                            <div className="mc-card-info my-auto w-100 p-2">
                                <span className="w-100 d-block mb-1"><b>Server Address: </b>{!props.ip ? "{serverIp}" : props.ip}</span>
                                <span className="w-100 d-block mb-1"><b>Server Status: </b><span className="status rounded" style={props.online === true ? online : offline}>{props.online === true ? "Online" : "Offline"}</span></span>
                                <span className="w-100 d-block mb-1"><b>Currently Online: </b>{props.playersCurrent}</span>
                                <span className="w-100 d-block"><b>Version: </b>{props.version}</span>
                                <br></br>
                                <span className="w-100 d-block">Please consider donating to support the server.</span>
                                <a href="https://ko-fi.com/jiggzmc" target="_blank" type="button" class="btn btn-lg btn-primary">Donate</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Minecraft;