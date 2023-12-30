import styled from 'styled-components';
import Section from './components/section'
import About from './sections/About'
import Experience from './sections/Experience';
import Skill from './sections/Skill'
import Education from './sections/Education';
import Project from './sections/Project';

const Wrap = styled.div`
  padding: 6.4rem;
`;

function App() {
  return (
    <div className='container'>
      <Wrap>
      <Section title="Ngô Quang Mạnh">
          <About />
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