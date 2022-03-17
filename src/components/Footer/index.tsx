import { FC } from 'react';

import Text from '../Text';
import Container from '../Container';

const Footer: FC = () => (
  <div className="bg-mantis py-10">
    <Container>
      <div className="grid grid-col-1 sm:grid-cols-2 w-full gap-5 sm:gap-0">
        <div className="justify-self-start self-center">
          <Text variant="h2" color="light">
            DeepLake
          </Text>
          <Text variant="body1" color="light">Upload. Predict. Save the lake.</Text>
        </div>
        <div className="justify-self-stretch">
          <div className="bg-sapGreen p-8 rounded-lg drop-shadow-lg">
            <Text variant="h2" color="light">Contact Us</Text>
            <ul className="list-none">
              <li>
                <Text variant="body2" color="light">
                  Email:
                  {' '}
                  <a href="mailto:test@test.com">test@test.com</a>
                </Text>
              </li>
              <li><Text variant="body2" color="light">Phone: +60123456789</Text></li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Footer;
