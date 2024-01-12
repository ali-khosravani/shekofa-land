import React, { useEffect } from "react";
import './Hardware.css';

function Hardware() {
    useEffect(() => {
        document.title = 'سخت اقزار'
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