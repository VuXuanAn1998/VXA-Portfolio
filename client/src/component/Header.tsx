import React from 'react'
import { INav } from '../types/common'
import { AiFillHome } from 'react-icons/ai'
import { FaBriefcase } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
const Header: React.FC = () => {
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
		<ul className='fixed md:right-4  md:top-[50%] bg-[#2b2a2a] md:bg-transparent w-full py-4 md:py-0 justify-around md:w-fit h-fit right-0 bottom-0  md:translate-y-[-50%] z-20 gap-5 flex md:flex-col '>
			{navList.map((item, i) => (
				<li key={i} className='w-fit ml-auto'>
					<Link to={item.path} className='p-0 m-0'>
						<div
							className={` relative md:p-4 p-3 rounded-full cursor-pointer transition-show group flex ${i === active ? 'bg-primary-light dark:bg-primary-dark' : 'bg-[#EEEEEE]'}`}
						>
							<h2
								className={`h-[20px] overflow-hidden relative top-[-1px] text-white mr-2 text-base font-medium uppercase hidden group-hover:block transition-show`}
							>
								{item.name}
							</h2>
							<item.icon className={`w-5 h-5 ${i === active ? 'text-white' : 'text-[#666666]'} `} />
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Header
