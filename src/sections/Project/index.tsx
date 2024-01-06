import ProjectStyled from './style';
import data from "./data";

const Project = () => {
    const renderData = data.map((project: any) => {
        const { title, content, skills} = project;
        const renderSkills = skills.map((skill: any, index: number) =>  <ProjectStyled.Skill key={index}>{skill}</ProjectStyled.Skill>);

        return (
            <ProjectStyled.Item>
                <ProjectStyled.Title>{title}</ProjectStyled.Title>
                <ProjectStyled.Content>{content}</ProjectStyled.Content>
                <ProjectStyled.Skills>{renderSkills}</ProjectStyled.Skills>
            </ProjectStyled.Item>
    )
    })

    return <ProjectStyled.Wrap>{renderData}</ProjectStyled.Wrap>
};

export default Project;