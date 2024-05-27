import "./SingleProject.scss";

const SingleProject = ({ project }) => { // Nehmen Sie project als Prop an
    return ( 
        <a href={project.link} target="_blank" className="single-project">
            <img src={project.screenshot} className="screenshot" alt="Screenshot" />
            <img src={project.logo} className="logo" alt="Logo" />
            <p className="project-title">{project.title}</p>
            <p className="beschreibung">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem recusandae nulla beatae iste illum, quod voluptatum officiis rem amet!</p>
        </a>
     );
}
 
export default SingleProject;