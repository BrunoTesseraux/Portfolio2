import "./Nav.scss"
const Nav = () => {
    return (
    <div className="nav">
        <ul className="navigation">
            <p>&lt;About me&gt;</p>
            <p>&lt;My Projects&gt;</p>
            <p>&lt;Contact&gt;</p>
        </ul>
        <ul className="profiles">
            <a href="Github">Git</a>
            <a href="linkedin">LinkedIn</a>
            <button>get in touch</button>
        </ul>
    </div> );
}

export default Nav;