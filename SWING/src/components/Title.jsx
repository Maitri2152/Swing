import React from "react";
import Row from "./Row";
import Request from "/Swing/SWING/src/request";
import Main from "./Main";

const Title = () => {
  return (
    <div>
      <Main />
      {/* <Row title="SearchBar" fetchURL={Request.requestSearch} /> */}
      <Row
        rowID="1"
        title="Upcoming Movies"
        fetchURL={Request.requestUpcoming}
      />
      <Row rowID="2" title="Now Playing" fetchURL={Request.requestNowPlaying} />
      {/* <Row rowID="3" title="Popular Movies" fetchURL={Request.requestPopular} /> */}
      <Row
        rowID="4"
        title="Trending Movies"
        fetchURL={Request.requestTrending}
      />

      <Row
        rowID="5"
        title="Top Rated Movies"
        fetchURL={Request.requestTopRated}
      />

      <Row
        rowID="6"
        title="Popular TV shows"
        fetchURL={Request.requestTvShow}
      />
      <Row rowID="7" title="Airing Today" fetchURL={Request.requestAirToday} />
      <Row
        rowID="7"
        title="Top Rated TV shows"
        fetchURL={Request.requestTvRated}
      />

      <Row rowID="8" title="On the Air" fetchURL={Request.requestAirOn} />
    </div>
  );
};

export default Title;
