import React, { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { MdDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { IoLanguageSharp } from 'react-icons/io5'
import { LuMusic4 } from 'react-icons/lu'
import { TbMusicOff } from 'react-icons/tb'
const Setting: React.FC = () => {
	const { t, i18n } = useTranslation()
	const audioRef = useRef<any>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [lng, setLng] = useState(i18n.language)
	const [theme, setTheme] = useState('')
	const changeLanguages = () => {
		if (lng === 'vi') {
			setLng('en')
			i18n.changeLanguage('en')
		} else {
			setLng('vi')
			i18n.changeLanguage('vi')
		}
	}

	const changeMode = () => {
		const currentTheme = localStorage.getItem('theme')
		if (currentTheme === 'dark') {
			localStorage.setItem('theme', 'light')
			setTheme('light')
		} else {
			localStorage.setItem('theme', 'dark')
			setTheme('dark')
		}
		document.documentElement.classList.toggle('dark')
	}
	useEffect(() => {
		const theme = localStorage.getItem('theme')
		if (!theme) {
			localStorage.setItem('theme', 'light')
			setTheme('light')
		} else {
			localStorage.setItem('theme', theme)
			setTheme(theme)
		}
	}, [])

	const handlePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause()
		} else {
			audioRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}
	return (
		<div className='flex gap-5 absolute  w-full z-50'>
			<div className='trapezoid mx-auto flex items-center justify-center gap-3 relative'>
				<audio ref={audioRef} src='/audio.mp3' autoPlay />
				<div className='flex mt-1 gap-3'>
					<button
						className='text-white mx-2 transition-transform duration-200 ease-in-out hover:scale-110 z-10'
						onClick={changeMode}
					>
						{theme === 'dark' ? <MdDarkMode className='w-4 h-4' /> : <MdOutlineLightMode className='w-4 h-4' />}
					</button>

					<button
						className='text-white mx-2 transition-transform duration-200 ease-in-out hover:scale-110 animate-icon z-10'
						onClick={handlePlayPause}
					>
						{isPlaying ? <LuMusic4 className='w-4 h-4' /> : <TbMusicOff className='w-4 h-4' />}
					</button>

					<button
						className='text-white  mx-2 transition-transform duration-200 ease-in-out hover:scale-110 z-10'
						onClick={changeLanguages}
					>
						<IoLanguageSharp className='w-4 h-4' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Setting
