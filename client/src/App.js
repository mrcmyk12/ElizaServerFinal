import React, { Component } from "react";
import "./App.css";
import Header from "./Components/HeaderComponent";
import Animal from "./Components/AnimalComponent";
import RenderAnimal from "./Components/RenderAnimal";
import AddAnimal from "./Components/AddAnimal";
import Home from "./Components/Home";
import axios from "axios";
import { Card, CardImg } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animalsOnArk: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5001/animals/")
			.then((response) => {
				console.log(response);
				this.setState({
					animalsOnArk: response.data
				});
			})
			.catch((error) => {
				this.setState({ errorMessage: error.message });
				console.error("There was an error!", error);
			});
	}

	render() {
		const AnimalWithId = ({ match }) => {
			return (
				<div>
					<RenderAnimal
						animal={
							this.state.animalsOnArk.filter(
								(person) => person._id === match.params._id
							)[0]
						}
					/>
				</div>
			);
		};

		const mammalFilter = this.state.animalsOnArk.map((animal) => {
			if (animal.species === "Mammal") {
				return <div>{animal.name}</div>;
			}
		});

		const reptileFilter = this.state.animalsOnArk.map((animal) => {
			if (animal.species == "Reptile") {
				return <div>{animal.name}</div>;
			}
		});

		const fishFilter = this.state.animalsOnArk.map((animal) => {
			if (animal.species == "Fish") {
				return <div>{animal.name}</div>;
			}
		});

		const birdFilter = this.state.animalsOnArk.map((animal) => {
			if (animal.species == "Bird") {
				return <div>{animal.name}</div>;
			}
		});

		const amphibianFilter = this.state.animalsOnArk.map((animal) => {
			if (animal.species == "Amphibian") {
				return <div>{animal.name}</div>;
			}
		});

		return (
			<div>
				<BrowserRouter>
					<Header />

					<Route path="/">
						<Home
							mammals={mammalFilter}
							reptiles={reptileFilter}
							fish={fishFilter}
							birds={birdFilter}
							amphibians={amphibianFilter}
						/>
					</Route>
					<Route path="/addanimal">
						<AddAnimal />
					</Route>
					<Route path="/:_id" component={AnimalWithId} />
				</BrowserRouter>
			</div>
		);
	}
}

/* {this.state.animalsOnArk.map((animal) => { return<div className='col-3'> {animal.name}</div>})} */

export default App;
