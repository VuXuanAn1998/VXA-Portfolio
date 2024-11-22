import React, { useEffect } from 'react'
import { INav } from '../types/common'
import { AiFillHome } from 'react-icons/ai'
import { FaBriefcase } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setValue } from './../store/slice'
import userClass from '../page/client/user.service'
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
		<div className='fixed md:right-4  md:top-[50%] bg-[#2b2a2a] md:bg-transparent justify-items-center w-full py-4 md:py-0 justify-around md:w-fit h-fit right-0 bottom-0  md:translate-y-[-50%] z-20 gap-5 flex md:flex-col '>
			<ul className='flex justify-end flex-col gap-2'>
				{navList.map((item, i) => (
					<ButtonLink path={item.path} name={item.name} icon={<item.icon className='text-white' />} />
				))}
			</ul>
		</div>
	)
}

export default Header
