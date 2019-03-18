import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// i for icon use bootstrap class
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
					<table className="table table-striped">
						<thead className="thead-inverse">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Balance</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{clients.map((client) => (
								<tr key={client.id}>
									<td>
										{client.firstName} {client.lastName}
									</td>
									<td>{client.email}</td>
									<td>${parseFloat(client.balance).toFixed(2)}</td>
									<td>
										<Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
											<i className="fas fa-arrow-circle-right" />
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		} else {
			return <h1>Loading... </h1>;
		}
	}
}
