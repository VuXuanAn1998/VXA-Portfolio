// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slice'
const store = configureStore({
	reducer: {
		user: exampleReducer,
	},
})

export default store
