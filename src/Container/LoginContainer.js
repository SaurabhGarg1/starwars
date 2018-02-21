import Login from '../Component/Login'
import {isValidUser} from '../ActionCreator/Search'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchUser : (text) => (isValidUser(text))
  },dispatch);
}

const mapStateToProps = (state) => {
	return {
		isValidUser : state.isValidUser,
		errorMsg : state.errorMsg
	}
}

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer

