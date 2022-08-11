import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { links } from '../../App';
import Burger from '../Burger/Burger';
import Button from '../Button/Button';
import Container from '../Container/Container';
import s from './Header.module.scss';

const Header = () => {
  const [activeMobile, setActiveMobile] = useState(false);
  const refMenuMobile = useRef<HTMLUListElement>(null);

  const menuItemsVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, delay: i * 0.2, type: 'spring', stiffness: 300, damping: 30 },
    }),
    hidden: { opacity: 0, x: 50 },
  };

  useEffect(() => {
    if (activeMobile) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [activeMobile]);

  function onClickBurger() {
    setActiveMobile(!activeMobile);
  }
  function onClickOverlay(e: React.MouseEvent) {
    if (e.target !== refMenuMobile.current) setActiveMobile(false);
  }
  return (
    <Container>
      <header className={s.header}>
        <img src="./images/logo.svg" alt="Manage" className={s.logo} />
        <AnimatePresence initial={false}>
          {activeMobile ? (
            <motion.nav
              className={s.nav}
              onClick={onClickOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}>
              <ul ref={refMenuMobile}>
                {links.map((item, index) => (
                  <motion.li
                    className={s.item}
                    key={index + item.name}
                    variants={menuItemsVariants}
                    initial={'hidden'}
                    animate={'visible'}
                    custom={index}>
                    <a href={item.url}>{item.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ) : (
            <nav className={[s.nav, s.navDesktop].join(' ')} onClick={onClickOverlay}>
              <ul ref={refMenuMobile}>
                {links.map((item, index) => (
                  <motion.li
                    className={s.item}
                    key={index + item.name}
                    variants={menuItemsVariants}
                    initial={'hidden'}
                    animate={'visible'}
                    custom={index}>
                    <a href={item.url}>{item.name}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          )}
        </AnimatePresence>
        <div className={s.button}>
          <Button />
        </div>
        <Burger onClick={onClickBurger} activeMobileMenu={activeMobile} />
      </header>
    </Container>
  );
};

export default Header;
