import React from 'react'
import Router from './routes'
import './App.css'
import { useAppSelector } from './hooks/redux'

const App = () => {
	return (
		<div>
			<Router />
		</div>
	)
}

export default App