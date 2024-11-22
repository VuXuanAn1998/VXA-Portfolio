import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'
type MyComponentProps = {
	path: string
	icon: any
	name: string
}

const ButtonLink: React.FC<MyComponentProps> = ({ path, icon, name }: MyComponentProps) => {
	return (
		<Link to={path} className='p-0 m-0 flex justify-end'>
			<li className='icon-content'>
				<a
					href='https://linkedin.com/'
					aria-label='LinkedIn'
					data-social='linkedin'
					className='bg-primary-light dark:bg-primary-dark'
				>
					<div className='filled bg-primary-dark'></div>
					{icon}
				</a>
				<div className='tooltip bg-primary-dark'>{name}</div>
			</li>
		</Link>
	)
}

export default ButtonLink
