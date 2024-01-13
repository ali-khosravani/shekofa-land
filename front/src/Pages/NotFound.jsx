import React ,{useEffect} from "react";
import { Button } from "react-bootstrap";
import NotFound from 'assets/images/NotFound.png';

import './Pages.css';

function Home() {
    useEffect(()=>{
        document.title =`${process.env.REACT_APP_TITLE}404-Not Found`
    },[])
    return (
        <div className="App-not-found">
            <div className="text-center">
                <div>
                    <img src={NotFound} alt="Not Found" />
                </div>
                <p>متاسفیم!!! صفحه مورد نظر شما را پیدا نکردیم.</p>

                <Button variant="primary" href="/">بازگشت به صفحه نخست</Button>
            </div>
        </div>

    )
}
export default Home;