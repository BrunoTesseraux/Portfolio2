import CodeKlammern from "../CodeKlammern/CodeKlammern";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.scss"

const Projects = () => {
    const testData = [
        {
            title: "Erstes Portfolio",
            screenshot: "./portfolio1.png",
            background: "./projekt1.png",
            link: "https://portfolio-tawny-chi-23.vercel.app/",
            beschreibung: "Meine erste Website, die ich selbst geschrieben habe. Ich habe mich mit HTML und CSS vertraut gemacht. Fertigstellung: 14.09.2023."
        },
        {
            title: "Poke API",
            screenshot: "./pokeAPI.png",
            background: "projekt2.png",
            link: "https://poke-api-plum.vercel.app/",
            beschreibung: "Ziel dieses Projektes war es, sich mit API´s vertraut zu machen. Den Fetch haben wir in der Gruppe geschrieben. Neben Grundlegendnen Kompoenten habe ich den Dark-Mode implementiert"
        },   
        {
            title: "Movie DB",
            screenshot: "./movieDB.png",
            background: "projekt3.png",
            link: "https://movie-db-blush-seven.vercel.app/",
            beschreibung: "Die Movie DB war unser Frontend Abschluss Projekt. Ziel war es, ein Vorgegebenes Design umzusetzen. In diesem Projekt habe ich die Slider erstellt und die dazugehörige Fetches geschrieben. Desweiteren habe ich wieder den Dark-Mode implementiert."
        },
        {
            title: "GrosShop",
            screenshot: "./Grosshop.png",
            background: "projekt4.png",
            link: "https://abschlussprojekt-xnwy.onrender.com/",
            beschreibung: "Für unser Abschlussprojekt haben wir uns in Frontend und Backend Teams aufgeteilt, um ein umfangreiches Design mit den vorgegebenen Funktionalitäten umzusetzen. Ich hatte die Gelegenheit, das gesamte Frontend von Grund auf neu zu gestalten. Obwohl meine Kollegen aus persönlichen Gründen leider nicht in der Lage waren, das Backend rechtzeitig fertigzustellen, habe ich die Herausforderung angenommen, das Beste aus der Situation zu machen. Trotz einiger Herausforderungen haben wir als Team zusammengearbeitet und unser Bestes gegeben, um das Projekt voranzutreiben. Die Erfahrungen, die ich dabei gesammelt habe, haben mir wertvolle Einblicke in die Zusammenarbeit und Problemlösung gegeben, die ich in Zukunft nutzen werde, um noch bessere Ergebnisse zu erzielen."
        },
    ];

    return ( 
        <section className="projects" id="projects">
            <CodeKlammern content="projects">
                {testData.map((project, index) => (
                    <SingleProject key={index} project={project} />
                ))}
            </CodeKlammern>
        </section>
     );
}
 
export default Projects;