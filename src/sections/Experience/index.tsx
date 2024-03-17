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
}

const ExperienceItem = (props: ExperienceItemProps) => {
    const { title, timeRange, position, description } = props;

    return (
        <ExperienceStyled.Item>
            <ExperienceStyled.Header>
                <ExperienceStyled.Title>{title}</ExperienceStyled.Title>
                <ExperienceStyled.TimeRange>{timeRange}</ExperienceStyled.TimeRange>
            </ExperienceStyled.Header>
            <ExperienceStyled.Position>{position}</ExperienceStyled.Position>
            <ExperienceStyled.Description>{description || '---'}</ExperienceStyled.Description>

            {/* <ExperienceStyled.Projects>{renderProjects}</ExperienceStyled.Projects> */}
        </ExperienceStyled.Item>
    );
}

export default Experience;