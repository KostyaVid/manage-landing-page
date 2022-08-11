import { IReviewProps } from '../reviewsAvatar';
import s from './Review.module.scss';

const Review = ({ name, urlImg, text }: IReviewProps) => {
  return (
    <article className={s.review}>
      <img src={urlImg} alt={name} width={72} height={72} />
      <div className={s.card}>
        <h4 className={s.name}>{name}</h4>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Review;
