import React from 'react'
import Router from './routes'
import './App.css'
import ThemeConfig from './theme';


const App = () => {
	return (
		<ThemeConfig>
			<Router />
		</ThemeConfig>
	)
}

export default App