import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, Variants } from 'framer-motion';
import Container from '../Container/Container';

import 'swiper/css';
import 'swiper/css/pagination';
import s from './Reviews.module.scss';

import { Pagination } from 'swiper';
import Review from './Review/Review';
import { reviewAvatars } from './reviewsAvatar';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

const Reviews = () => {
  const [mobileMode, setMobileMode] = useState(false);
  const animateTitle: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    function resize() {
      if (document.body.clientWidth <= 992) {
        setMobileMode(true);
      }
      if (document.body.clientWidth > 992) {
        setMobileMode(false);
      }
    }
    resize();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <Container>
      <section className={s.reviews}>
        <motion.h3
          className={s.title}
          initial="hidden"
          variants={animateTitle}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          What they've said
        </motion.h3>
        <Swiper
          slidesPerView={mobileMode ? 1 : 3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={s.swiper}>
          {reviewAvatars.map((avatar) => (
            <SwiperSlide key={avatar.id} className={s.slide}>
              <Review name={avatar.name} urlImg={avatar.urlImg} text={avatar.text} id={avatar.id} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          className={s.button}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}>
          <Button />
        </motion.div>
      </section>
    </Container>
  );
};

export default Reviews;
