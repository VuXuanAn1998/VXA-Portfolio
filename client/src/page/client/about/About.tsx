import PageHeader from '../../../component/PageHeader'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
const About: React.FC = () => {
	return (
		<div>
			<PageHeader white='About' yellow='Me' titleBg='About Me' />
			<div className='grid grid-cols-5 container mx-auto'>
				<div className='md:col-span-4 col-span-4'>
					<div className='pb-[28px] text-[26px] text-[#666666] font-bold uppercase'>Basic Information</div>
					<div className='grid grid-cols-2 grid-flow-row'>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Surname:</span>
							<span className='text-4 text-[#666666] font-bold '>Vu</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Date of birth:</span>
							<span className='text-4 text-[#666666] font-bold '>26</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Nationality:</span>
							<span className='text-4 text-[#666666] font-bold '>VietNam</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Telephone number:</span>
							<span className='text-4 text-[#666666] font-bold '>0705882717</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Language:</span>
							<span className='text-4 text-[#666666] font-bold '>VietNam, English</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Surname:</span>
							<span className='text-4 text-[#666666] font-bold '>Vu</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Date of birth:</span>
							<span className='text-4 text-[#666666] font-bold '>26</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Nationality:</span>
							<span className='text-4 text-[#666666] font-bold '>VietNam</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Telephone number:</span>
							<span className='text-4 text-[#666666] font-bold '>0705882717</span>
						</div>
						<div className='mb-5'>
							<span className='text-4 text-[#666666] font-semibold mr-2'>Language:</span>
							<span className='text-4 text-[#666666] font-bold '>VietNam, English</span>
						</div>
					</div>
				</div>
				<div className='md:col-span-1 col-span-4 flex-col gap-5 grid gird-col-2'>
					<div className='w-full border-[2px] border-primary-light border:text-primary-dark border-solid px-10 py-6 rounded md:col-span-2 col-span-1'>
						<div className='flex gap-1'>
							<span className='text-[50px] font-bold text-primary-light dark:text-primary-dark'>5</span>
							<FaPlus className='w-7 h-7 my-auto text-primary-light dark:text-primary-dark' />
						</div>
						<h1 className='text-[15px] text-[#666666] uppercase font-semibold'>Projects</h1>
					</div>

					<div className='w-full border-[2px] border-primary-light border:text-primary-dark border-solid px-10 py-6 rounded md:col-span-2 col-span-1'>
						<div className='flex gap-1'>
							<span className='text-[50px] font-bold text-primary-light dark:text-primary-dark'>2</span>
							<FaPlus className='w-7 h-7 my-auto text-primary-light dark:text-primary-dark' />
						</div>
						<h1 className='text-[15px] text-[#666666] uppercase font-semibold'>Years Of Experiences</h1>
					</div>
				</div>
			</div>
			<button className='rounded flex border-2 border-black'>
				<span>
					<IoMdDownload className=' dark:bg-primary-dark bg-primary-light  p-3' />
				</span>
				<span>Download Resume</span>
			</button>
		</div>
	)
}

export default About
