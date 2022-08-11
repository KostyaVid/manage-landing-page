import { PropsWithChildren } from 'react';
import s from './BackgroundHero.module.scss';

const BackgroundHero = ({ children }: PropsWithChildren) => {
  return <div className={s.background}>{children}</div>;
};

export default BackgroundHero;
