import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDimensions } from './useDimensions';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { motion, useCycle } from 'framer-motion';
import MobileNavigation from './MobileNavigation';
import MenuToggle from './MenuToggle';
import '../../../dist/css/Navbar/MobileNavbar.css';

let sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 154.5px 41px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    } 
  },
};

export default function MobileNavbar() {
	const [sidebarState, sidebarChange] = useCycle(false, true);
  const containerRef = useRef() as React.MutableRefObject<HTMLElement>;
  const { height } = useDimensions(containerRef);

	return (
		<div className="mobile-nav-container">
			<div className="mobile-brand">
				<div className="mobile-icon"><FontAwesomeIcon icon={faMugSaucer} color='#88847F' size='lg' /></div>
				<h3 className="mobile-brand-name">Coffee Shop</h3>
			</div>
			<motion.nav
        initial={false}
        animate={sidebarState ? "open" : "closed"}
        custom={height}
        ref={containerRef}
				className="mobile-nav"
      >
        <motion.div className="background" variants={sidebar} />
        <MobileNavigation />
        <MenuToggle toggle={() => sidebarChange()} />
      </motion.nav>
		</div>
	)
}
