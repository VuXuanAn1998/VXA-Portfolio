import React, { useRef } from 'react'
import './button.scss'
interface ButtonProps {
	className?: string
	type?: 'submit' | 'reset' | 'button'
	children?: React.ReactNode
}
const ComponentName: React.FC<ButtonProps> = ({ className, type, children }) => {
	const btnRef = useRef<HTMLButtonElement | null>(null)

	const handleHoverIn = () => {
		btnRef.current && btnRef.current.classList.add('is-hover')
	}
	const handleHoverOut = () => {
		btnRef.current && btnRef.current.classList.remove('is-hover')
	}
	return (
		<div>
			<button
				className={`btn ${className}`}
				type={type}
				onMouseEnter={handleHoverIn}
				onMouseLeave={handleHoverOut}
				ref={btnRef}
			>
				{children}
			</button>
		</div>
	)
}

export default ComponentName
