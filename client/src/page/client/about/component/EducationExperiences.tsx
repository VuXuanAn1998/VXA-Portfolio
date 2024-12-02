import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
const EducationExperiences: React.FC<{ EduAndEx: any }> = ({ EduAndEx }) => {
	return (
		<div>
			<p className='text-center text-[26px] font-bold uppercase text-[#666666]'>Educations And Experiences</p>
			<hr className='mx-auto my-8 w-[40%] border-[1px] border-[#6666666]'></hr>
			<div className='grid grid-flow-row grid-cols-2 gap-4'>
				{EduAndEx &&
					EduAndEx.map((item: any, index: number) => {
						return (
							<div className='flex flex-wrap gap-4' key={index}>
								<div className='grid grid-flow-row grid-rows-[auto_1fr] gap-0'>
									<div className='h-fit w-fit rounded-[50%] bg-primary-light p-3 dark:bg-primary-dark'>
										<GiGraduateCap className='h-5 w-5 text-white' />
									</div>
									<div className='mx-auto my-0 h-full w-[1px] self-stretch bg-[#a5a5a5]'></div>
								</div>

								<div className='flex flex-col gap-3 text-[#666666]'>
									<div className='w-fit rounded-[35px] bg-[#666666] px-5 py-1 text-sm text-white'>{item.time}</div>
									<p className='text-[18px] font-semibold'>
										{item.title} {'- '}
										<span className='text-[15px] font-semibold'>{item.subTitle}</span>
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
