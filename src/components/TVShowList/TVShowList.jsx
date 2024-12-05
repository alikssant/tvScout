import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You might like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          console.log(tvShow);
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
