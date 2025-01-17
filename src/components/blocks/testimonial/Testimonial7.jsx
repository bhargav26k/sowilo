import { Tiles3 } from 'components/elements/tiles';
import Carousel from 'components/reuseable/Carousel';
import { TestimonialCard2 } from 'components/reuseable/testimonial-cards'; // -------- data -------- //


const Testimonial7 = () => {
  return <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
      <div className="col-lg-7 position-relative">
        <div className="shape bg-dot primary rellax w-18 h-18" style={{
        top: 0,
        left: '-1.4rem',
        zIndex: 0
      }} />
        <Tiles3 />
      </div>

      <div className="col-lg-5 mt-5">
        <div className="swiper-container dots-closer mb-6">
          <Carousel grabCursor slidesPerView={1} navigation={false}>
          </Carousel>
        </div>
      </div>
    </div>;
};

export default Testimonial7;