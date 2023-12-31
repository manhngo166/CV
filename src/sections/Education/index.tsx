import data from './data';
import EducationStyled from './style';

const Education = () => {
    const renderData = data.map((item, index) => {
        const { title, timeRange, content } = item;

        return (
            <EducationStyled.Item key={index}>
                <EducationStyled.Header>
                    <EducationStyled.Title>{title}</EducationStyled.Title>
                    <EducationStyled.TimeRange>{timeRange}</EducationStyled.TimeRange>
                </EducationStyled.Header>
                <EducationStyled.Content>{content}</EducationStyled.Content>
            </EducationStyled.Item>
        )
    })

    return <EducationStyled.Wrap>{renderData}</EducationStyled.Wrap>
};
export default Education;