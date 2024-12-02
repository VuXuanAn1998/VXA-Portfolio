import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import PageHeader from '../../../component/PageHeader'
import { UserPresenter } from '../user.presenter'
import BasicInfo from './component/BasicInfo'
import EducationExperiences from './component/EducationExperiences'
import NumberUser from './component/NumberUser'
import SkillList from './component/SkillList'
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
			<div className='container mx-auto grid grid-cols-5'>
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
