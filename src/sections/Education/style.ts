import styled from "styled-components";
import { FONT_MENLO, SECOND_COLOR } from "../../cssGlobal";
import DEVICES from "../../constants/devices";

export const Education = styled.div`

`;

export const EducationItem = styled.div`
    &:not(:last-child) {
        margin-bottom: 1.6rem;
    }
`;

export const EducationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    
    @media ${DEVICES.mobileL} {
        flex-direction: column;
    }
`;

export const EducationTitle = styled.div`
    font-size: 1.6rem;
    font-weight: bold;

    @media ${DEVICES.mobileL} {
        margin-bottom: 0.4rem;
    }
`;

export const EducationTimeRange = styled.div`
    color: ${SECOND_COLOR};
`;

export const EducationContent = styled.div`
    font-family: ${FONT_MENLO};
    color: ${SECOND_COLOR};
    font-size: 1.2rem;
    line-height: 1.6rem;
`;