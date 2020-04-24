const initialState = {
   speciesList: [],
   selectedSpecies: {},
   loading: false, 
   peopleList: []
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_SPECIES_LIST':          
         return { ...state, loading: true };
      case 'SPECIES_RECEIVED':
         return { 
               ...state, 
               speciesList: action.speciesList,
               loading: false
         };
      case 'SET_SPECIES':
         return {
               ...state,
               selectedSpecies: action.species,
               loading: false 
         };
      case 'GET_SPECIES_PEOPLE':          
         return { ...state, loading: true };
      case 'SPECIES_PEOPLE_RECEIVED':
         return { 
               ...state, 
               peopleList: action.peopleList,
               loading: false
         }
      default: 
         return state;
   }
};
export default reducer;