import React from 'react'
import { TbMessageShare } from 'react-icons/tb'
export default function FormContact() {
	return (
		<div className=''>
			<div className='grid grid-cols-2 gap-4'>
				<div className='col-span-1'>
					<input type='text' className='rounded-[30px] py-4 px-8 bg-[#EEEEEE]  w-full' />
				</div>
				<div className='col-span-1'>
					<input type='text' className='rounded-[30px] py-4 px-8 bg-[#EEEEEE] w-full' />
				</div>
				<div className='col-span-2'>
					<input type='text' className='rounded-[30px] py-4 px-8 bg-[#EEEEEE]  w-full' />
				</div>
				<div className='col-span-2'>
					<textarea rows={7} className='rounded-[30px] py-4 px-8 bg-[#EEEEEE] w-full' />
				</div>
				<div className='col-span-2'>
					<button className='border-[1px] border-primary relative pr-4 rounded-[35px] mb-5 btn'>
						<span className='p-4 rounded-[35px] bg-primary btn-icon w-full h-full'>
							<TbMessageShare className='text-white w-5 h-5 ml-auto' />
						</span>
						<span className='font-bold text-base text-secondary btn-text pl-16 pr-2 py-[14px] inline-block uppercase'>
							Send Message
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
