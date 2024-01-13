import React, { useEffect } from "react";
import './Hardware.css';

function Hardware() {
    useEffect(() => {
        document.title =`${process.env.REACT_APP_TITLE}سخت اقزار`
    }, [])
    return (
        <>
            <div className="App-header">
                Hardware
            </div>
        </>
    );
}
export default Hardware;