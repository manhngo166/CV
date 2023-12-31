import styled from "styled-components";
import { CSS_VARIABLE } from "@/constants";
import { DEVICES } from "@/constants";

const InformationStyled = {
    Wrap: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 1.8rem;

        @media ${DEVICES.mobileL} {
            flex-direction: column-reverse;
        }
    `,
    Left: styled.div``,
    Right: styled.div``,
    Position: styled.div`
        font-size: 1.8rem;
        margin-bottom: 1.2rem;
        font-family: ${CSS_VARIABLE.fontMenlo};
    `,
    Description: styled.div`
        font-family: ${CSS_VARIABLE.fontMenlo};
        color: ${CSS_VARIABLE.secondColor};
        margin-bottom: 0.8rem;
        line-height: 1.6rem;
    `,
    Options: styled.ul`
        margin-bottom: 1.2rem;
    `,
    Option: styled.li`
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-family: ${CSS_VARIABLE.fontMenlo};
        color: ${CSS_VARIABLE.secondColor};

        &:not(:last-child) {
            margin-bottom: 0.8rem;
        }
    `,
    OptionIcon: styled.span`
        margin-right: 0.4rem;
        svg {
            width: 1.2rem;
            height: 1.2rem;
        }
    `,
    OptionText: styled.span``,
    Contacts: styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    `,
    Contact: styled.li``,
    ContactLink: styled.a`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 0.4rem;
        border: 2px solid ${CSS_VARIABLE.thirdColor};
        color: ${CSS_VARIABLE.secondColor};
        svg {
            width: 1.6rem;
            height: 1.6rem;
        }
        &:hover {
            background-color: ${CSS_VARIABLE.thirdColor};
            color: ${CSS_VARIABLE.mainColor};
        }
    `,
    Avatar: styled.img`
        width: 11.2rem;
        height: 11.2rem;
        border-radius: 20px;
        object-fit: cover;
    `
};

export default InformationStyled;