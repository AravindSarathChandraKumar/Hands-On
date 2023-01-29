const api_key=process.env.REACT_APP_API_KEY;

const requests={
    trending: `/trending/all/day?api_key=${api_key}`,
    netflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=123`,
    topRated: `/movie/top_rated?api_key=${api_key}`,
    actionMovies:`/discover/movie?api_key=${api_key}&with_generes=28`,
    comedyMovies:`/discover/movie?api_key=${api_key}&with_generes=35`,
    horrorMovies:`/discover/movie?api_key=${api_key}&with_generes=27`,
    romanceMovies:`/discover/movie?api_key=${api_key}&with_generes=10749`,
    documentaries:`/discover/movie?api_key=${api_key}&with_generes=99`,
};

export default requests;