import PageHeader from '../../../component/PageHeader'
import React, { useState } from 'react'
import CardItem from '../../../component/CardItem'
import { FaFilter } from 'react-icons/fa'
const itemOptions = [
	{
		type: 'Personal',
		text: 'Personal Projects',
	},
	{
		type: 'Professional',
		text: 'Professional Projects',
	},
]

const Portfolio: React.FC = () => {
	const [typeProject, setTypeProjects] = useState(itemOptions[0].type)
	return (
		<div>
			<PageHeader white='My' yellow='Portfolio' titleBg='Works' />
			{/* <div className='flex w-full text-white gap-5 justify-center'>
				{itemOptions.map((item, index) => {
					return (
						<span
							key={index}
							onClick={() => setTypeProjects(item.type)}
							className={`px-4 py-2  rounded cursor-pointer ${typeProject === item.type ? 'dark:bg-primary-dark bg-primary-light ' : 'bg-slate-500'}`}
						>
							{item.text}
						</span>
					)
				})}
			</div> */}
			<div className='container mx-auto text-center'>
				<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nulla.</p>

				<FaFilter className='ml-auto cursor-pointer w-4 h-4 text-[#666666] mt-5' />
			</div>
			<div className='container grid grid-cols-4 mx-auto mt-5 gap-5'>
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
			</div>
		</div>
	)
}

export default Portfolio
