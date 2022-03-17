import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container';

const NavBar: FC = () => (
  <div className="w-screen sticky bg-mantis flex items-center h-16 justify-end top-0 z-10">
    <Container direction="row">
      <NavLink to="/" className="text-gray-200 hover:text-gray-300 flex-grow font-bold">
        DeepWater
      </NavLink>
      <NavLink to="/project" className="text-gray-200 hover:text-gray-300 hover:bg-avocado bg-sapGreen px-6 py-2 rounded-md font-bold drop-shadow-md">
        Our Works
      </NavLink>
    </Container>
  </div>
);

export default NavBar;
