import React from 'react'

const BasicInfo: React.FC<{ basicInfo: { value: string; label: string }[] }> = ({ basicInfo }) => {
	return (
		<div className='md:col-span-4 col-span-4 w-full'>
			<div className='pb-[28px] text-[26px] text-[#666666] font-bold uppercase'>Basic Information</div>
			<div className='grid grid-cols-2 grid-flow-row'>
				{basicInfo &&
					basicInfo.map((item: { label: string; value: string }) => {
						return (
							<div className='mb-5'>
								<span className='text-4 text-[#666666] font-semibold mr-2'>{item.label}</span>
								<span className='text-4 text-[#666666] font-bold '>{item.value}</span>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default BasicInfo
