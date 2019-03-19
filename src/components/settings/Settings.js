import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit } from '../../actions/settingsActions';

import React, { Component } from 'react';

class Settings extends Component {
	render() {
		return <div />;
	}
}

export default connect(
	(state, props) => ({
		auth: state.firebase.auth,
		settings: state.settings
	}),
	{ setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
