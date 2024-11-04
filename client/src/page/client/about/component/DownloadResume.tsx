import React from 'react'
import { IoMdDownload } from 'react-icons/io'
const DownloadResume: React.FC = () => {
	return (
		<button className='border-[1px] dark:border-primary-dark border-primary-light  grid grid-flow-col gap-3 content-center pr-4 rounded-[35px] mb-5'>
			<span className='p-4 rounded-[50%] dark:bg-primary-dark bg-primary-light '>
				<IoMdDownload className='text-white w-5 h-5' />
			</span>
			<span className='my-auto font-bold text-base text-[#666666]'>Download Resume</span>
		</button>
	)
}

export default DownloadResume
