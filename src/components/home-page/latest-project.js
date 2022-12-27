import ProjectSlider from "../projects/projects-slider";

function LatestProject(props) {
  return (
    <div className="project-area md:pt-160 pt-[60px]">
      <ProjectSlider projects={props.projects} />
    </div>
  );
}

export default LatestProject;
