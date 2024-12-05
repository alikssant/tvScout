import s from "./style.module.css";
import { FiveStarRating } from "./FiveStarRating/FiveStarRating";
export function TVShowdetail({ tvShow }) {
  const rating = Math.ceil((tvShow.vote_average / 2) * 10) / 10;
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
