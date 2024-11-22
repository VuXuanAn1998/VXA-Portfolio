import React, { useState } from 'react'

export default function Admin() {
	const [AvtiveButton, setAvtiveButton] = useState<number>(1)
	const listAction = [
		{ label: 'Basic Infomation', value: 1 },
		{ label: 'Project', value: 2 },
		{ label: 'Education', value: 3 },
		{ label: 'Interest', value: 4 },
	]
	return (
		<div className='h-[100vh]'>
			<div className='p-5 bg-slate-500 text-white text-16-26-600'>
				{listAction.find((item) => item.value === AvtiveButton)?.label}
			</div>
			<div className='grid grid-cols-[200px_1fr] h-full'>
				<div className='h-full w-full border-right border-1px border-solid border-[red]'>
					<ul className='flex gap-5 flex-col px-5 pt-5 cursor-pointer'>
						{listAction.map((action, index) => {
							return (
								<li
									key={index}
									className={`hover:bg-yellow-300  rounded-lg pl-4 py-2 ${AvtiveButton === action.value ? 'text-white bg-slate-400' : ''}`}
									onClick={() => setAvtiveButton(action.value)}
								>
									{action.label}
								</li>
							)
						})}
					</ul>
				</div>

				<div className='h-full w-full bg-red-50 '> this is content</div>
			</div>
		</div>
	)
}
