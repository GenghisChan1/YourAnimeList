export const ACTIONS = {
  Loading: 'Loading',
  GET_RATED: 'GET_RATED',
  GET_AIRING: 'GET_AIRING',
  GET_POPULARITY: 'GET_POPULARITY',
  GET_POPULAR_THISYEAR: 'GET_POPULAIRTY_THISYEAR',
  GET_SEARCH: 'GET_SEARCH'
};  

export const initialStates = {
  loading: false,
  isSearch: false,
  
  //handle loading animes
  popularAnime: [],
  airingAnime: [],
  ratedAnime: [],
  popularAnimeThisYear: [],
  searchResults: []
};

export function globalreducer (state, action){
  switch(action.type){
    case ACTIONS.Loading:
      return { ...state, loading: true };
    case ACTIONS.GET_RATED:
      return { ...state, ratedAnime: action.payload, loading: false };
    case ACTIONS.GET_AIRING:
      return { ...state, airingAnime: action.payload, loading: false };  
    case ACTIONS.GET_POPULARITY:
      return { ...state, popularAnime: action.payload, loading: false };
    case ACTIONS.GET_SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
    default:
      return state;
  }
}