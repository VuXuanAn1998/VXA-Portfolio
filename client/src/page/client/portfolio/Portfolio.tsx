import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import PageHeader from '../../../component/PageHeader'
import { UserPresenter } from '../user.presenter'
import ProjectList from './component/Projectlist'

const Portfolio: React.FC = () => {
	const [projectList, setProjectList] = useState<any>(null)
	const [filter, setFilter] = useState<{ [key: string]: boolean }>({
		isReact: true,
		isAngular: true,
		isVue: true,
		isJs: true,
		isTs: true,
		isPersonal: true,
		Accommodation: true,
	})
	const { i18n } = useTranslation()
	const value = useSelector((state: any) => state.user.value)

	useEffect(() => {
		if (value) {
			const fetchData = async () => {
				const userPresenter = new UserPresenter(value[i18n.language])
				setProjectList(userPresenter.getProjectList)
			}
			fetchData()
		}
	}, [])
	useEffect(() => {
		//filter
	}, [filter])
	const handleOnChange = ({ target }: any) => {
		setFilter((prev) => ({ ...prev, [target.name]: target.checked }))
	}
	return (
		<div className='mb-10'>
			<PageHeader white='My' yellow='Portfolio' titleBg='Works' />
			<div className='container mx-auto text-center'></div>
			<div className='container mx-auto mt-5 grid grid-cols-[auto_1fr] gap-10'>
				<div className='flex flex-col gap-7 dark:text-white'>
					<div>
						<h1 className='text-16-26-600'>Framework/Platforms</h1>
						<FormGroup>
							<FormControlLabel control={<Checkbox defaultChecked checked={filter.isReact} />} label='React JS' />
							<FormControlLabel control={<Checkbox defaultChecked checked={filter.isAngular} />} label='Angular' />
							<FormControlLabel control={<Checkbox defaultChecked checked={filter.isVue} />} label='Vue JS' />
						</FormGroup>
					</div>
					<div>
						<h1 className='text-16-26-600'>Programming Languages</h1>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox defaultChecked checked={filter.isJs} onChange={handleOnChange} name='isJs' />}
								label='Javascript'
							/>
							<FormControlLabel control={<Checkbox defaultChecked checked={filter.isTs} />} label='Typescript' />
						</FormGroup>
					</div>
					<div>
						<h1 className='text-16-26-600'>Projects</h1>
						<FormGroup>
							<FormControlLabel control={<Checkbox defaultChecked checked={filter.isPersonal} />} label='Personal' />
							<FormControlLabel
								control={<Checkbox defaultChecked checked={filter.Accommodation} />}
								label='Accommodation'
							/>
						</FormGroup>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<ProjectList projectList={projectList} />
				</div>
			</div>
		</div>
	)
}

export default Portfolio
