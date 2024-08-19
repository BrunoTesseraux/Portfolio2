import { useEffect, useState } from "react";
import CodeKlammern from "../CodeKlammern/CodeKlammern";
import "./Header.scss"

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
            document.body.style.setProperty('--scroll', scrollValue - 0.0083231109705976);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    useEffect(() => {
        const handleScroll = (event) => {
        console.log('Page scrolled:', window.pageYOffset);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return ( 
    <header id="about">
        <div className="profile">
            <div className="name">
                <CodeKlammern content="developer">
                    <h1>Bruno Tesseraux</h1>
                </CodeKlammern>
            </div>
            <img src="./profilePic.PNG" alt="" />
            <div className="short-description">
            <CodeKlammern content="about me">
            <p className="about-me">Hey! Ich bin Bruno, ein sehr vielseitig interessierter Fullstack-Developer</p>
            </CodeKlammern>
            </div>
        </div>
        <img className="verlauf" src="./verlauf.png" alt="" />
    </header> );
}
 
export default Header;