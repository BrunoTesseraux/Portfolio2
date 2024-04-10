import CodeKlammern from "../CodeKlammern/CodeKlammern";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.scss"

const Projects = () => {
    const testData = [
        {
            title: "mein erstes Portfolio (bei fertigstellung purer stolz, heute schaue ich es an und denke mir: in dem halben jahr bin ich weit gekommen)",
            screenshot: "url-zum-screenshot-1",
            logo: "url-zum-logo-1"
        },
        {
            title: "Projekt 2",
            screenshot: "url-zum-screenshot-2",
            logo: "url-zum-logo-2"
        },
    ];

    return ( 
        <section className="projects">
            <CodeKlammern content="projects">
                {testData.map((project, index) => (
                    <SingleProject key={index} project={project} />
                ))}
            </CodeKlammern>
        </section>
     );
}
 
export default Projects;