import PopulateAnimeMAL from "../../globalcontext/populate";
import { useGlobalContext } from "../../globalcontext/global";

export default function AiringPage({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  function conditionalRender() {
    if (!isSearch && rendered === "Airing"){
      return <PopulateAnimeMAL arr={airingAnime} />
    } else {
      return <PopulateAnimeMAL arr={searchResults} />
    }
  }
 
  return (
    <div>
      { conditionalRender() }
    </div>
  )
}  