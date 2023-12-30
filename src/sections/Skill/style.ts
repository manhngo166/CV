import styled from "styled-components";
import { FONT_MENLO } from "../../cssGlobal";

export const Skill = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

export const SkillItem = styled.li`
    border-radius: 0.4rem;
    background-color: rgb(17, 24, 39, 0.8);
    padding: 0.4rem 0.8rem;
    color: white;
    font-family: ${FONT_MENLO};
    font-size: 1.2rem;
`;