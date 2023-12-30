import data from "./data";
import { Skill as SkillWrap, SkillItem } from "./style";

const Skill = () => {
    const renderData = data.map(skill => (<SkillItem>{skill}</SkillItem>));

    return (<SkillWrap>{renderData}</SkillWrap>)
};

export default Skill;