import styled from "styled-components";
import { FONT_MENLO, MAIN_COLOR, SECOND_COLOR } from "../../cssGlobal";

export const Information = styled.div``;
export const InformationDescription = styled.div`
    font-family: ${FONT_MENLO};
    color: ${SECOND_COLOR};
    margin-bottom: 0.8rem;
    line-height: 1.6rem;
`;
export const InformationAddress = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: ${FONT_MENLO};
    color: ${SECOND_COLOR};
    margin-bottom: 1.2rem;
`;
export const InformationAddressIcon = styled.span`
    margin-right: 0.4rem;
    svg {
        width: 1.2rem;
        height: 1.2rem;
    }
`;
export const InformationAddressText = styled.span`
`;
export const InformationContacts = styled.ul`
    display: flex;
    gap: 4px;
`;
export const InformationContact = styled.li``;
export const InformationContactLink = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.4rem;
    border: 1px solid #e5e7eb;
    svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${SECOND_COLOR}
    }
    &:hover {
        background-color: #F3F4F6;
        svg {
            color: ${MAIN_COLOR}
        }
    }
`;
export const InformationAvatar = styled.img`
    width: 11.2rem;
    height: 11.2rem;
    border-radius: 20px;
    object-fit: cover;
`;