import { useState } from 'react'
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
			<div className='bg-slate-500 p-5 text-16-26-600 text-white'>
				{listAction.find((item) => item.value === AvtiveButton)?.label}
			</div>
			<div className='grid h-full grid-cols-[auto_1fr]'>
				<div className='border-right border-1px h-full w-full border-solid bg-slate-800'>
					<ul className='flex cursor-pointer flex-col gap-5 px-5 pt-5'>
						{listAction.map((action, index) => {
							return (
								<li
									key={index}
									className={`flex gap-2 rounded-lg py-2 pl-4 text-white`}
									onClick={() => setAvtiveButton(action.value)}
								>
									<ImInfo className='my-auto h-6 w-6 text-white' />
									<span className='my-auto w-full text-16-26-600'>{action.label}</span>
								</li>
							)
						})}
					</ul>
				</div>

				<div className='h-full w-full'>{AvtiveButton === 1 ? <BasicInfo /> : null}</div>
			</div>
		</div>
	)
}
