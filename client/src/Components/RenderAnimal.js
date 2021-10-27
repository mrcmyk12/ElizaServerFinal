import React, { Component } from "react";
import { Button } from "reactstrap";

class RenderAnimal extends Component {
	render() {
		return <div>{this.props.animal.name}</div>;
	}
}

export default RenderAnimal;
