import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
const EducationExperiences: React.FC<{ EduAndEx: any }> = ({ EduAndEx }) => {
	return (
		<div>
			<p className='text-[26px] font-bold text-[#666666] text-center uppercase'>Educations And Experiences</p>
			<hr className='border-[1px] border-[#6666666] w-[40%] my-8 mx-auto'></hr>
			<div className='grid grid-flow-row grid-cols-2 gap-4'>
				{EduAndEx &&
					EduAndEx.map((item: any, index: number) => {
						return (
							<div className='flex gap-4 flex-wrap' key={index}>
								<div className='grid grid-flow-row gap-0 grid-rows-[auto_1fr]'>
									<div className='p-3 rounded-[50%] dark:bg-primary-dark bg-primary-light w-fit h-fit'>
										<GiGraduateCap className='text-white w-5 h-5' />
									</div>
									<div className='h-full w-[1px] bg-[#a5a5a5] mx-auto my-0 self-stretch'></div>
								</div>

								<div className='flex flex-col text-[#666666] gap-3'>
									<div className='bg-[#666666] rounded-[35px] px-5 py-1 text-sm text-white w-fit'>{item.time}</div>
									<p className=' font-semibold text-[18px]'>
										{item.title} {'- '}
										<span className='font-semibold  text-[15px]'>{item.subTitle}</span>
									</p>
									<div className='text-base font-normal'>{item.desc}</div>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default EducationExperiences
