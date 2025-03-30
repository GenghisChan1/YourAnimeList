import {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";

import { MALv4 } from '../../globalcontext/baseURLs';

export default function AnimeCharacterdisplay() {
  const {characterId} = useParams();
  const [character, setCharacter] = useState(null);
  const [VA, setVA] = useState([]);
  const [showMore, setShowMore] = useState(false);

  async function fetchCharacterData(id, typeOf) {
    try {
      const res = await fetch (`${MALv4}/characters/${id}${typeOf ? `/${typeOf}` : ""}`);
      const data = await res.json();

      if (!typeOf) {
        setCharacter(data.data);
      } else if (typeOf === "voices" && Array.isArray(data.data)) {
        setVA(data.data);
      }
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  }

  useEffect(() => {
    if (characterId) {
      fetchCharacterData(characterId);
      fetchCharacterData(characterId, "voices");
    }
  }, [characterId]);

  console.log("character[] Data:", character);
  console.log("VA[] Data:", VA);
  return (
    <div>
      <h1>{characterId}</h1>
      {character && (
        <>
          <img src = {character.images.jpg.image_url} alt={character.name} width="200px" />
          <h2>{character.name}</h2>
          <h2>{character.name_kanji}</h2>
          <p>Favorites: {character.favorites}</p>
          <p>
            {showMore ? character.about : character.about?.substring(0, 450) + "..."}
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          </p>
          <h2>Voice Actors</h2>
          {[...new Set(VA.map(va => va.language?.trim().toUpperCase()))].sort().map((lang, index) => (
            <div key={index}>
              <h3>{lang}</h3>
              {VA.filter(va => va.language?.trim().toUpperCase()=== lang).map((va, vaIndex) => (
                <Link to={`/VA/${va.person.mal_id}`} key={vaIndex}>
                  <img src={va.person.images.jpg.image_url} alt={va.person.name} />
                  <h4>{va.person.name}</h4>
                </Link>
              ))}
            </div>
          ))}
        </>
      )}
    </div> 
  )
}