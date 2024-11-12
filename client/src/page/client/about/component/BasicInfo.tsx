import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
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
			<button className='border-[1px] border-primary relative pr-4 rounded-[35px] mb-5 btn'>
				<span className='p-4 rounded-[35px] bg-primary btn-icon w-full h-full'>
					<MdOutlineFileDownload className='text-white w-5 h-5 ml-auto' />
				</span>
				<span className='font-bold text-base text-secondary btn-text pl-16 pr-2 py-[14px] inline-block uppercase'>
					Download resume
				</span>
			</button>
		</div>
	)
}

export default BasicInfo
