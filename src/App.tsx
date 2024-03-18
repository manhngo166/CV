import styled from 'styled-components';
import { CSS_VARIABLE } from '@/constants';
import MainLayout from "@/layouts/Main.tsx";
import FooterLayout from "@/layouts/Footer.tsx";

const Wrap = styled.div`
    color: ${CSS_VARIABLE.mainColor};
`;

function App() {
  return (
      <Wrap>
          <MainLayout />
          <FooterLayout />
      </Wrap>
  )
}

export default App;