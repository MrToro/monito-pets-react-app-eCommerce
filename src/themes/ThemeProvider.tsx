import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import { theme } from './theme';
import { GlobalCSS } from './globals.css';

export default ({ children }: IThemeProps) => (
	<Provider theme={theme}>
		<GlobalCSS />

		{children}
	</Provider>
);

interface IThemeProps {
	children: React.ReactElement;
}
