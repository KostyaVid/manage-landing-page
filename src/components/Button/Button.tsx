import { motion } from 'framer-motion';
import s from './Button.module.scss';

interface IButtonProps {
  outline?: boolean;
}

const Button = ({ outline }: IButtonProps) => {
  return (
    <motion.a
      className={outline ? s.outline : s.button}
      href="/"
      whileHover={{ opacity: 0.6, transition: { duration: 0.2 } }}
      whileTap={{ opacity: 0.6, transition: { duration: 0.2 } }}>
      Get Started
    </motion.a>
  );
};

export default Button;
