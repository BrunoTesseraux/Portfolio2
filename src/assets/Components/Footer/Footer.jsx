import "./Footer.scss"

const Footer = () => {
    return ( 
        <footer id="footer">
            <p>bruno.tesseraux@gmx.de</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&lt; take me back to the top &gt;</button>
            <p>design very strongly inspired by: <a href="">José Cordeiro</a> // copyright 2024</p>        </footer>
     );
}
 
export default Footer;