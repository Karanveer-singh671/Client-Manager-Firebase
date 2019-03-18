import React, { Component } from 'react';

export default class Clients extends Component {
	render() {
		const clients = [
			{
				id: '123',
				firstName: 'Kevin',
				lastName: 'John',
				email: 'a@a',
				phone: '555',
				balance: '30'
			}
		];
		if (clients) {
			return (
				<div>
					<div className="row">
						<div className="col-md-6">
							<h2>
								{' '}
								 <i className="fas fa-users" />Clients {' '}
							</h2>
						</div>
						<div className="col-md-6" />
					</div>
				</div>
			);
		} else {
			return <h1>Loading... </h1>;
		}
	}
}
