import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";

import confLogo from "./../images/badge-header.svg";

import BadgesList from "./../components/BadgesList";
import PageLoading from "./../components/PageLoading";
import PageError from "./../components/PageError";

import api from "../api";

export default class Badges extends Component {
	state = {
		loading: true,
		data: undefined,
		error: null,
	};

	componentDidMount() {
		//console.log("3. componentDidMount");
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.list();
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	/*constructor(props) {
		super(props);
		
	}

	
	componentDidUpdate(prevProps, prevState) {
		console.log("5. componentDidUpdate()");
		console.log({
			prevProps: prevProps,
			prevState: prevState,
		});
		console.log({
			props: this.props,
			state: this.state,
		});
	}

	componentWillUnmount() {
		console.log("6. componentWillUnmount()");
	}*/
	render() {
		//console.log("2/4. render()");
		if (this.state.loading) {
			return <PageLoading />;
		}
		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return (
			<>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img src={confLogo} alt="" className="Badges_conf-logo" />
						</div>
					</div>
				</div>
				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
					<div className="Badges__list">
						<div className="Badges__container">
							<BadgesList badges={this.state.data} />
						</div>
					</div>
				</div>
			</>
		);
	}
}
