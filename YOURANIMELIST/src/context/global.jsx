import { 
  createContext, useContext, 
  useReducer,
  useEffect 
} from "react";

import { 
  globalreducer,
  ACTIONS
 } from "./reducerActions";

import {
  MALv4
} from './baseURLs';

const GlobalContext = createContext();

export function GlobalcontextProvider({ children }) {

  const initialState = {
    user: null,
    isFetching: false,
    error: false,
  };

  const [state, dispatch] = useReducer(globalreducer, initialState);

  async function getpopularity(){
    const res = await fetch(`${MALv4}/top/anime`);
    const data = await res.json();
    console.log(data.data);
  }

  useEffect(() => {
    getpopularity();
  }, []);
  
  return (
    <GlobalContext.Provider value={{
      ...state,
      dispatch,
      ACTIONS
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}