import banniere1 from '../banniere1.png'
import banniere2 from '../banniere2.png'
import banniere3 from '../banniere3.png'
import banniere4 from '../banniere4.png'

import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel indicators={false} nextIcon={false} prevIcon={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banniere1}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banniere2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banniere3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banniere4}
          alt="Third slide"
        />
      </Carousel.Item>
      
      
    </Carousel>
  );
}

export default CarouselFadeExample;

