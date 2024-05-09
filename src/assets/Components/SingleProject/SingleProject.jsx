import "./SingleProject.scss";

const SingleProject = ({ project }) => { // Nehmen Sie project als Prop an
    return ( 
        <div className="single-project">
            <img src={project.screenshot} className="screenshot" alt="Screenshot" />
            <img src={project.logo} className="logo" alt="Logo" />
            <p>{project.title}</p>
        </div>
     );
}
 
export default SingleProject;