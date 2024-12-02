export type TDetailsUser = {
	en: TUser
	vn: TUser
}
export type TProject = {
	name: string
	tag: string[]
}
export type TSocialMedia = {
	name: string
	link: string
}
export type TEducation = {
	time: string
	title: string
	subTitle: string
	desc: string
}
export type TSkill = {
	name: string
	img: string
}
export type TSkillList = {
	title: string
	skillList: TSkill[]
}
export type TUser = {
	avatar: string
	username: string
	dob: string
	gender: string
	nationality: string
	phoneNumber: string
	address: string
	socialMedia: TSocialMedia[]
	email: string
	languages: string[]
	resume: string
	education: TEducation[]
	skills: TSkillList[]
	description: string
	projects: []
}
