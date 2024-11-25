import React, { useState } from 'react'
import { ImInfo } from 'react-icons/im'
import BasicInfo from './BasicInfomation'
export default function Admin() {
	const [AvtiveButton, setAvtiveButton] = useState<number>(1)
	const listAction = [
		{ label: 'Basic Infomation', value: 1 },
		{ label: 'Project', value: 2 },
		{ label: 'Education', value: 3 },
		{ label: 'Interest', value: 4 },
	]
	return (
		<div className='h-[100vh] bg-[#c9c9c921]'>
			<div className='p-5 bg-slate-500 text-white text-16-26-600'>
				{listAction.find((item) => item.value === AvtiveButton)?.label}
			</div>
			<div className='grid grid-cols-[auto_1fr] h-full'>
				<div className='h-full w-full border-right border-1px border-solid bg-slate-800'>
					<ul className='flex gap-5 flex-col px-5 pt-5 cursor-pointer'>
						{listAction.map((action, index) => {
							return (
								<li
									key={index}
									className={`text-white gap-2 flex rounded-lg pl-4 py-2 `}
									onClick={() => setAvtiveButton(action.value)}
								>
									<ImInfo className='text-white w-6 h-6 my-auto' />
									<span className='my-auto w-full text-16-26-600'>{action.label}</span>
								</li>
							)
						})}
					</ul>
				</div>

				<div className='h-full w-full  '>{AvtiveButton === 1 ? <BasicInfo /> : null}</div>
			</div>
		</div>
	)
}
