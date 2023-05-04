import ange1 from '../ange1.jpg'
import ange2 from '../ange2.jpg'
import ange3 from '../ange3.jpg'
import ange4 from '../ange4.jpg'

import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade indicators={false} nextIcon={false} prevIcon={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ange1}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ange2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ange3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ange4}
          alt="Third slide"
        />
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default CarouselFadeExample;

