import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
interface BasicButtonProps {
	icon: any
	name: string
	path: string
}
const BasicButton: React.FC<BasicButtonProps> = ({ icon, name, path }) => {
	return (
		<Link to={path} className='basic-button'>
			{icon}
			<span className=''>{name}</span>
		</Link>
	)
}
export default BasicButton
