import { FC } from 'react';
import NavBar from '../../components/NavBar';
import NavBarSpacer from '../../components/NavBarSpacer';

const About: FC = () => (
  <div className="bg-gray-200 static">
    <NavBar />
    <div className="h-screen flex flex-col">
      <NavBarSpacer />
      <p className="text-4xl">Welcome to DeepWater</p>
      <p className="text-lg">The site is still under development.</p>
    </div>
  </div>
);

export default About;
