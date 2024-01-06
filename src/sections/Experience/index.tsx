import data from './data';
import ExperienceStyled from './style';

const Experience = () => {
    const renderData = data.map((item, index) => {
        return <ExperienceItem key={index} {...item} />
    })
    return <ExperienceStyled.Wrap>{renderData}</ExperienceStyled.Wrap>
};

interface ExperienceItemProps {
    title: string;
    timeRange: string;
    position: string;
    description: string;
    projects: any[];
}
const ExperienceItem = (props: ExperienceItemProps) => {
    const { title, timeRange, position, projects, description } = props;
    
    const renderProjects = projects.map((project: any, index: number) => {
        const { title, content, skills} = project;
    
        const renderSkills = skills.map((skill: any, index: number) => (
            <ExperienceStyled.ProjectSkill key={index}>{skill}</ExperienceStyled.ProjectSkill>
        ));

        return (
            <ExperienceStyled.Project key={index}>
                <ExperienceStyled.ProjectTitle>{title}</ExperienceStyled.ProjectTitle>
                <ExperienceStyled.ProjectContent>{content}</ExperienceStyled.ProjectContent>
                <ExperienceStyled.ProjectSkills>{renderSkills}</ExperienceStyled.ProjectSkills>
            </ExperienceStyled.Project>
        );
    });

    return (
        <ExperienceStyled.Item>
            <ExperienceStyled.Header>
                <ExperienceStyled.Title>{title}</ExperienceStyled.Title>
                <ExperienceStyled.TimeRange>{timeRange}</ExperienceStyled.TimeRange>
            </ExperienceStyled.Header>
            <ExperienceStyled.Position>{position}</ExperienceStyled.Position>
            <ExperienceStyled.Description>{description || '---'}</ExperienceStyled.Description>

            <ExperienceStyled.Projects>{renderProjects}</ExperienceStyled.Projects>
        </ExperienceStyled.Item>
    );
}

export default Experience;