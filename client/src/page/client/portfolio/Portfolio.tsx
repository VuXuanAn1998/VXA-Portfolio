import PageHeader from '../../../component/PageHeader'
import React, { useEffect, useState } from 'react'

import userClass from '../user.service'
import { UserPresenter } from '../user.presenter'
import ProjectList from './component/Projectlist'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

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
			<div className='container mx-auto text-center'></div>
			<div className='container grid grid-cols-[auto_1fr] mx-auto mt-5 gap-10'>
				<div className=''>
					<h1>FE Tools</h1>
					<FormGroup>
						<FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
						<FormControlLabel required control={<Checkbox />} label='Required' />
						<FormControlLabel disabled control={<Checkbox />} label='Disabled' />
					</FormGroup>
					<h1>FE Tools</h1>
					<FormGroup>
						<FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
						<FormControlLabel required control={<Checkbox />} label='Required' />
						<FormControlLabel disabled control={<Checkbox />} label='Disabled' />
					</FormGroup>
					<h1>FE Tools</h1>
					<FormGroup>
						<FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
						<FormControlLabel required control={<Checkbox />} label='Required' />
						<FormControlLabel disabled control={<Checkbox />} label='Disabled' />
					</FormGroup>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<ProjectList projectList={projectList} />
				</div>
			</div>
		</div>
	)
}

export default Portfolio
