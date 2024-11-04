import PageHeader from '../../../component/PageHeader'
import React, { useEffect, useState } from 'react'

import userClass from '../user.service'
import { UserPresenter } from '../user.presenter'
import BasicInfo from './component/BasicInfo'
import NumberUser from './component/NumberUser'
import DownloadResume from './component/DownloadResume'
import SkillList from './component/SkillList'
import EducationExperiences from './component/EducationExperiences'
const About: React.FC = () => {
	const [basicInfo, setBasicInfo] = useState<any>(null)
	const [skillList, setSkillList] = useState<any>(null)
	const [numberUser, setNumberUser] = useState<any>(null)
	const [EduAndEx, setEduAndEx] = useState<any>(null)
	useEffect(() => {
		const fetchData = async () => {
			const data = await userClass.getDetailsUser()

			const userPresenter = new UserPresenter(data)
			setBasicInfo(userPresenter.getBasicInformation)
			setSkillList(userPresenter.getSkills)
			setNumberUser(userPresenter.getNumberUser)
			setEduAndEx(userPresenter.getEducation)
		}

		fetchData()
	}, [])

	return (
		<div className='container mx-auto mb-20'>
			<PageHeader white='About' yellow='Me' titleBg='About Me' />
			<div className='grid grid-cols-5 container mx-auto'>
				<BasicInfo basicInfo={basicInfo} />
				<NumberUser numberUser={numberUser} />
			</div>
			<DownloadResume />
			<div className='container mx-auto'>
				<SkillList skillList={skillList} />
				<EducationExperiences EduAndEx={EduAndEx} />
			</div>
		</div>
	)
}

export default About
