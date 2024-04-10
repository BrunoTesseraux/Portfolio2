import React, { useState } from 'react';
import CodeKlammern from "../CodeKlammern/CodeKlammern";
import Stationen from "../Stationen/Stationen";
import "./CV.scss";

const CV = () => {
    const testData = [
        {
            title: "Abschnitt 1993-2014",
            items: ["Kindheit", "Schule"],
            additionalData: { // Zusätzliche Daten für Abschnitt 1
                image: "schule.jpg",
                text: "Ich habe schon von klein auf immer Herausforderungen gesucht. Dabei habe ich mich aber noch nie voll und ganz auf die Efahrungen anderer verlassen können. Was wenn es einen besseren Weg gibt? Außerdem in der 9ten Klasse erste berührungspunkte zur Website erstellung."
            }
        },
        {
            title: "2014-2016",
            items: ["Ausbildung zum Bankkaufmann", "entdecken anderer Möglichkeiten"],
            additionalData: { // Zusätzliche Daten für Abschnitt 2
                image: "Portrait.jpg",
                text: "In meiner Zeit in der Sparkasse habe ich schnell festgestellt, dass mir der Verkauf von Finanzprodukten nicht liegt. Schnell habe ich angefangen, andere Möglichkeiten zu suchen, wie ich meine Arbeitszeit dort produktiv verbringen kann. Aus dieser Motivation heraus ist ein Werbevideo für die Sparkasse entstanden und ich hatte die Möglichkeit ein Eigenes Snowboard zu bauen !!!HIER MUSS NOCH DER LINK REIN!!!"
            }
        },
        {
            title: "2017-2019",
            items: ["Barkeeper", "London", "Teamwork"],
            additionalData: { // Zusätzliche Daten für Abschnitt 2
                image: "./barLondon.jpg",
                text: "Durch die Arbeit bei BE AT ONE habe ich gelernt wie wichtig eine gleiche vorgehensweise beim arbeiten ist. Man kann nicht immer alles so machen, wie man es im Kopf hat, weil jeh mehr Leute zusammenarbeiten, desto chaotischer und unübersichtlicher wird es."
            }
        },
        {
            title: "2020-2023",
            items: ["Ausbildung Hotelfachmann", "Roter Hahn", "Hotel Central", "Hotel INCLUDiO"],
            additionalData: { // Zusätzliche Daten für Abschnitt 2
                image: "./roterHahn.jpg",
                text: "Roter Hahn: Jeh besser ein Projekt/Event geplant ist, desto reibungsloser verläuft die durchführung. Allerdings passiert auch immer etwas unerwartetes, davon nicht abbringen lassen, sondern einfach nach einer Lösung suchen, Hilft ja nichts. Hotel Central: Erste Gedanken zur Programmierung, da viele Tätigkeiten automatiesiert werden könntne. Außerdem gibt es nicht wirklich ein gutes Hotel Reservierungs Programm. ('Warum sind die alle so schlecht?') Hotel INCLUDiO: einen kleinen Webcrawler geschrieben, aber gemerkt dass ich lieber Designs in funktionierende Wesiten umsetze."
            }
        },
        {
            title: "2023-2024",
            items: ["Suoercode", "HTML", "SCSS", "JavaScript", "Recat", "Tailwind"],
            additionalData: { // Zusätzliche Daten für Abschnitt 2
                image: "./supercodePräsentation.jpg",
                text: "Bei Supercode hatte ich enlich Zeit, mich in diese neue Leidenschaft einzufinden. Jeder Tag war eine neue Herausforderung und das Lerntempo straff. Hier habe ich viele gute Freunde kennengelernt und ein weiteres mal erfahren, wie stark man sich in der richtigen Gruppe geganseitig anspornen kann."
            }
        },
        {
            title: "Now",
            items: ["Looking for work", "Looking for collaborations"],
            additionalData: { // Zusätzliche Daten für Abschnitt 2
                image: "./supercodePräsentation.jpg",
                text: "Ich freue mich darauf, ein Teil eures Teams zu werden. Außerdem freue ich mich auch über einzelne kleine Projekte. Bitte schreibt mich hierfür einfach an: bruno.tesseruax@gmx.de. gerne auch zwischen 09:00 und 17:00 einfach anrufen. So kommen die Leute zam. (Falls dein projekt ehrenamtlich ist, bitte gleich erwähnen, vllt hab ich ja auch bock drauf und die Seite wird 50-100% billiger!!)"
            }
        },
    ];

    const [selectedStationData, setSelectedStationData] = useState(null);

    const handleStationClick = (data) => {
        setSelectedStationData(data.additionalData);
    };

    return ( 
        <section className="cv">
            <div className="stationen">
                <CodeKlammern content="Lebenslauf">
                    <div className="trenner"></div>
                    {testData.map((section, index) => (
                        <Stationen 
                            key={index} 
                            station={section} 
                            onClick={() => handleStationClick(section)} // Handle Click
                        />
                    ))}
                </CodeKlammern>
            </div>
            <div className="infos">
                <CodeKlammern content="mehr details">
                    {selectedStationData && ( // Rendern nur wenn ausgewählte Daten vorhanden sind
                        <div>
                            <img src={selectedStationData.image} alt="Bild" />
                            <p>{selectedStationData.text}</p>
                        </div>
                    )}
                </CodeKlammern>
            </div>
        </section>
    );
}
 
export default CV;