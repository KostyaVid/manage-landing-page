import { motion, Variants } from 'framer-motion';
import Button from '../Button/Button';
import Container from '../Container/Container';
import s from './Hero.module.scss';

const Hero = () => {
  const animateHero: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({ x: 0, opacity: 1, transition: { delay: custom * 0.5, duration: 0.5 } }),
  };
  return (
    <Container>
      <section className={s.hero}>
        <div className={s.text}>
          <motion.h1
            className={s.title}
            initial="hidden"
            animate="visible"
            variants={animateHero}
            custom={0}>
            Bring everyone together to build better products.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={animateHero} custom={1}>
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger team goals in view.
          </motion.p>
          <motion.div
            className={s.button}
            initial="hidden"
            animate="visible"
            variants={animateHero}
            custom={2}>
            <Button />
          </motion.div>
        </div>
        <img src="./images/illustration-intro.svg" alt="analytics" className={s.analytics} />
      </section>
    </Container>
  );
};

export default Hero;
