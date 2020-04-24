import { put, takeLatest, all } from 'redux-saga/effects';
export function* fetchSpecies(action) {
  try{
    let response = yield fetch('https://swapi.dev/api/species')
          .then(response => response.json(), );
    let speciesList = response.results;
    while(response.next) {
      response = yield fetch(response.next).then(response => response.json(), );
      speciesList = [...speciesList, ...response.results]
    }
    
    yield put({ 
      type: "SPECIES_RECEIVED", 
      speciesList: speciesList
    });

    yield put({ 
      type: "SET_SPECIES", 
      species: speciesList[0]
    });
  } catch(e) {
    console.log(e)
  }
}

export function* setSpecies(action) {
  try{
    const people = action.species.people;
    yield put({ 
      type: "GET_SPECIES_PEOPLE", 
      people
    });
  } catch(e) {
    console.log(e)
  }
}

export function* fetchSpeciesPeople(action) {
  const people = action.people;
  let response;
  let peopleList = [];
  for(var url of people) {
    response = yield fetch(url).then(response => response.json(), );
    if(response) {
      peopleList.push(response)
    }
  };
  yield put({ 
    type: "SPECIES_PEOPLE_RECEIVED", 
    peopleList: peopleList
  });
}

export function* actionWatcher() {
    yield takeLatest('GET_SPECIES_LIST', fetchSpecies);
    yield takeLatest('SET_SPECIES', setSpecies);
    yield takeLatest('GET_SPECIES_PEOPLE', fetchSpeciesPeople);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}