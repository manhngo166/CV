import styled from "styled-components";
import { CSS_VARIABLE } from "@/constants";
import { DEVICES } from "@/constants";

const ExperienceStyled = {
    Wrap: styled.div``,
    Item: styled.div`
        &:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    `,
    Header: styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.8rem;
    
        @media ${DEVICES.mobileL} {
            flex-direction: column;
        }
    `,
    Title: styled.div`
        font-size: 1.6rem;
        font-family: ${CSS_VARIABLE.fontMenlo};
    
        @media ${DEVICES.mobileL} {
            margin-bottom: 0.4rem;
        }
    `,
    TimeRange: styled.div`
        color: ${CSS_VARIABLE.secondColor};
    `,
    Position: styled.div`
        font-family: ${CSS_VARIABLE.fontMenlo};
        margin-bottom: 0.8rem;
    `,
    Description: styled.div`
        font-family: ${CSS_VARIABLE.fontMenlo};
        color: ${CSS_VARIABLE.secondColor};
        font-size: 1.2rem;
        line-height: 1.6rem;
        margin-bottom: 1.8rem;
    `,
    Projects: styled.ul`
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
    Project: styled.li`
        border: 2px solid ${CSS_VARIABLE.thirdColor};
        border-radius: 1.2rem;
        padding: 1.2rem;
        border-radius: 0.4rem;
        flex-basis: calc(50% - 1.8rem);
        @media ${DEVICES.mobileL} {
            flex-basis: calc(100%);
        }
    `,
    ProjectTitle: styled.div`
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
        font-weight: bold;
    `,
    ProjectContent: styled.div`
        margin-bottom: 1.2rem;
        font-family: ${CSS_VARIABLE.fontMenlo};
        color: ${CSS_VARIABLE.secondColor};
        font-size: 1.2rem;
        line-height: 1.6rem;
    `,
    ProjectSkills: styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
    `,
    ProjectSkill: styled.li`
        font-family: ${CSS_VARIABLE.fontMenlo};
        border-radius: 0.4rem;
        font-size: 1rem;
        background-color: ${CSS_VARIABLE.thirdColor};
        padding: 0.4rem 0.8rem;
        font-weight: bold;
    `
}

export default ExperienceStyled;