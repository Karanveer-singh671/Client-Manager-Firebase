import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import React, { Component } from 'react';

class ClientDetails extends Component {
	render() {
		return <div />;
	}
}

export default compose(
	firestoreConnect((props) => [ { collection: 'clients', storeAs: 'client', doc: props.match.params.id } ]),
	connect(({ firestore: { ordered } }, props) => ({
		client: ordered.client && ordered.client[0]
	}))
)(ClientDetails);
