import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Post/Post';
import requests from './Requests';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Banner/>
      <Post 
      title="NETFLIX ORIGINALS"url={requests.netflixOriginals} isRowBig />
      <Post title="Trending Now"url={requests.trending}/>
      <Post title="Top Rated"url={requests.topRated}/>
      <Post 
      title="Action Movies"
      url={requests.actionMovies}
      />
      <Post 
      title="Comedy Movies"
      url={requests.comedyMovies}
      />
      <Post 
      title="Horror Movies"
      url={requests.horrorMovies}
      />
      <Post 
      title="Romance Movies"
      url={requests.romanceMovies}
      />
      <Post 
      title="Documentaries"
      url={requests.documentaries}
      />
    </div>
  );
}

export default App;
