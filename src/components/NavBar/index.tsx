import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => (
  <div className="w-screen absolute bg-mantis flex items-center h-16 justify-end top-0">
    <div className="container mx-auto flex justify-between items-center">
      <NavLink to="/" className="text-gray-200 hover:text-gray-300 px-10 flex-grow font-bold">
        DeepWater
      </NavLink>
      <NavLink to="/about" className="text-gray-200 hover:text-gray-300 hover:bg-avocado bg-sapGreen px-6 py-2 rounded-md font-bold drop-shadow-md">
        Our Works
      </NavLink>
    </div>
  </div>
);

export default NavBar;
