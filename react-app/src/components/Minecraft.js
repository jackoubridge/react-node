import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";

const Minecraft = React.forwardRef((props, ref) => {

    const [responseData, setResponseData] = useState(null);

    const handlePostRequest = async () => {
    try {
        const response = await axios.post('http://localhost:8080/ip', {
        });

        setResponseData(response.data.data);
    } catch (error) {
        console.error('Error:', error);
    }
    };

    useEffect(() => {
    handlePostRequest();
    }, []);

    return (
        <>
        <div className="container-fluid p-4 m-0 minecraft" ref={ref}>
            <Header title={!responseData ? "{serverIp}" : responseData}/>
            <div className="row w-100 m-0 d-flex justify-content-center">
                <div className="col mc-col rounded"></div>
                <div className="col mc-col rounded"></div>
                <div className="col mc-col rounded"></div>
                <div className="col mc-col rounded"></div>
            </div>
        </div>
        </>
    )
});

export default Minecraft;