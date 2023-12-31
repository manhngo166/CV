import styled from "styled-components";
import { FONT_MENLO, SECOND_COLOR, THIRD_COLOR } from "../../cssGlobal";
import DEVICES from "../../constants/devices";

export const Project = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1.8rem;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: calc(-1 * 1.8rem);
    @media ${DEVICES.mobileL} {
        margin-right: 0;
    }
`;

export const ProjectItem = styled.li`
    border: 2px solid ${THIRD_COLOR};
    border-radius: 1.2rem;
    padding: 1.2rem;
    border-radius: 0.4rem;
    flex-basis: calc(50% - 1.8rem);
    @media ${DEVICES.mobileL} {
        flex-basis: calc(100%);
    }
`;

export const ProjectTitle = styled.div`
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    font-weight: bold;
`;
export const ProjectContent = styled.div`
    margin-bottom: 1.2rem;
    font-family: ${FONT_MENLO};
    color: ${SECOND_COLOR};
    font-size: 1.2rem;
    line-height: 1.6rem;
`;
export const ProjectSkills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
`;
export const ProjectSkill = styled.li`
    font-family: ${FONT_MENLO};
    border-radius: 0.4rem;
    font-size: 1rem;
    background-color: ${THIRD_COLOR};
    padding: 0.4rem 0.8rem;
    font-weight: bold;
`;