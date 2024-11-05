import React, { ReactNode } from 'react'

type MyComponentProps = {
	children: ReactNode
	label: string
}

const Button: React.FC<MyComponentProps> = ({ children, label }: MyComponentProps) => {
	return (
		<button className='border-[1px] border-primary relative pr-4 rounded-[35px] mb-5 btn'>
			<span className='p-4 rounded-[35px] bg-primary btn-icon w-full h-full'>{children}</span>
			<span className='font-bold text-base text-secondary btn-text pl-16 pr-2 py-[14px] inline-block'>{label}</span>
		</button>
	)
}

export default Button
