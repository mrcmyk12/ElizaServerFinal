import React from 'react'

function HomePage (props) {
    return(
        <div
					className="container"
					style={{ height: "500px", marginTop: "25px" }}>
					<div className="row">
						<div className="col-2">
							<h1 className="homepage-header">Reptiles</h1>
							<h5 className="homepage-text">{props.reptiles}</h5>
						</div>
						<div className="col-2">
							<h1 className="homepage-header">Mammals</h1>
							<h5 className="homepage-text">{props.mammals}</h5>
						</div>
						<div className="col-2">
							<h1 className="homepage-header">Fish</h1>
							<h5 className="homepage-text">{props.fish}</h5>
						</div>
						<div className="col-2">
							<h1 className="homepage-header">Birds</h1>
							<h5 className="homepage-text">{props.birds}</h5>
						</div>
						<div className="col-2">
							<h1 className="homepage-header">Amphibians</h1>
							<h5 className="homepage-text">{props.amphibians}</h5>
						</div>
					</div>
				</div>
    )
}

export default HomePage