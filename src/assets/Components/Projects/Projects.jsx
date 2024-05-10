import CodeKlammern from "../CodeKlammern/CodeKlammern";
import SingleProject from "../SingleProject/SingleProject";
import "./Projects.scss"

const Projects = () => {
    const testData = [
        {
            title: "Erstes Portfolio",
            screenshot: "./portfolio1.png",
            logo: "./projekt1.png",
            link: "https://portfolio-tawny-chi-23.vercel.app/"
        },
        {
            title: "Poke API",
            screenshot: "./pokeAPI.png",
            logo: "projekt2.png",
            link: "https://poke-api-plum.vercel.app/"
        },   
        {
            title: "Movie DB",
            screenshot: "./movieDB.png",
            logo: "projekt3.png",
            link: "https://movie-db-blush-seven.vercel.app/"
        },
        {
            title: "GrosShop",
            screenshot: "url-zum-screenshot-2",
            logo: "projekt4.png",
            link: ""
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