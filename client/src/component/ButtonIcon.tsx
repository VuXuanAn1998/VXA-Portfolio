import { ToggleButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

interface CustomToggleButtonProps {
	value: string
}
const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
	fontSize: '14px',
	textTransform: 'none',
	backgroundColor: theme.palette.mode === 'dark' ? '#B6BEC9' : 'white',
	color: theme.palette.mode === 'dark' ? 'white' : 'black',
}))
const ButtonIcon: React.FC<CustomToggleButtonProps> = ({ value }) => {
	return <CustomToggleButton value={value}>Vietnamese</CustomToggleButton>
}

export default ButtonIcon
