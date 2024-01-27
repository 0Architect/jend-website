const HomePage = () => {
    function handleOnMouseOver(e)
    {
        e.target.classList.add('link');
    }

    function handleOnMouseLeave(e)
    {
        e.target.classList.remove('link');
    }

    return ( 
        <div className="HomePage">
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
        </div>
     );
}
 
export default HomePage;