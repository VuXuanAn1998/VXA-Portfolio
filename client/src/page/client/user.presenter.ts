import { TDetailsUser, } from "./user.type"


export class UserPresenter {
	private UserPresenter: TDetailsUser
	constructor(private detailsEndUser : TDetailsUser) {
		this.UserPresenter = detailsEndUser
	}
	get getBasicInformation() {
		return [
            {
                label:  'basicInfo.username' ,
                value:this.UserPresenter.vn.username
            },
            {
                label:  'basicInfo.dob' ,
                value: this.UserPresenter.vn.dob
            },
            {
                label:  'basicInfo.nationality' ,
                value: this.UserPresenter.vn.nationality
            },
            {
                label:  'basicInfo.phoneNumber' ,
                value:this.UserPresenter.vn.phoneNumber
            },
            {
                label: 'basicInfo.languages',
                value: this.UserPresenter.vn.languages 
            },
            {
                label: 'basicInfo.gender' ,
                value: this.UserPresenter.vn.gender
            },
            {
                label:  'basicInfo.address' ,
                value:this.UserPresenter.vn.address
            }
		]
	}
    get getSkills() {
        let result = this.UserPresenter.vn.skills
        return result
    }
    get getNumberUser () {
        return [
            {
                label: 'Projects',
                value: 5
            },
            {
                label: 'Years of experience',
                value: 2
            },
        ]
    }
    get getEducation() {
        return this.UserPresenter.vn.education
    }

}
