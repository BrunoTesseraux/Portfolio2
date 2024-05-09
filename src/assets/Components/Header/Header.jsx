import CodeKlammern from "../CodeKlammern/CodeKlammern";
import Nav from "../Nav/Nav";
import "./Header.scss"

const Header = () => {
    return ( 
    <header>
        <div className="profile">
            <div className="name">
                <CodeKlammern content="developer">
                    <h1>Bruno Tesseraux</h1>
                </CodeKlammern>
            </div>
            <img src="./profilePic.PNG" alt="" />
            <div className="short-description">
            <CodeKlammern content="about me">
            <p className="about-me">Hey! Ich bin Bruno, ein sehr vielseitig interresierter Fullstack-Developer</p>
            </CodeKlammern>
            </div>
        </div>
        <img className="verlauf" src="./verlauf.png" alt="" />
    </header> );
}
 
export default Header;