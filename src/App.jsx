import s from "./style.module.css";
import { TVshowApi } from "./api/tv-show";
import { useState, useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowdetail } from "./components/TVShowdetail";
import { Logo } from "./components/Logo/Logo";
import LogoImg from "./assets/images/logo.png";
import { TVShotListItem } from "./components/TVShowListItem/TVShowListItem";

//TVshowApi.fetchPopulars();
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVshowApi.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }
  console.log(currentTVShow);

  useEffect(() => {
    fetchPopulars();
  }, []);
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={LogoImg}
              title={"Watowatch"}
              subtitle={"Find a show you may like"}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowdetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <>
            <TVShotListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("i have been clicked", tvShow);
              }}
            />
            <TVShotListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("i have been clicked", tvShow);
              }}
            />
            <TVShotListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => {
                console.log("i have been clicked", tvShow);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
