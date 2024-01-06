import data from "./data";
import SkillStyled from "./style";

const Skill = () => {
    const renderData = data.map((skill, index) => (<SkillStyled.Item key={index}>{skill}</SkillStyled.Item>));

    return (<SkillStyled.Wrap>{renderData}</SkillStyled.Wrap>)
};

export default Skill;