import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, Setsearch] = useState([]);

    const GetTopAnime = async () => {
        const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
                         .then(res => res.json());
        SetTopAnime(temp.top.slice(0, 5));
  }

  const HandleSearch = e => {
       e.preventDefault();

       FetchAnime(search);

  }

  useEffect(() => {
		GetTopAnime();
	}, []);

  const FetchAnime = async (query) => {
      const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
                         .then(res => res.json());
      SetAnimeList(temp.results);
  }

  return (
    <div className="App">
      <Header />
      <div>
        <Sidebar topAnime = {topAnime}/>
        <MainContent HandleSearch = {HandleSearch} search = {search} Setsearch = {Setsearch} animeList = {animeList} />
      </div>
    </div>
  );
}

export default App;
