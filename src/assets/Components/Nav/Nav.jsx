import React, { useState, useEffect } from 'react';
import "./Nav.scss";

const Nav = () => {
    const [activeTab, setActiveTab] = useState(""); // Zustand für aktiven Tab

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const cvSection = document.getElementById('cv');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('footer');
        
            const isScrolledIntoView = (elem) => {
                const rect = elem.getBoundingClientRect();
                const elemTop = rect.top;
                const elemBottom = rect.bottom;
        
                // Only completely visible elements return true:
                const isVisible = (elemTop >= -500) && (elemBottom <= window.innerHeight * 2);
                return isVisible;
            };
        
            if (isScrolledIntoView(aboutSection)) {
                setActiveTab('about');
            } else if (isScrolledIntoView(cvSection)) {
                setActiveTab('cv');
            } else if (isScrolledIntoView(projectsSection)) {
                setActiveTab('projects');
            } else if (isScrolledIntoView(contactSection)) {
                setActiveTab('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (tabName) => {
        // Funktion zum Aktualisieren des aktiven Tabs
        setActiveTab(tabName);
        // Zusätzliche Aktionen hier, z.B. Scrollen zur entsprechenden Sektion
        switch(tabName) {
            case 'about':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'cv':
                document.getElementById('cv').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contact':
                document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <div className="nav">
            <ul className="navigation">
                <p className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>&lt; About &gt;</p>
                <p className={activeTab === 'cv' ? 'active' : ''} onClick={() => handleTabClick('cv')}>&lt; CV &gt;</p>
                <p className={activeTab === 'projects' ? 'active' : ''} onClick={() => handleTabClick('projects')}>&lt; Projects &gt;</p>
                <p className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>&lt; get in touch &gt;</p>
            </ul>
        </div>
    );
}

export default Nav;