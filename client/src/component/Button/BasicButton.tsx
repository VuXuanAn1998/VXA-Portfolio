import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'
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
