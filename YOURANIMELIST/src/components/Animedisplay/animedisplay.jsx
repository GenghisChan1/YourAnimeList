import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { MALv4 } from "../../globalcontext/baseURLs";

export default function Animedisplay() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [Characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  async function fetchAnimeData(animeId, typeOf) {
    try {
      const res = await fetch(`${MALv4}/anime/${animeId}${typeOf ? `/${typeOf}` : ""}` );
      const data = await res.json();

      if (!typeOf){
        setAnime(data.data);
      } else {
        setCharacters(data.data);
      }

      console.log("Fetched Data:", data.data); 
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchAnimeData(id);
      fetchAnimeData(id, "characters");
    }
  }, [id]); 
  
  return (
    <div>
      <h1>{id}</h1>
      {anime && (
        <div>
          <h2>{anime.title}</h2>
          <img src={anime.images.jpg.image_url} alt={anime.title} width="200px" />
          <p>Score: {anime.score}</p>
          <p>
            {showMore? anime.synopsis : anime.synopsis?.substring(0, 450)+"..."}
            <button onClick = {() => setShowMore(!showMore)}>
              {showMore? "Show Less" : "Show More"}
            </button>
          </p>
          <h2>Trailers</h2>
          <div>{
              anime.trailer?.embed_url && (
                <iframe 
                  src = {anime.trailer.embed_url} 
                  allowFullScreen
                  frameBorder="0"
                  width="800px"
                  height="450px"
                  allow="
                    accelerometer; autoplay; 
                    clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture"
                ></iframe>
              )
          }</div> 
          <h2>Characters</h2>
          <div>
            {Characters?.map((Characters, index) => {
              const {mal_id, name, images} = Characters.character;
              const {role} = Characters;
              return (
                <Link to={`/character/${mal_id}`} key={index}>
                  <div>
                    <img src={images?.jpg.image_url} alt=""/>
                    <p>{name}</p>
                    <p>{role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
