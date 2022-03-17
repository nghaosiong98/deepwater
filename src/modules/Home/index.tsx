import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

import TwoLeafImage from '../../images/two-leaves.svg';
import Landing1 from '../../images/landing1.jpg';

import NavBar from '../../components/NavBar';
import Text from '../../components/Text';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

const Home: FC = () => (
  <div className="bg-gray-200">
    <NavBar />

    <div className="space-y-10">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="w-1/5">
            <img src={TwoLeafImage} alt="twoLeafs" />
          </div>
          <p className="text-4xl">Welcome to DeepWater</p>
        </div>
        <div>
          <img src={Landing1} alt="L1" />
        </div>
      </Carousel>
      <Container>
        <Text variant="h1">Who Are We</Text>
        <Text variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor lacus in dui gravida elementum. Morbi consectetur posuere magna, in rutrum mauris convallis et. Maecenas ultricies, nulla vel scelerisque dignissim, felis augue sodales lectus, ac ullamcorper ipsum nisl ut urna. Vivamus urna urna, euismod non orci vel, mattis tristique arcu. Fusce sollicitudin orci eu facilisis maximus. Ut nisl felis, pharetra eu sem vel, porta consectetur dolor. Donec accumsan odio at hendrerit rutrum. Fusce at nisi ac velit efficitur consectetur. Sed condimentum ut quam in posuere. Suspendisse vestibulum venenatis orci, sit amet viverra libero pellentesque sit amet. Cras in ipsum vel quam tincidunt rutrum. Nam convallis orci neque, ut blandit ipsum euismod in. Mauris blandit, ipsum a sagittis luctus, tortor ligula sodales mi, ut pellentesque justo sapien ac metus. Vestibulum nibh arcu, congue quis rhoncus nec, aliquet eget quam. Cras eu justo vel justo vestibulum vestibulum quis vel nibh.
        </Text>
      </Container>
      <Container>
        <Text variant="h1">Our Mission</Text>
        <Text variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor lacus in dui gravida elementum. Morbi consectetur posuere magna, in rutrum mauris convallis et. Maecenas ultricies, nulla vel scelerisque dignissim, felis augue sodales lectus, ac ullamcorper ipsum nisl ut urna. Vivamus urna urna, euismod non orci vel, mattis tristique arcu. Fusce sollicitudin orci eu facilisis maximus. Ut nisl felis, pharetra eu sem vel, porta consectetur dolor. Donec accumsan odio at hendrerit rutrum. Fusce at nisi ac velit efficitur consectetur. Sed condimentum ut quam in posuere. Suspendisse vestibulum venenatis orci, sit amet viverra libero pellentesque sit amet. Cras in ipsum vel quam tincidunt rutrum. Nam convallis orci neque, ut blandit ipsum euismod in. Mauris blandit, ipsum a sagittis luctus, tortor ligula sodales mi, ut pellentesque justo sapien ac metus. Vestibulum nibh arcu, congue quis rhoncus nec, aliquet eget quam. Cras eu justo vel justo vestibulum vestibulum quis vel nibh.
        </Text>
      </Container>

      <Footer />
    </div>
  </div>
);

export default Home;
