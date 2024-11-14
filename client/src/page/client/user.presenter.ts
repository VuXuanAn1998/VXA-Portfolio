import { TUser } from './user.type'

export class UserPresenter {
	private UserPresenter: TUser
	constructor(private detailsEndUser: TUser) {
		this.UserPresenter = detailsEndUser
	}
	get getBasicInformation() {
		if (!this.UserPresenter) return
		return [
			{
				label: 'basicInfo.username',
				value: this.UserPresenter.username,
			},
			{
				label: 'basicInfo.dob',
				value: this.UserPresenter.dob,
			},
			{
				label: 'basicInfo.nationality',
				value: this.UserPresenter.nationality,
			},
			{
				label: 'basicInfo.phoneNumber',
				value: this.UserPresenter.phoneNumber,
			},
			{
				label: 'basicInfo.languages',
				value: this.UserPresenter.languages,
			},
			{
				label: 'basicInfo.gender',
				value: this.UserPresenter.gender,
			},
			{
				label: 'basicInfo.address',
				value: this.UserPresenter.address,
			},
		]
	}
	get getSkills() {
		if (!this.UserPresenter) return
		let result = this.UserPresenter.skills
		return result
	}
	get getNumberUser() {
		if (!this.UserPresenter) return
		return [
			{
				label: 'Projects',
				value: 5,
			},
			{
				label: 'Years of experience',
				value: 2,
			},
		]
	}
	get getProjectList() {
		if (!this.UserPresenter) return
		return this.UserPresenter.projects
	}
	get getEducation() {
		if (!this.UserPresenter) return
		return this.UserPresenter.education
	}
	get getShortInfo() {
		if (!this.UserPresenter) return
		return {
			name: this.UserPresenter.username,
			desc: this.UserPresenter.description,
			avatar: this.UserPresenter.avatar,
		}
	}
}
