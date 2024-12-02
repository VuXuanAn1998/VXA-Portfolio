import React, { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaBriefcase, FaUser } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import userClass from '../page/client/user.service'
import { INav } from '../types/common'
import { setValue } from './../store/slice'
import ButtonLink from './Button/ButtonLink'
const Header: React.FC = () => {
	const dispatch = useDispatch()
	const fetchData = async () => {
		const data = await userClass.getDetailsUser()
		dispatch(setValue(data))
		return data
	}

	useEffect(() => {
		fetchData()
	}, [])

	const navList: INav[] = [
		{
			name: 'Home',
			icon: AiFillHome,
			path: '/',
		},
		{
			name: 'Portfolio',
			icon: FaBriefcase,
			path: '/portfolio',
		},
		{
			name: 'About',
			icon: FaUser,
			path: '/about',
		},
		{
			name: 'Contact',
			icon: IoMdMail,
			path: '/contact',
		},
	]
	const { pathname } = useLocation()

	const active = navList.findIndex((e) => e.path === pathname)
	return (
		<div className='fixed bottom-0 right-0 z-20 flex h-fit w-full justify-around justify-items-center gap-5 bg-[#2b2a2a] py-4 md:right-4 md:top-[50%] md:w-fit md:translate-y-[-50%] md:flex-col md:bg-transparent md:py-0'>
			<ul className='flex flex-col justify-end gap-2'>
				{navList.map((item, i) => (
					<ButtonLink path={item.path} name={item.name} icon={<item.icon className='text-white' />} />
				))}
			</ul>
		</div>
	)
}

export default Header
