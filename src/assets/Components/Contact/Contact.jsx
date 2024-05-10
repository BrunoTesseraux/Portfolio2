import Footer from "../Footer/Footer";
import "./Contact.scss"

const Contact = () => {

    return ( 
        <section className="contact" id="contact">
            <div className="card-wrapper">
            <div className="card">
                <div className="text">
                    <div className="blur">
                        <h3>I´m always up for a chat!</h3>
                        <p>Pop me an email at </p>
                        <a href="mailto:bruno.tesseraux@gmx.de">bruno.tesseraux@gmx.de</a> 
                        <p> or give me a shout on social media</p>
                        <a href="https://www.instagram.com/bruno_t1993/" target="blank"><img src="./instagram.png" alt="hans" /></a>
                        <a href="https://github.com/BrunoTesseraux" target="_blank" rel="noopener noreferrer"><img src="./git2.png" alt="" /></a>
                <a href="https://linkedin.com/in/bruno-tesseraux-80828a2a8" target="_blank" rel="noopener noreferrer"><img src="./li1.png" alt="" /></a>
                    </div>
                </div>
                <img src="./Portrait.jpg" alt="bruno" />
            </div>
            </div>
            <img className="verlauf" src="./verlauf2.png" alt="" />
            <Footer/>
        </section>
     );
}
 
export default Contact;