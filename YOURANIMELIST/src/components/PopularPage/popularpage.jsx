import { Link } from "react-router-dom";

import { useGlobalContext } from "../../globalcontext/global";
import { MALv4 } from "../../globalcontext/baseURLs";
import { useEffect } from "react";

export default function PopularPage() {
  const { popularAnime, isSearch, getData } = useGlobalContext();

  useEffect(() => {
    getData(MALv4, "bypopularity");
  }, []);

  function conditionalRender() {
    if (!isSearch){
      return popularAnime.map(anime => {
        return (
          <Link to={`anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.image_url} alt = {anime.title} />
            <h2>{anime.title}</h2>
            <h2>{anime.title_english}</h2>
            <h2>{anime.title_japanese}</h2>
          </Link>  
        )
      });s
    }
  }
 
  return (
    <div>
      { conditionalRender() }
    </div>
  )
}  