import styled from "styled-components";
import { DEVICES, CSS_VARIABLE } from "@/constants";

const ProjectStyled = {
    Wrap: styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 1.8rem;
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: calc(-1 * 1.8rem);
        @media ${DEVICES.mobileL} {
            margin-right: 0;
        }
    `,
    Item: styled.li`
        border: 2px solid ${CSS_VARIABLE.thirdColor};
        border-radius: 1.2rem;
        padding: 1.2rem;
        border-radius: 0.4rem;
        flex-basis: calc(50% - 1.8rem);
        @media ${DEVICES.mobileL} {
            flex-basis: calc(100%);
        }
    `,
    Title: styled.div`
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
        font-weight: bold;
    `,
    Content: styled.div`
        margin-bottom: 1.2rem;
        font-family: ${CSS_VARIABLE.fontMenlo};
        color: ${CSS_VARIABLE.secondColor};
        font-size: 1.2rem;
        line-height: 1.6rem;
    `,
    Skills: styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    `,
    Skill: styled.li`
        font-family: ${CSS_VARIABLE.fontMenlo};
        border-radius: 0.4rem;
        font-size: 1rem;
        background-color: ${CSS_VARIABLE.thirdColor};
        padding: 0.4rem 0.8rem;
        font-weight: bold;
    `
};

export default ProjectStyled;