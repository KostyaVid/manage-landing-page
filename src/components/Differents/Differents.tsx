import { motion, Variants } from 'framer-motion';
import Container from '../Container/Container';
import s from './Differents.module.scss';

const Differents = () => {
  const differentsVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <Container>
      <section className={s.differents}>
        <div className={s.title}>
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the complexity. Our
            software is tailor-made for modern digital product teams.
          </p>
        </div>
        <div className={s.items}>
          <motion.div
            className={s.item}
            whileInView="visible"
            variants={differentsVariants}
            initial="hidden"
            viewport={{ amount: 0.3, once: true }}>
            <div className={s.number}>01</div>
            <h3 className={s.itemTitle}>Track company-wide progress</h3>
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
              the smallest of details. Never lose sight of the bigger picture again.
            </p>
          </motion.div>
          <motion.div
            className={s.item}
            whileInView="visible"
            variants={differentsVariants}
            initial="hidden"
            viewport={{ amount: 0.3, once: true }}>
            <div className={s.number}>02</div>
            <h3 className={s.itemTitle}>Advanced build-in reports</h3>
            <p>
              Set internal delivery estimates and track progress toward company goals. Our
              customisable dashboard helps you build out the reports you need to keep stakeholders
              informed.
            </p>
          </motion.div>
          <motion.div
            className={s.item}
            whileInView="visible"
            variants={differentsVariants}
            initial="hidden"
            viewport={{ amount: 0.3, once: true }}>
            <div className={s.number}>03</div>
            <h3 className={s.itemTitle}>Everything you need in one place</h3>
            <p>
              Stop jumping from one service to another to communicate, store files, track task and
              share documents. Manage offer an all-in-one team productivity solution.
            </p>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Differents;
