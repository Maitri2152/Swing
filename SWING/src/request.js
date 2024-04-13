const key = '81db22f16b7d47378fab203d6a3617d8'


const request = {
  requestallPopular:'https://api.themoviedb.org/3/trending/all/day?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US',
  requestNowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1',
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1`,
  requestTvShow: 'https://api.themoviedb.org/3/tv/popular?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1',
  requestTvRated: 'https://api.themoviedb.org/3/tv/top_rated?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1',
  requestAirToday: 'https://api.themoviedb.org/3/tv/airing_today?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1',
  requestAirOn: 'https://api.themoviedb.org/3/tv/on_the_air?api_key=81db22f16b7d47378fab203d6a3617d8&language=en-US&page=1',
  requestSearch: 'https://api.themoviedb.org/3/search/collection?api_key=81db22f16b7d47378fab203d6a3617d8&include_adult=false&language=en-US&page=1'
}

  export default request;