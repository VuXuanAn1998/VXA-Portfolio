import React from 'react'
import { TSkillList } from '../../user.type'

const SkillList: React.FC<{ skillList: TSkillList[] }> = ({ skillList }) => {
	return (
		<div>
			<p className='text-[26px] font-bold text-[#666666] text-center uppercase'>Skills</p>
			<hr className='border-[1px] border-[#6666666] w-[40%] my-8 mx-auto'></hr>
			<div className='grid grid-flow-row grid-cols-3'>
				{skillList &&
					skillList.map((skill: TSkillList, index: number) => {
						return (
							<div className='mb-5' key={index}>
								<h1 className='text-[17px] font-semibold text-[#666666]'>{skill.title}</h1>
								<div className='flex flex-wrap gap-5 pt-5'>
									{skill.skillList &&
										skill.skillList.map((skil) => {
											return <img src={skil.img} alt={skil.name} className='w-16 h-16' />
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
