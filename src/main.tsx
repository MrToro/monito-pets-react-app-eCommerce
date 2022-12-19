import React from 'react';
import ReactDOM from 'react-dom/client';

import ThemeProvider from './themes/ThemeProvider';
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
