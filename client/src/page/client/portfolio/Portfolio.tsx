import PageHeader from '../../../component/PageHeader'
import React, { useEffect, useState } from 'react'
import { UserPresenter } from '../user.presenter'
import ProjectList from './component/Projectlist'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useSelector } from 'react-redux'

const Portfolio: React.FC = () => {
	const [projectList, setProjectList] = useState<any>(null)
	const value = useSelector((state: any) => state.user.value)
	useEffect(() => {
		const fetchData = async () => {
			const userPresenter = new UserPresenter(value)
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
