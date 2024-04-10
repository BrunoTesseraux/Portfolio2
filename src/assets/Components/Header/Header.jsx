import CodeKlammern from "../CodeKlammern/CodeKlammern";
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
            <img src="./Portrait.jpg" alt="" />
            <div className="short-description">
            <CodeKlammern content="about me">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi expedita iste sapiente aut molestias, fuga sequi eos repudiandae accusamus accusantium illum sed earum voluptatibus, porro fugit quisquam temporibus omnis.</p>
            </CodeKlammern>
            </div>
        </div>
        <div className="profile-overlay"></div>
    </header> );
}
 
export default Header;