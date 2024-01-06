import styled from "styled-components";
import { CSS_VARIABLE } from "@/constants";

const SkillStyled = {
    Wrap: styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
    `,
    Item: styled.li`
        border-radius: 0.4rem;
        background-color: rgb(17, 24, 39, 0.8);
        padding: 0.4rem 0.8rem;
        color: white;
        font-family: ${CSS_VARIABLE.fontMenlo};
        font-size: 1.2rem;
    `
};

export default SkillStyled;
