import { TDetailsUser } from './user.type'

export class UserPresenter {
	private UserPresenter: TDetailsUser
	constructor(private detailsEndUser: TDetailsUser) {
		this.UserPresenter = detailsEndUser
	}
	get getBasicInformation() {
		if (!this.UserPresenter) return
		return [
			{
				label: 'basicInfo.username',
				value: this.UserPresenter.vn.username,
			},
			{
				label: 'basicInfo.dob',
				value: this.UserPresenter.vn.dob,
			},
			{
				label: 'basicInfo.nationality',
				value: this.UserPresenter.vn.nationality,
			},
			{
				label: 'basicInfo.phoneNumber',
				value: this.UserPresenter.vn.phoneNumber,
			},
			{
				label: 'basicInfo.languages',
				value: this.UserPresenter.vn.languages,
			},
			{
				label: 'basicInfo.gender',
				value: this.UserPresenter.vn.gender,
			},
			{
				label: 'basicInfo.address',
				value: this.UserPresenter.vn.address,
			},
		]
	}
	get getSkills() {
		if (!this.UserPresenter.vn) return
		let result = this.UserPresenter.vn.skills
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
		return this.UserPresenter.vn.projects
	}
	get getEducation() {
		if (!this.UserPresenter) return
		return this.UserPresenter.vn.education
	}
	get getShortInfo() {
		if (!this.UserPresenter) return
		return {
			name: this.UserPresenter.vn.username,
			desc: this.UserPresenter.vn.description,
			avatar: this.UserPresenter.vn.avatar,
		}
	}
}
