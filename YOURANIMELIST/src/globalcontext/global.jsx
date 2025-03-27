import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { globalreducer, ACTIONS, initialStates } from "./globalreducer/reducerActions";
import { MALv4 } from './baseURLs';

const GlobalContext = createContext();

export function GlobalcontextProvider({ children }) {

  const [state, dispatch] = useReducer( globalreducer, initialStates );
  const [search, setSearch] = useState("")
  
  const hashMap = {
    "bypopularity": [ACTIONS.GET_POPULARITY, "anime?filter=bypopularity"],
    "byairing": [ACTIONS.GET_AIRING, "anime?filter=airing"],
    "byrating": [ACTIONS.GET_RATED, "anime"]
  }

  async function getData(version, type){
    dispatch({ type: ACTIONS.Loading })
    try {
      const res = await fetch(`${ version }/top/${hashMap[type][1]}`);
      const data = await res.json();
      dispatch({ type: hashMap[type][0], payload: data.data });
    } catch (error) {
      console.error("Error fetching anime:", error);
      dispatch({...state, loading: false});
    }
  }

  async function searchQuery(query){
    dispatch({ type: ACTIONS.Loading })
    try {
      const res = await fetch(`${ MALv4 }/anime?q=${query}&order_by=popularity&sort=asc&sfw`);
      const data = await res.json();
      dispatch({ type: ACTIONS.GET_SEARCH, payload: data.data });
    } catch (error) {
      console.error("Error fetching anime:", error);
      dispatch({...state, loading: false});
    }
  }

  function handleChange (event) {
    setSearch(event.target.value);
    if(event.target.value === ""){
      state.isSearch = false;
    }
  }

  function handleSubmit (event) {
    event.preventDefault();
    if (search){
      search(search);
      state.isSearch = true;
    } else {
      state.isSearch = false;
    }
  }

  useEffect(() => {
    getData(MALv4, "byairing");
  }, []);
  
  return (
    <GlobalContext.Provider value={{
      ...state,
      dispatch,
      ACTIONS,
      handleChange,
      handleSubmit,
      searchQuery,
      search
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}