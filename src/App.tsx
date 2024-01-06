import styled from 'styled-components';
import Section from 'components/section'
import About from 'sections/About'
import Experience from 'sections/Experience';
import Skill from 'sections/Skill'
import Education from 'sections/Education';
import Information from 'sections/Information';
import { DEVICES, CSS_VARIABLE } from '@/constants';

const Wrap = styled.div`
  padding: 6.4rem 0;
  color: ${CSS_VARIABLE.mainColor};
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
      <Section title="Học vấn">
          <Education />
      </Section>
      <Section title="Kỹ năng">
          <Skill />
      </Section>
      <Section title="Kinh nghiệm">
          <Experience />
      </Section>
      </Wrap>
    </div>
  )
}

export default App;