import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './container/HomePage';

import '../dist/css/App.css';

function App() {
	return (
		<div className="app-container">
			<HomePage />
		</div>
	);
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);