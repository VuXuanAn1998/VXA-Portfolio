// src/redux/exampleSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TDetailsUser } from '../page/client/user.type'
// Khởi tạo async thunk để gọi API

interface YourFeatureState {
	value: TDetailsUser | null
}
const initialState: YourFeatureState = {
	value: null,
}

const exampleSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		increment: (state) => {},
		decrement: (state) => {
			// state.value -= 1
		},
		setValue: (state, action: PayloadAction<TDetailsUser>) => {
			state.value = action.payload
		},
	},
})

export const { increment, decrement, setValue } = exampleSlice.actions
export default exampleSlice.reducer
