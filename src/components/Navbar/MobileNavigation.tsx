import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from './navItems';
import MobileNavItems from './MobileNavItems';

let variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, delayChildren: -1 }
  }
};

export default function MobileNavigation() {
  return(
    <motion.ul variants={variants} className='mobile-nav-list'>
      {navItems.map(({ name, path, id }) =>
        <MobileNavItems path={path} key={id} name={name} />
    )}
    </motion.ul>
  );
}