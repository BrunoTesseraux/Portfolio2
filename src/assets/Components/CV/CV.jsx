import React, { useState } from 'react';
import CodeKlammern from "../CodeKlammern/CodeKlammern";
import Stationen from "../Stationen/Stationen";
import "./CV.scss";

const CV = () => {
    const testData = [
        {
            title: "1993-2014",
            items: ["Kindheit", "Schule"],
            additionalData: { 
                image: "schule.JPG",
                text: "Ich habe schon von klein auf immer Herausforderungen gesucht. Dabei habe ich mich aber noch nie voll und ganz auf die Efahrungen anderer verlassen wollen. Was wenn es einen besseren Weg gibt? In der 9ten Klasse hatte ich meine ersten Berührungspunkte mit dem erstellen von digitalen Produkten. Während mir die kreative Seite wie Flash und Photoshop nicht so viel Spaß gemacht hat, habe ich am schreiben von HTML und CSS sehr viel Gefallen gefunden. Aufgrund eines Schulwechsels konnte ich dieses Angebot leider nicht weiter verfolgen."
            }
        },
        {
            title: "2014-2016",
            items: ["Ausbildung zum Bankkaufmann", "entdecken anderer Möglichkeiten"],
            additionalData: { 
                image: "sparkasse2.jpg",
                text: "In meiner Zeit in der Sparkasse habe ich schnell festgestellt, dass mir der Verkauf von Finanzprodukten nicht liegt. Schnell habe ich angefangen, andere Möglichkeiten zu suchen, wie ich meine Arbeitszeit dort produktiv verbringen kann. Aus dieser Motivation heraus ist ein Werbevideo für die Sparkasse entstanden und ich hatte die Möglichkeit ein Eigenes Snowboard zu bauen."
            }
        },
        {
            title: "2017-2019",
            items: ["Barkeeper","Innsbruck", "London", "Teamwork"],
            additionalData: { 
                image: "./barBruno.jpg",
                text: "Nach der Sparkasse wollte ich erstmal eine komplett neue Perspektive erleben und habe in Innsbruck ein Jahr als Snowboardlehrer gearbeitet. Dann hat mich die Liebe nach London gezogen, wo ich angefangen habe als Barkeeper zu arbeiten. Durch meine Arbeit bei BE AT ONE habe ich gelernt wie wichtig eine gleich strukturierte Vorgehensweise beim Arbeiten ist, wenn man in einem Team/ in mehreren Teams arbeitet. Wird diese nicht eingehalten, werden sämtliche Prozesse verzögert und der Kunde hat eine schlechte Erfahrung."
            }
        },
        {
            title: "2020-2023",
            items: ["Ausbildung Hotelfachmann", "Roter Hahn", "Hotel Central", "Hotel INCLUDiO"],
            additionalData: { 
                image: "./roterHahn.jpg",
                text: "Aus meiner Zeit in der Gastro kann ich auch viele Erfahrungen und Erkentnisse beim Programmieren einfließen lassen. Die Planung von einem Projekt ist das A und O. Aber egal wie gut etwas geplant ist, darf man sich nicht von unvorhergesehenen Herausvorderungen aus der Ruhe bringen lassen. In meinem Arbeitsalltag ist mir aufgefallen, dass es in der Gastronomie unzählige Tätigkeiten gibt, die heutzutage eigentlich schon automatisiert sein sollten. Auch kann keines der deiversen Hotel-Verwaltungs-Programme mit denen ich arbeiten musste eine realistisch möglcihe Performance aufweisen. So habe ich angefangen mich wirklich mit dem Thema Programmierung auseinanderzusetzen."
            }
        },
        {
            title: "2023-2024",
            items: ["Supercode", "HTML", "SCSS", "JavaScript", "Recat", "Tailwind"],
            additionalData: { 
                image: "supercode.png",
                text: "Nachdem ich gemerkt habe, dass ich nicht nur in meiner aktuellen Tätigkeit nichtmehr 100% zufrieden bin, sondern mich das Programmieren auch so interresiert, gab es nur einen logischen Schritt: Ich will schnell besser werden, damit ich schnell meiner neuen Leidenschaft nachgehen kann, also ein Bootcamp bei Supercode. Bei Supercode war jeder Tag war eine neue Herausforderung und das Lerntempo positiv straff. Hier habe ich viele gute Freunde kennengelernt und ein weiteres mal erfahren, wie wichtig ein gut funktionierendes Team ist, das Rücksicht aufeinander nimmt. "
            }
        },
        {
            title: "Now",
            items: ["Looking for work", "Looking for collaborations"],
            additionalData: { 
                image: "./supercode.png",
                text: "Ich bin immer auf der Suche nach neuen Herausforderungen. Ich Freue mich von deinem Projekt zu hören, und es gemeinsam mit dir auszuarbeiten. Wenn dir ein sehr Innovatives Design wichtig ist, freut sich eine Freundin von mir, deine Seite oder App mit deinem komplett individuellen Touch zu verzaubern."
            }
        },
    ];
    const [selectedStationData, setSelectedStationData] = useState(testData[5].additionalData); 
    const [activeStationIndex, setActiveStationIndex] = useState(5); 
    const [showPopup, setShowPopup] = useState(true)

    const handleStationClick = (data, index) => {
        setSelectedStationData(data.additionalData); 
        setActiveStationIndex(index); 
        setShowPopup(true);
    };
    const onClose = () => {
        setShowPopup(false);
    }

    return ( 
        <section className="cv" id='cv'>
            <div className="stationen">
                <CodeKlammern content="Lebenslauf">
                    <div className="trenner"></div>
                    {testData.map((section, index) => (
                        <Stationen 
                            key={index} 
                            station={section} 
                            index={index} 
                            onClick={() => handleStationClick(section, index)}
                            isActive={index === activeStationIndex} 
                        />
                    ))}
                </CodeKlammern>
            </div>
            {showPopup && (
                <div className="infos">
                            {selectedStationData && ( 
                        <>
                        <p onClick={onClose} className='close-button'>&times;</p>
                    <CodeKlammern content="mehr details">
                        <p className='infotext'>{selectedStationData.text}</p>
                    </CodeKlammern>
                        <img src={selectedStationData.image} alt="Bild" />
                    </>
                            )}
                </div>
            )}
        </section>
    );
}
 
export default CV;