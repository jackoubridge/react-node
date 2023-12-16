import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = (props) => {
    const [responseData, setResponseData] = useState(null);

    const handlePostRequest = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api', {
        });

        setResponseData(response.data.data);
    } catch (error) {
        console.error('Error:', error);
    }
    };

    useEffect(() => {
    handlePostRequest();
    }, []);

    return(
        <>
        <div className="container-fluid text-light">
            <p>{!responseData ? "{responseData}" : responseData}</p>
        </div>
        </>
    )

}

export default MyComponent;