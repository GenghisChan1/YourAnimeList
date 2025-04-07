import { Link } from "react-router-dom";

import PopulateAnimeMAL from "../../globalcontext/populate";
import { useGlobalContext } from "../../globalcontext/global";
import { MALv4 } from "../../globalcontext/baseURLs";
import { useEffect } from "react";

export default function PopularPage({ rendered }) {
  const { 
    popularAnime, searchResults, 
    isSearch, getData 
  } = useGlobalContext();

  useEffect(() => {
    getData(MALv4, "bypopularity");
  }, []);

  function conditionalRender() {
    if (!isSearch && rendered === "Popular"){
      return <PopulateAnimeMAL arr={popularAnime} />
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