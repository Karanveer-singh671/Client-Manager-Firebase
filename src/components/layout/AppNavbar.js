import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class AppNavbar extends Component {
	state = {
		isAuthenticated: false
	};

	static getDerivedStateFromProps(props, state) {
		const { auth } = props;

		if (auth.uid) {
			return { isAuthenticated: true };
		} else {
			return { isAuthenticated: false };
		}
	}
	render() {
		const { isAuthenticated } = this.state;
		const { auth } = this.props;
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
				<div className="container">
					<Link to="/" className="navbar-brand">
						ClientManager
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarMain">
						<ul className="navbar-nav mr-auto">
							{isAuthenticated ? (
								<li className="nav-item">
									<Link to="/" className="nav-link">
										Dashboard
									</Link>
								</li>
							) : null}
						</ul>
						{isAuthenticated ? (
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Dashboard
								</Link>
							</li>
						) : null}
					</div>
				</div>
			</nav>
		);
	}
}
AppNavbar.propTypes = {
	firebase: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

export default compose(
	firebaseConnect(),
	connect((state, props) => ({
		auth: state.firebase.auth,
		settings: state.settings
	}))
)(AppNavbar);
