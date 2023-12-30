import data from './data';
import {
    Experience as ExperienceWrap,
    ExperienceItem as ExperienceItemWrap,
    ExperienceTitle,
    ExperienceTimeRange,
    ExperienceContent,
    ExperienceHeader,
    ExperiencePosition
} from './style';

const Experience = () => {
    const renderData = data.map(({ title, timeRange, position, content }) => {
        return <ExperienceItem title={title} timeRange={timeRange} position={position}>{content}</ExperienceItem>
    })
    return <ExperienceWrap>{renderData}</ExperienceWrap>
};

interface ExperienceItemProps {
    title: string;
    timeRange: string;
    position: string;
    children: any;
}
const ExperienceItem = (props: ExperienceItemProps) => {
    const { title, timeRange, position, children } = props;
    return (
        <ExperienceItemWrap>
            <ExperienceHeader>
                <ExperienceTitle>{title}</ExperienceTitle>
                <ExperienceTimeRange>{timeRange}</ExperienceTimeRange>
            </ExperienceHeader>
            <ExperiencePosition>{position}</ExperiencePosition>
            <ExperienceContent>{children || '---'}</ExperienceContent>
        </ExperienceItemWrap>
    );
}

export default Experience;