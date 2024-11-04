import PageHeader from '../../../component/PageHeader'
import React, { useEffect, useState } from 'react'
import CardItem from '../../../component/CardItem'
import { FaFilter } from 'react-icons/fa'
import userClass from '../user.service'
import { UserPresenter } from '../user.presenter'
import ProjectList from './component/Projectlist'

const Portfolio: React.FC = () => {
	const [projectList, setProjectList] = useState<any>(null)
	useEffect(() => {
		const fetchData = async () => {
			const data = await userClass.getDetailsUser()
			const userPresenter = new UserPresenter(data)
			setProjectList(userPresenter.getProjectList)
		}

		fetchData()
	}, [])
	return (
		<div className='mb-10'>
			<PageHeader white='My' yellow='Portfolio' titleBg='Works' />
			<div className='container mx-auto text-center'>
				<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, nulla.</p>
				<FaFilter className='ml-auto cursor-pointer w-4 h-4 text-[#666666] mt-5' />
			</div>
			<div className='container grid grid-cols-4 mx-auto mt-5 gap-5'>
				<ProjectList projectList={projectList} />
			</div>
		</div>
	)
}

export default Portfolio
