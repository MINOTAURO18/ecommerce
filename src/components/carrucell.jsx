import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

const Slider = () => {

   
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Cambia esto al número de imágenes en tu slider

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 2000); // Cambia 3000 a la duración deseada entre cambios de diapositiva en milisegundos

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='w-full max-h-500px rounded-lg'>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        selectedItem={currentSlide}
        onChange={handleChange}
        className='rounded-lg'
      >
        {/* Aquí debes incluir tus imágenes como elementos de diapositiva */}
        <div className='rounded-lg'>
          <img className='max-h-500px rounded-lg' src={banner1} alt="Imagen 1" />
        </div>
        <div>
          <img className='max-h-500px rounded-lg' src={banner2} alt="Imagen 2" />
        </div>
        <div>
          <img className='max-h-500px rounded-lg' src={banner3} alt="Imagen 3" />
        </div>
      </Carousel>
    </div>
  );
};
export default Slider;
