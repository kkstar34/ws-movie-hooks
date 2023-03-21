import { useState } from 'react';
import './App.css';
import Card from './components/Card';


function App() {

  // <iframe width="942" height="530" src="https://www.youtube.com/embed/7kDTDFQ5AVI" title="Le Sacre de Leon Edwards, l&#39;UFC 286 &amp; MMA News, feat @ManuelFerraraTV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
  let [films, setFilms] = useState([
    {
      id : 1,
      title : "Le Sacre de Leon Edwards, l&#39;UFC 286 &amp; MMA News, feat @ManuelFerraraTV",
      description : "description",
      link : "https://www.youtube.com/embed/7kDTDFQ5AVI",
      coverImage : "https://imgur.com/zejebz.jpg"
    },

    {
      id : 2,
      title : "Découverte du CSS (18/31) : Media query",
      description : "description",
      link : "https://www.youtube.com/embed/wu1Sk8iOPnE",
      coverImage : "https://imgur.com/zejebz.jpg"
    },

    {
      id : 3,
      title : "Pourquoi &quot;JavaScript c&#39;est nul",
      description : "description",
      link : "https://www.youtube.com/embed/BXhaykc3uqA",
      coverImage : "https://imgur.com/zejebz.jpg"
    }, 

    {
      id : 4,
      title : "title",
      description : "description",
      link : "https://www.youtube.com/embed/OP9DdpCgf6s",
      coverImage : "https://imgur.com/zejebz.jpg"
    }
  
  
  ]);

  let [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
 

  
  return (
    <div className="container">
      <div className="form-container">
          <form action="">
            <input type="search" placeholder="search ..." className="form-control"  onChange={handleSearch}/>
          </form>
      </div>
      <div className="box">
            {films.filter((film) => {
              return  film.title.toLowerCase().includes(searchTerm)
              }).map((film)=> {
              return (<Card key={film.id} film={film}/>)
            })}
      </div>
    </div>
  );
}

export default App;
