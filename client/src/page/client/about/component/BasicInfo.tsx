import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
const BasicInfo: React.FC<{ basicInfo: { value: string; label: string }[] }> = ({ basicInfo }) => {
	return (
		<div className='col-span-4 w-full md:col-span-4'>
			<div className='pb-[28px] text-[26px] font-bold uppercase text-[#666666]'>Basic Information</div>
			<div className='grid grid-flow-row grid-cols-2'>
				{basicInfo &&
					basicInfo.map((item: { label: string; value: string }) => {
						return (
							<div className='mb-5'>
								<span className='text-4 mr-2 font-semibold text-[#666666]'>{item.label}</span>
								<span className='text-4 font-bold text-[#666666]'>{item.value}</span>
							</div>
						)
					})}
			</div>
			<button className='border-primary btn relative mb-5 rounded-[35px] border-[1px] pr-4'>
				<span className='bg-primary btn-icon h-full w-full rounded-[35px] p-4'>
					<MdOutlineFileDownload className='ml-auto h-5 w-5 text-white' />
				</span>
				<span className='text-secondary btn-text inline-block py-[14px] pl-16 pr-2 text-base font-bold uppercase'>
					Download resume
				</span>
			</button>
		</div>
	)
}

export default BasicInfo
