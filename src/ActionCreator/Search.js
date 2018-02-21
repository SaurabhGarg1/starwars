import {SearchService} from '../Services/SearchService'
import {UserService} from '../Services/SearchService'

export const Search = (text) => {
  return (dispatch) => {

    SearchService(text)
      .then(res => dispatch({ type: "SEARCH_COMPLETE", payload: res.results }))
      .catch(err => dispatch({ type: "SEARCH_ERROR", payload: err }));
  }
}

export const isValidUser = (text) => {
  return (dispatch) => {
    UserService()
      .then(res => dispatch({ type: "GET_USERS_COMPLETE", payload: res.results, loggingUser: text }))
      .catch(err => dispatch({ type: "GET_USERS_ERROR", payload: err }));
  }

}

export const DisplayPlanetDetails = (planet) => {
return {
  type : 'DISPLAY_PLANET_DETAILS',
  payload : planet
  }
}

export const clearCharacterDetails = () => {
  return {
    type : 'CLEAR_PLANET_DETAILS'
    }
  }

export const signOut = () => {
  return {
    type : 'SIGN_OUT'
  }
}