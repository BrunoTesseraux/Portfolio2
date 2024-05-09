import "./Footer.scss"

const Footer = () => {
    return ( 
        <footer id="footer">
            <p>bruno.tesseraux@gmx.de</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>take me back to the top</button>
            <p>design very strongly inspired by: <a href="">José Cordeiro</a> // copright 2020</p>
        </footer>
     );
}
 
export default Footer;