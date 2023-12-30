import styled from "styled-components";
import { FONT_MENLO, SECOND_COLOR } from "../../cssGlobal";

export const Experience = styled.div`

`;

export const ExperienceItem = styled.div`
    &:not(:last-child) {
        margin-bottom: 1.6rem;
    }
`;

export const ExperienceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
`;

export const ExperienceTitle = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
`;

export const ExperienceTimeRange = styled.div`
    color: ${SECOND_COLOR};
`;

export const ExperiencePosition = styled.div`
    font-family: ${FONT_MENLO};
    margin-bottom: 0.8rem;
`;

export const ExperienceContent = styled.div`
    font-family: ${FONT_MENLO};
    color: ${SECOND_COLOR};
    font-size: 1.2rem;
    line-height: 1.6rem;
`;