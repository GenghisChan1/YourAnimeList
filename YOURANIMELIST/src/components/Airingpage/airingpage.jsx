import { Link } from "react-router-dom";

import { useGlobalContext } from "../../globalcontext/global";

export default function AiringPage() {
  const { airingAnime, isSearch } = useGlobalContext();

  function conditionalRender() {
    if (!isSearch){
      return airingAnime.map(anime => {
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