import PlanetSearch from '../Component/PlanetSearch'
import {Search} from '../ActionCreator/Search'
import {DisplayPlanetDetails} from '../ActionCreator/Search'
import {clearCharacterDetails} from '../ActionCreator/Search'
import {signOut} from '../ActionCreator/Search'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    search : (text) => (Search(text)),
    displayPlanetDetails : (planet) => DisplayPlanetDetails(planet),
    clearCharacterDetails : () => clearCharacterDetails(),
    signOut : () => signOut()
  },dispatch);
}

const mapStateToProps = (state) => {
	return {
		state : state
	}
}

const PlanetSearchContainer = connect(mapStateToProps,mapDispatchToProps)(PlanetSearch);

export default PlanetSearchContainer

