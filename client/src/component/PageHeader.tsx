import React from 'react'

interface PageHeaderProps {
	white: string
	yellow: string
	titleBg: string
}
const PageHeader: React.FC<PageHeaderProps> = ({ white, yellow, titleBg }) => {
	return (
		<div className='w-full md:py-20 md:px-0 py-20 px-4 uppercase relative flex align-middle items-center '>
			<h1 className='md:text-[56px] text-[#72b626] dark:text-[#ffb400] font-black text-center text-[35px] w-full'>
				<span className='text-[#666666] dark:text-white'>{white}</span> {yellow}
			</h1>
			<span className='opacity-[0.07]  absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-[130px] text-[#1E2530] dark:text-[#FFFFFF] font-extrabold leading-[0.7]'>
				{titleBg}
			</span>
		</div>
	)
}

export default PageHeader
