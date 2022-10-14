import Carousel from 'react-bootstrap/Carousel';
import gbr1 from './sv2.webp';
// import gbr2 from './gedung2.JPG';


function vokasi() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gbr1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default vokasi;