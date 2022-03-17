import { FC } from 'react';

import Text from '../../components/Text';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import ProjectCard from './ProjectCard';

import Image from '../../images/landing1.jpg';

const App: FC = () => (
  <div>
    <NavBar />

    <Container>
      <div className="pt-10">
        <Text variant="h1">Our Projects</Text>
      </div>
      <div className={`
          py-10 w-full
          grid grid-cols-1 sm:grid-cols-3 gap-5
        `}
      >
        <ProjectCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi magna, pretium in justo sit amet, porttitor fermentum lectus. Sed."
          imgSrc={Image}
          title="Project 1"
        />
        <ProjectCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi magna, pretium in justo sit amet, porttitor fermentum lectus. Sed."
          imgSrc={Image}
          title="Project 1"
        />
        <ProjectCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi magna, pretium in justo sit amet, porttitor fermentum lectus. Sed."
          imgSrc={Image}
          title="Project 1"
        />
      </div>
    </Container>

    <Footer />
  </div>
);

export default App;
