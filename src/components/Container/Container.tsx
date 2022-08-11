import React, { PropsWithChildren } from 'react';
import s from './Container.module.scss';

const Container = ({ children }: PropsWithChildren) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
