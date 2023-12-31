import styled from 'styled-components';
import Section from './components/section'
import About from './sections/About'
import Experience from './sections/Experience';
import Skill from './sections/Skill'
import Education from './sections/Education';
import Project from './sections/Project';
import { MAIN_COLOR } from './cssGlobal';
import Information from './sections/Information';
import DEVICES from './constants/devices';

const Wrap = styled.div`
  padding: 6.4rem 0;
  color: ${MAIN_COLOR};
  max-width: 67.2rem;
  margin: 0 auto;

  @media ${DEVICES.mobileL} {
    padding: 1.2rem;
  }
`;

function App() {
  return (
    <div className='container'>
      <Wrap>
      <Section title="Ngô Quang Mạnh">
          <Information />
      </Section>
      <Section title="Thông tin">
          <About />
      </Section>
      <Section title="Kinh nghiệm">
          <Experience />
      </Section>
      <Section title="Học vấn">
          <Education />
      </Section>
      <Section title="Kỹ năng">
          <Skill />
      </Section>
      <Section title="Dự án">
          <Project />
      </Section>
      </Wrap>
    </div>
  )
}

export default App;