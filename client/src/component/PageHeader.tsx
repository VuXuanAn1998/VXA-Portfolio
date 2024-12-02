import React from 'react'

interface PageHeaderProps {
	white: string
	yellow: string
	titleBg: string
}
const PageHeader: React.FC<PageHeaderProps> = ({ white, yellow, titleBg }) => {
	return (
		<div className='relative flex w-full items-center px-4 py-20 align-middle uppercase md:px-0 md:py-20'>
			<h1 className='w-full text-center text-[35px] font-black text-[#72b626] dark:text-[#ffb400] md:text-[56px]'>
				<span className='text-[#666666] dark:text-white'>{white}</span> {yellow}
			</h1>
			<span className='absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-[130px] font-extrabold leading-[0.7] text-[#1E2530] opacity-[0.07] dark:text-[#FFFFFF]'>
				{titleBg}
			</span>
		</div>
	)
}

export default PageHeader
