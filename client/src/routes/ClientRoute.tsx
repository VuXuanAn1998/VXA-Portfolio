import Header from '../component/Header'
import Setting from '../component/Setting'
import About from '../page/client/about/About'
import Contact from '../page/client/contact/Contact'
import Home from '../page/client/home/Home'
import Portfolio from '../page/client/portfolio/Portfolio'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function ClientRoute() {
	return (
		<>
			<Header />
			<Setting />
			<div className='main h-full bg-white dark:bg-black'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</>
	)
}
