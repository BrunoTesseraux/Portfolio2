import "./Nav.scss"
const Nav = () => {
    return (
    <div className="nav">
        <ul className="navigation">
            <p onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&lt; About &gt;</p>
            <p onClick={() => document.getElementById('cv').scrollIntoView({ behavior: 'smooth' })}>&lt; CV &gt;</p>
            <p onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>&lt; Projects &gt;</p>
        </ul>
        <ul className="profiles">
            <a href="https://github.com/BrunoTesseraux" target="blank"><img src="./git2.png" alt="" /></a>
            <a href="https://linkedin.com/in/bruno-tesseraux-80828a2a8" target="blank"><img src="./li1.png" alt="" /></a>
            <button onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>get in touch</button>
        </ul>
    </div> );
}

export default Nav;