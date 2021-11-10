import { FC } from 'react';
import TwoLeafImage from '../../images/two-leaves.svg';
import Landing1 from '../../images/landing1.jpg';
import Landing2 from '../../images/landing2.jpg';
import Landing3 from '../../images/landing3.jpg';
import Landing4 from '../../images/landing4.jpg';
import NavBar from '../../components/NavBar';

const Home: FC = () => (
  <div className="bg-gray-200 static">
    <NavBar />
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center container mx-auto">
        <img src={TwoLeafImage} alt="twoLeafs" className="w-1/6" />
        <p className="text-4xl">Upload. Predict. Save the lakes.</p>
      </div>
      <div className="flex sm:h-48 lg:h-80">
        <div className="flex w-full">
          <img className="object-cover w-full" src={Landing1} alt="L1" />
        </div>
        <div className="flex w-full">
          <img className="object-cover w-full" src={Landing2} alt="L2" />
        </div>
        <div className="flex w-full">
          <img className="object-cover w-full" src={Landing3} alt="L3" />
        </div>
        <div className="flex w-full">
          <img className="object-cover w-full" src={Landing4} alt="L4" />
        </div>
      </div>
    </div>

  </div>
);

export default Home;
