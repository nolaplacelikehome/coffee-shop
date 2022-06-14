import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
	const isDesktop = useMediaQuery({
		query: '(min-width: 900px)'
	});
	return (
		<>
			{
				isDesktop
				?
				<DesktopNavbar /> :
				<MobileNavbar />	
			}
		</>
	)
}
