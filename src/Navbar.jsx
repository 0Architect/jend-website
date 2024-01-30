import {useState, useEffect} from 'react';

const Navbar = () => {
    const [showHousesMiniMenu, setHousesMiniMenu] = useState(false);
    const [showAboutMiniMenu, setAboutMiniMenu] = useState(false);
    const [showListingsMiniMenu, setListingsMiniMenu] = useState(false);

    return ( 
        <div className="navbar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="logo Source-Sans-3">JEND</div>
            <div className="content Source-Sans-3">
                <a href="#" onMouseEnter={() => setHousesMiniMenu(true)} onMouseLeave={() => setHousesMiniMenu(false)}>Houses</a>
                <a href="#" onMouseEnter={() => setHousesMiniMenu(true)} onMouseLeave={() => setHousesMiniMenu(false)}>About</a>
                <a href="#" onMouseEnter={() => setHousesMiniMenu(true)} onMouseLeave={() => setHousesMiniMenu(false)}>Listings</a>
            </div>
            <div className="support">
                <span class="material-symbols-outlined">
                    contact_support
                </span>
                <span class="material-symbols-outlined">
                    language
                </span>
                <span class="material-symbols-outlined">
                    account_circle
                </span>
            </div>
            {showHousesMiniMenu && <div className="mini-menu"
            onMouseEnter={() => setHousesMiniMenu(true)} onMouseLeave={() => setHousesMiniMenu(false)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores quaerat 
                voluptates dignissimos dicta assumenda consectetur, minus, 
                error voluptatum sint magni molestias rem? Distinctio cum laborum aperiam nobis facilis culpa.
            </div>}
            {showAboutMiniMenu && <div className="mini-menu"
            onMouseEnter={() => setAboutMiniMenu(true)} onMouseLeave={() => setAboutMiniMenu(false)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores quaerat 
                voluptates dignissimos dicta assumenda consectetur, minus, 
                error voluptatum sint magni molestias rem? Distinctio cum laborum aperiam nobis facilis culpa.
            </div>}
            {showListingsMiniMenu && <div className="mini-menu"
            onMouseEnter={() => setListingsMiniMenu(true)} onMouseLeave={() => setListingsMiniMenu(false)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores quaerat 
                voluptates dignissimos dicta assumenda consectetur, minus, 
                error voluptatum sint magni molestias rem? Distinctio cum laborum aperiam nobis facilis culpa.
            </div>}
        </div>
     );
}
 
export default Navbar;