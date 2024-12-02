import React from 'react'
import { TSkillList } from '../../user.type'

const SkillList: React.FC<{ skillList: TSkillList[] }> = ({ skillList }) => {
	return (
		<div>
			<p className='text-center text-[26px] font-bold uppercase text-[#666666]'>Skills</p>
			<hr className='mx-auto my-8 w-[40%] border-[1px] border-[#6666666]'></hr>
			<div className='grid grid-flow-row grid-cols-3'>
				{skillList &&
					skillList.map((skill: TSkillList, index: number) => {
						return (
							<div className='mb-5' key={index}>
								<h1 className='text-[17px] font-semibold text-[#666666]'>{skill.title}</h1>
								<div className='flex flex-wrap gap-5 pt-5'>
									{skill.skillList &&
										skill.skillList.map((skil) => {
											return <img src={skil.img} alt={skil.name} className='h-16 w-16' />
										})}
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default SkillList
