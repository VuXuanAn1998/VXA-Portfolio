import React from 'react'
import { FaPlus } from 'react-icons/fa'
const NumberUser: React.FC<{ numberUser: { label: string; value: string }[] }> = ({ numberUser }) => {
	return (
		<div className='md:col-span-1 col-span-4 flex-col gap-5 grid gird-col-2'>
			{numberUser &&
				numberUser.map((user: { label: string; value: string }, index: number) => {
					return (
						<div
							key={index}
							className='w-full border-[2px] border-primary-light border:text-primary-dark border-solid px-10 py-6 rounded md:col-span-2 col-span-1'
						>
							<div className='flex gap-1'>
								<span className='text-[50px] font-bold text-primary-light dark:text-primary-dark'>{user.value}</span>
								<FaPlus className='w-7 h-7 my-auto text-primary-light dark:text-primary-dark' />
							</div>
							<h1 className='text-[15px] text-[#666666] uppercase font-semibold'>{user.label}</h1>
						</div>
					)
				})}
		</div>
	)
}

export default NumberUser
