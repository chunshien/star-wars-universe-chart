export const getSpeciesList = () => ({
    type: 'GET_SPECIES_LIST'
});

export const setSpecies= (species) => ({
    type: 'SET_SPECIES',
    species
});

export const getSpeciesPeople = (peoples) => ({
    type: 'GET_SPECIES_PEOPLE',
    peoples
});