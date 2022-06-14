import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { navItems } from './navItems';
import LogInBtn from '../Buttons/LogInBtn';
import LogOutBtn from '../Buttons/LogOutBtn';
import '../../../dist/css/Navbar/DesktopNavbar';

export default function DesktopNavbar() {
	return (
		<div className="desktop-nav-container">
			<div className="desktop-brand">
				<div className="desktop-icon"><FontAwesomeIcon icon={faMugSaucer} color='#88847F' size='3x' /></div>
				<h2 className="desktop-brand-name">Coffee Shop</h2>
			</div>
			<div className="desktop-nav">
				<ul className='desktop-nav-list'>
					{
						navItems.map(({ name, path, id }) => 
							<li key={id}><a href={path}>{name}</a></li>
						)
					}
				</ul>
			</div>
			<div className="desktop-nav-btns">
				<LogInBtn />
				<LogOutBtn />
			</div>
		</div>
	)
}
