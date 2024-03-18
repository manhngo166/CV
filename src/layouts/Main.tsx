import Section from "components/section";
import Information from "sections/Information";
import About from "sections/About";
import Education from "sections/Education";
import Skill from "sections/Skill";
import Experience from "sections/Experience";
import Project from "sections/Project";
import styled from "styled-components";
import {DEVICES} from "@/constants.ts";

const Styled = {
    Main: styled.div`
        padding: 6.4rem 0;
        margin: 0 auto;

        @media ${DEVICES.mobileL} {
            padding: 1.2rem;
        }
    `,
}

const MainLayout = () => {
    return (
        <Styled.Main>
            <div className='container'>
                <Section title="Ngô Quang Mạnh">
                    <Information/>
                </Section>
                <Section title="Thông tin">
                    <About/>
                </Section>
                <Section title="Học vấn">
                    <Education/>
                </Section>
                <Section title="Kỹ năng">
                    <Skill/>
                </Section>
                <Section title="Kinh nghiệm">
                    <Experience/>
                </Section>
                <Section title="Dự án">
                    <Project/>
                </Section>
            </div>
        </Styled.Main>
    )
};

export default MainLayout;