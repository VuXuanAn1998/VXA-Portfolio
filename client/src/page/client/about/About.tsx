import PageHeader from '../../../component/PageHeader'
import React, { useEffect, useState } from 'react'
import userClass from '../user.service'
import { UserPresenter } from '../user.presenter'
import BasicInfo from './component/BasicInfo'
import NumberUser from './component/NumberUser'
import SkillList from './component/SkillList'
import EducationExperiences from './component/EducationExperiences'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const About: React.FC = () => {
	const value = useSelector((state: any) => state.user.value)
	const { i18n } = useTranslation()
	const [basicInfo, setBasicInfo] = useState<any>(null)
	const [skillList, setSkillList] = useState<any>(null)
	const [numberUser, setNumberUser] = useState<any>(null)
	const [EduAndEx, setEduAndEx] = useState<any>(null)
	useEffect(() => {
		const fetchData = async () => {
			const userPresenter = new UserPresenter(value[i18n.language])
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

			<div className='container mx-auto'>
				<SkillList skillList={skillList} />
				<EducationExperiences EduAndEx={EduAndEx} />
			</div>
		</div>
	)
}

export default About
