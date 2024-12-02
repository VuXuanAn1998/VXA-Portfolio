import React, { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { IoLanguageSharp } from 'react-icons/io5'
import { LuMusic4 } from 'react-icons/lu'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
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
		<div className='absolute z-50 flex w-full gap-5'>
			<div className='trapezoid relative mx-auto flex items-center justify-center gap-3'>
				<audio ref={audioRef} src='/audio.mp3' autoPlay />
				<div className='mt-1 flex gap-3'>
					<button
						className='z-10 mx-2 text-white transition-transform duration-200 ease-in-out hover:scale-110'
						onClick={changeMode}
					>
						{theme === 'dark' ? <MdDarkMode className='h-4 w-4' /> : <MdOutlineLightMode className='h-4 w-4' />}
					</button>

					<button
						className='animate-icon z-10 mx-2 text-white transition-transform duration-200 ease-in-out hover:scale-110'
						onClick={handlePlayPause}
					>
						{isPlaying ? <LuMusic4 className='h-4 w-4' /> : <TbMusicOff className='h-4 w-4' />}
					</button>

					<button
						className='z-10 mx-2 text-white transition-transform duration-200 ease-in-out hover:scale-110'
						onClick={changeLanguages}
					>
						<IoLanguageSharp className='h-4 w-4' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Setting
