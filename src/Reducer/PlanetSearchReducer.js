const initialState = {planets: [], isValidUser:false, displayPlanetDetails : false, selectedPlanet:'', errorMsg: ''};

const PlanetSearchReducer = (state=initialState,action) => {

switch(action.type) {

	case 'SEARCH_COMPLETE' :
		return {...state, planets : action.payload};
	case 'GET_USERS_COMPLETE' :
		return {...state, isValidUser : isValid(action), errorMsg : !isValid(action) ? 'User Authentication failed.!!' : ''};
	case 'DISPLAY_PLANET_DETAILS' :
		return {...state, displayPlanetDetails : true, selectedPlanet : action.payload};
	case 'CLEAR_PLANET_DETAILS' :
		return {...state, displayPlanetDetails : false, selectedPlanet : ''};
	case 'SIGN_OUT' :
		return {...state, isValidUser : false};
	default :
		return state;
	}
}

function isValid(action){
	for(var i = 0; i<action.payload.length; i++){
		if(action.payload[i].name === action.loggingUser){
			return true;
		}
	}

}

export default PlanetSearchReducer