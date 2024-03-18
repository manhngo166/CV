import {CSS_VARIABLE} from "@/constants.ts";
import styled from "styled-components";
import ViVn from "assets/images/vi-vn.svg";
import EnUs from "assets/images/en-us.svg";
import {useTranslation} from "react-i18next";

const Styled = {
    Footer: styled.div`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid ${CSS_VARIABLE.thirdColor};
        padding: 0.8rem 0;
        background-color: rgb(255, 255, 255);
    `,
    FooterInner: styled.div`
        display: flex;
        justify-content: space-between;
    `,
    FooterLeft: styled.div``,
    FooterRight: styled.div``,
    Languages: styled.div`
        display: flex;
        align-content: center;
    `,
    Language: styled.div`
        display: flex;
        align-content: center;
        cursor: pointer;
        &:not(:last-child) {
            margin-right: 1.6rem;
        }
    `,
    LanguageText: styled.span`
        margin-right: 0.4rem;
    `,
    LanguageFlag: styled.img`
        width: 2.4rem;
        height: 1.6rem;
    `
};

const FooterLayout = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = async (langCode: string): Promise<void> => {
        await i18n.changeLanguage(langCode);
    };


    console.log(i18n);
    return (
        <Styled.Footer>
            <div className='container'>
                <Styled.FooterInner>
                    <Styled.FooterLeft>
                        {t('FOOTER_CV_UPDATED')}
                    </Styled.FooterLeft>
                    <Styled.FooterRight>
                        <Styled.Languages>
                            <Styled.Language onClick={() => handleChangeLanguage('vi')}>
                                <Styled.LanguageText>Tiếng Việt</Styled.LanguageText>
                                <Styled.LanguageFlag src={ViVn} />
                            </Styled.Language>
                            <Styled.Language onClick={() => handleChangeLanguage('en')}>
                                <Styled.LanguageText>English</Styled.LanguageText>
                                <Styled.LanguageFlag src={EnUs} />
                            </Styled.Language>
                        </Styled.Languages>
                    </Styled.FooterRight>
                </Styled.FooterInner>
            </div>
        </Styled.Footer>
    )
};

export default FooterLayout;