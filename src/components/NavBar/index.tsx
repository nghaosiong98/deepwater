import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => (
  <div className="w-screen absolute bg-gray-500 flex items-center h-16 justify-end top-0">
    <NavLink to="/" className="text-gray-200 hover:text-gray-300 px-10 flex-grow">
      DeepWater
    </NavLink>
    <NavLink to="/about" className="text-gray-200 hover:text-gray-300 px-10">
      About Us
    </NavLink>
  </div>
);

export default NavBar;
