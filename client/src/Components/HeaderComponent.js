import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarToggler,
	Row,
	Col,
	NavItem
} from "reactstrap";
import {Router,Link, NavLink} from 'react-router-dom'



const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		
			<div>
				<Navbar style={{ background: "#E6E4B1" }} expand="md">
					<NavbarBrand className="header-brand" href="/">
						ElizaServer
					</NavbarBrand>
					<NavbarToggler onclick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link
									className="header-text"
									style={{
										marginRight: "15px",
										textDecoration: "none"
									}}
									to="/addanimal">
									Add Animal
								</Link>
							</NavItem>
							<NavItem>
								<Link
									className="header-text"
									style={{
										marginRight: "15px",
										textDecoration: "none"
									}}
									to="/">
									Inventory
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
	
	);
};

export default Header;
