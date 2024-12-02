import React from 'react'

const SkillItem: React.FC<{ title: string; skillList: string[] }> = ({ title, skillList }) => {
	return (
		<div className='mb-5'>
			<h1 className='text-[17px] font-semibold text-[#666666]'>{title}</h1>
			<div className='flex flex-wrap gap-5 pt-5'>
				{skillList &&
					skillList.map((item, index) => {
						return <img src={item} alt='react' className='h-16 w-16' />
					})}
			</div>
		</div>
	)
}

const ComponentName: React.FC = () => {
	return <SkillItem title='Programing Languages' skillList={[]} />
}

export default ComponentName
