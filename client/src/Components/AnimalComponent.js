import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

// function RenderAnimal(animal) {

//     const animalStuff = {animal.map((stuff) => {
//         return {stuff}
//     })}

//     return(
//         <div>
//             {this.props.animal.map((stuff) => {
//                 return <div key={stuff._id}>
//                     {stuff.name}
//                 </div>
//             })}
//         </div>
//     )
// }



class Animals extends Component {

	render() {


		return (
            <div className='col-3'>
                <h2 style={{fontSize:"100px"}}>{this.props.animalData.name}</h2>
            </div>
            )
		
	}
}

export default Animals;
