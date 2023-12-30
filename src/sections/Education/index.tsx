import data from './data';
import {
    Education as EducationWrap,
    EducationItem as EducationItemWrap,
    EducationTitle,
    EducationTimeRange,
    EducationContent,
    EducationHeader,
} from './style';

const Education = () => {
    const renderData = data.map(({ title, timeRange, content }) => {
        return <EducationItem title={title} timeRange={timeRange}>{content}</EducationItem>
    })
    return <EducationWrap>{renderData}</EducationWrap>
};

interface EducationItemProps {
    title: string;
    timeRange: string;
    children: any;
}
const EducationItem = (props: EducationItemProps) => {
    const { title, timeRange, children } = props;
    return (
        <EducationItemWrap>
            <EducationHeader>
                <EducationTitle>{title}</EducationTitle>
                <EducationTimeRange>{timeRange}</EducationTimeRange>
            </EducationHeader>
            <EducationContent>{children}</EducationContent>
        </EducationItemWrap>
    );
}

export default Education;