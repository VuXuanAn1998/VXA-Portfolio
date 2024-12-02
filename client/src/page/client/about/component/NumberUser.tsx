import React from 'react'
import { FaPlus } from 'react-icons/fa'
const NumberUser: React.FC<{ numberUser: { label: string; value: string }[] }> = ({ numberUser }) => {
	return (
		<div className='gird-col-2 col-span-4 grid flex-col gap-5 md:col-span-1'>
			{numberUser &&
				numberUser.map((user: { label: string; value: string }, index: number) => {
					return (
						<div
							key={index}
							className='border:text-primary-dark col-span-1 w-full rounded border-[2px] border-solid border-primary-light px-10 py-6 md:col-span-2'
						>
							<div className='flex gap-1'>
								<span className='text-[50px] font-bold text-primary-light dark:text-primary-dark'>{user.value}</span>
								<FaPlus className='my-auto h-7 w-7 text-primary-light dark:text-primary-dark' />
							</div>
							<h1 className='text-[15px] font-semibold uppercase text-[#666666]'>{user.label}</h1>
						</div>
					)
				})}
		</div>
	)
}

export default NumberUser
