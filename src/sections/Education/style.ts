import styled from "styled-components";
import { DEVICES, CSS_VARIABLE } from "@/constants";

const EducationStyled = {
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
        font-weight: bold;
    
        @media ${DEVICES.mobileL} {
            margin-bottom: 0.4rem;
        }
    `,
    TimeRange: styled.div`
        color: ${CSS_VARIABLE.secondColor};
    `,
    Content: styled.div`
        font-family: ${CSS_VARIABLE.fontMenlo};
        color: ${CSS_VARIABLE.secondColor};
        font-size: 1.2rem;
        line-height: 1.6rem;
    `
};

export default EducationStyled;