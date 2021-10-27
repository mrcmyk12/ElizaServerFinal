import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import staticImage from "../images/Eliza_Image_Cropped.jpg";
import axios from "axios";

class AddAnimal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			species: "Mammal",
			animaltype: "",
			age: 0,
			food: "",
			habitatreq: "",
			careinstructions: ""
		};

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeSpecies = this.onChangeSpecies.bind(this);
		this.onChangeAnimalType = this.onChangeAnimalType.bind(this);
		this.onChangeAge = this.onChangeAge.bind(this);
		this.onChangeFood = this.onChangeFood.bind(this);
		this.onChangeHabitatReq = this.onChangeHabitatReq.bind(this);
		this.onChangeCareInstructions = this.onChangeCareInstructions.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	onChangeSpecies(e) {
		this.setState({
			species: e.target.value
		});
	}

	onChangeAnimalType(e) {
		this.setState({
			animaltype: e.target.value
		});
	}

	onChangeAge(e) {
		this.setState({
			age: e.target.value
		});
	}

	onChangeFood(e) {
		this.setState({
			food: e.target.value
		});
	}

	onChangeHabitatReq(e) {
		this.setState({
			habitatreq: e.target.value
		});
	}

	onChangeCareInstructions(e) {
		this.setState({
			careinstructions: e.target.value
		});
	}


	onSubmit(e) {
		e.preventDefault();

		const animal = {
			name: this.state.name,
			species: this.state.species,
			animaltype: this.state.animaltype,
			age: this.state.age,
			food: this.state.food,
			habitatreq: this.state.habitatreq,
			careinstructions: this.state.careinstructions
		};

		console.log(animal);

		axios.post("http://localhost:5001/animals", animal).then((res) => {
			console.log(res.data);
		});

		e.target.reset();
	}

	componentDidMount() {

		const animal = {
			name: this.state.name,
			species: this.state.species,
			animaltype: this.state.animaltype,
			age: this.state.age,
			food: this.state.food,
			habitatreq: this.state.habitatreq,
			careinstructions: this.state.careinstructions
		};

		axios.post("http://localhost:5001/animals", animal).then((res) => {
			console.log(res.data);
		});

		<Alert>
			`${this.state.name} has been added`
		</Alert>


	}


	render() {
		return (
			<div className="container" style={{ height: "900px" }}>
				<div className="row">
					<div className="col-2" style={{ alignContent: "center" }}>
						<img
							style={{ height: "150px", borderRadius: "15px" }}
							src={staticImage}
						/>
						<Button className="buttonone" style={{ marginLeft: "40px" }}>
							Upload Photo
						</Button>
					</div>
					<div className="col-10">
						<h1
							style={{ marginLeft: "150px" }}
							className="homepage-header">
							Add Animal
						</h1>
						<Form
							id="create-animal-form"
							onSubmit={this.onSubmit}
							style={{ marginLeft: "150px" }}>
							<div className="row">
								<Label className="label-text">Animal Name</Label>
							</div>
							<input
								type="text"
								value={this.state.name}
								id="name"
								placeholder="Animal Name"
								style={{
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "75%",
									height: "35px"
								}}
								onChange={this.onChangeName}
							/>
							<div className="row">
								<Label className="label-text">Species</Label>
							</div>

							<select
								style={{
									marginRight: "10px",
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "60%",
									height: "35px"
								}}
								type="select"
								name="species"
								placeholder='Select species'
								value={this.state.species}
								onChange={this.onChangeSpecies}
								id="species">
								<option>Mammal</option>
								<option>Bird</option>
								<option>Amphibian</option>
								<option>Reptile</option>
								<option>Fish</option>
							</select>
							<div>
								<Label className="label-text">
									Animal Type (i.e Dog, Cat, Bearded Dragon, etc.)
								</Label>
							</div>
							<input
								type="text"
								value={this.state.animaltype}
								onChange={this.onChangeAnimalType}
								name="animalType"
								id="animalType"
								style={{
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "75%",
									height: "35px"
								}}
								placeholder="Type of Animal (Dog, Cat, Bearded Dragon, etc.)"
							/>
							<div>
								<Label className="label-text">Age</Label>
							</div>
							<input
								type="number"
								value={this.state.age}
								onChange={this.onChangeAge}
								name="age"
								id="age"
								style={{
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "25%",
									height: "35px"
								}}
								placeholder="Age"
							/>
							<div>
								<Label className="label-text">Food</Label>
							</div>
							<input
								type="text"
								value={this.state.food}
								name="food"
								onChange={this.onChangeFood}
								id="food"
								style={{
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "75%",
									height: "35px"
								}}
								placeholder="Food Preferences"
							/>
							<div>
								<Label className="label-text">
									Habitat Requirements
								</Label>
							</div>
							<textarea
								type="text"
								value={this.state.habitatreq}
								onChange={this.onChangeHabitatReq}
								name="habitatReq"
								id="habitatReq"
								style={{
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "75%",
									height: "100px",
									paddingBottom: "75px",
									wordWrap:'break-word'
								}}
								placeholder="Habitat Requirements"
							/>
							<div>
								<Label className="label-text">Care Instructions</Label>
							</div>
							<textarea
								type="textarea"
								value={this.state.careinstructions}
								onChange={this.onChangeCareInstructions}
								name="careinstructions"
								id="careinstructions"
								style={{
									fontFamily: "Roboto",
									borderRadius: "5px",
									borderStyle: "none",
									width: "75%",
									height: "150px",
									paddingBottom: "125px"
								}}
								placeholder="Care Instructions"
							/>
							<div className="row">
								<div className="col-2">
									<Button className="buttontwo">Cancel</Button>
								</div>
								<div className="col-2">
									<Button className="buttonone">Submit</Button>
								</div>
							</div>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddAnimal;
