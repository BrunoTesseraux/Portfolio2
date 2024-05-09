import CodeKlammern from "../CodeKlammern/CodeKlammern";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.scss"

const Projects = () => {
    const testData = [
        {
            title: "Erstes Portfolio",
            screenshot: "./portfolio1.png",
            logo: "./projekt1.png"
        },
        {
            title: "Poke API",
            screenshot: "./pokeAPI.png",
            logo: "projekt2.png"
        },   
        {
            title: "Movie DB",
            screenshot: "./movieDB.png",
            logo: "projekt3.png"
        },
        {
            title: "GrosShop",
            screenshot: "url-zum-screenshot-2",
            logo: "projekt4.png"
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