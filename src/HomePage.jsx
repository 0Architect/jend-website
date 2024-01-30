import Navbar from "./Navbar";
import { useState, useEffect } from 'react'


const HomePage = () => {
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowPage(true);
        }, 100);

        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    function handleOnMouseOver(e)
    {
        e.target.classList.add('link');
    }

    function handleOnMouseLeave(e)
    {
        e.target.classList.remove('link');
    }

    return ( 
    <div className={`page ${showPage ? 'show' : ''}`}>
        <section className="HomePage">
            <div className="content">
                <div className="top-content">
                    <h1 className="Montserrat">Jend Homes</h1>
                    <h2 className="Raleway">Series A</h2>
                </div>
                <div className="button">
                    <button onMouseOver={(e)=>{handleOnMouseOver(e)}} onMouseLeave={(e)=>{handleOnMouseLeave(e)}}>Custom Order</button>
                    <button onMouseOver={(e)=>{handleOnMouseOver(e)}} onMouseLeave={(e)=>{handleOnMouseLeave(e)}}>Learn More</button>
                </div>
            </div>
            <div className="caption">
                <p className="Nunito">Photo by 
                    <a className="link" href="https://unsplash.com/@rarchitecture_melbourne?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">R ARCHITECTURE</a> on <a className="link" href="https://unsplash.com/photos/brown-and-white-wooden-house-near-green-trees-during-daytime-2gDwlIim3Uw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </p>
            </div>
        </section>
        <section className="HomePage series-b">
            <div className="content">
                <div className="top-content">
                    <h1 className="Montserrat">Jend Homes</h1>
                    <h2 className="Raleway">Series B</h2>
                </div>
                <div className="button">
                    <button onMouseOver={(e)=>{handleOnMouseOver(e)}} onMouseLeave={(e)=>{handleOnMouseLeave(e)}}>Custom Order</button>
                    <button onMouseOver={(e)=>{handleOnMouseOver(e)}} onMouseLeave={(e)=>{handleOnMouseLeave(e)}}>Learn More</button>
                </div>
            </div>
            <div className="caption">
                <p className="Nunito">Photo by 
                    <a className="link" href="https://unsplash.com/@rarchitecture_melbourne?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">R ARCHITECTURE</a> on <a className="link" href="https://unsplash.com/photos/brown-and-white-concrete-building-near-green-trees-during-daytime-GGupkreKwxA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </p>
            </div>
        </section>
        <section className="HomePage plug-and-play">
            <div className="darken">
            <div className="content">
                <div className="top-content">
                    <h1 className="Montserrat">Jend Homes</h1>
                    <h2 className="Raleway">Plug-and-Play</h2>
                </div>
                <div className="button">
                    <button onMouseOver={(e)=>{handleOnMouseOver(e)}} onMouseLeave={(e)=>{handleOnMouseLeave(e)}}>Custom Order</button>
                    <button onMouseOver={(e)=>{handleOnMouseOver(e)}} onMouseLeave={(e)=>{handleOnMouseLeave(e)}}>Learn More</button>
                </div>
            </div>
            <div className="caption">
                <p className="Nunito">
                    Photo by 
                    <a className="link" href="https://unsplash.com/@rarchitecture_melbourne?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">R ARCHITECTURE</a> on <a className="link" href="https://unsplash.com/photos/brown-wooden-house-near-green-trees-during-daytime-Y8MJFQYYjh8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </p>
            </div>
            </div>
        </section>
    </div>
     );
}
 
export default HomePage;