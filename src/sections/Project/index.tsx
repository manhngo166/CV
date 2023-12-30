import { Project as ProjectWrap, ProjectItem as ProjectItemWrap, ProjectTitle, ProjectContent, ProjectSkills, ProjectSkill } from "./style";
import data from "./data";

const Project = () => {
    const renderData = data.map((project: any) => {
        return <ProjectItem {...project} />
    })

    return <ProjectWrap>{renderData}</ProjectWrap>
};

interface ProjectItemProps {
    title: string;
    content: string;
    skills: string[]
}
const ProjectItem = ({ title, content, skills}: ProjectItemProps) => {
    const renderSkills = skills.map(skill =>  <ProjectSkill>{skill}</ProjectSkill>);

    return (
        <ProjectItemWrap>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectContent>{content}</ProjectContent>
            <ProjectSkills>{renderSkills}</ProjectSkills>
        </ProjectItemWrap>
    )
};

export default Project;