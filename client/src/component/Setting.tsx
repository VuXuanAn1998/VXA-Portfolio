import React, { useEffect, useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiLanguage } from 'react-icons/hi2'
import { IoMdSettings } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import { CiLight } from 'react-icons/ci'
import { Drawer, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { IoCloseSharp } from 'react-icons/io5'
import { MdDarkMode } from 'react-icons/md'
import { styled } from '@mui/material/styles'
const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
	fontSize: '14px', // Tùy chỉnh kích thước font nếu cần
	textTransform: 'none',
	backgroundColor: theme.palette.mode === 'dark' ? '#B6BEC9' : 'white',
	color: theme.palette.mode === 'dark' ? 'white' : 'black',
}))
const Setting: React.FC = () => {
	const { t, i18n } = useTranslation()
	const [isToggleSetting, setIsToggleSetting] = useState(false)

	const [lng, setLng] = useState(i18n.language)
	const [theme, setTheme] = useState('')
	const toggleTheme = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		localStorage.setItem('theme', newAlignment)
		setTheme(newAlignment)
		document.documentElement.classList.toggle('dark')
	}
	const changeLanguages = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setLng(newAlignment)
		i18n.changeLanguage(newAlignment)
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
	return (
		<div className='flex gap-5 absolute right-4 top-4'>
			{isToggleSetting && (
				<div className='flex gap-5 '>
					<div className={`p-4 w-fit rounded-full cursor-pointer bg-[#EEEEEE]`} onClick={() => toggleTheme}>
						<FaRegLightbulb className={`w-5 h-5 text-[#666666]`} />
					</div>
					<div className={`p-4 w-fit rounded-full cursor-pointer bg-[#EEEEEE]`}>
						<HiLanguage className={`w-5 h-5 text-[#666666]`} />
						{/* <button onClick={() => changeLanguages('en')}>en</button>
						<button onClick={() => changeLanguages('vi')}>vn</button> */}
					</div>
				</div>
			)}
			<Drawer open={isToggleSetting} onClose={() => setIsToggleSetting(false)} anchor='right'>
				<div className='h-full dark:bg-backgroundBody-dark dark:text-white'>
					<div className='flex w-[300px] px-4 py-2 border-b-[1px] border-[#666666] border-solid '>
						<span className='text-lg font-semibold text-[#666666]'>{t('setting')}</span>
						<IoCloseSharp
							className={`w-5 h-5 text-[#666666] ml-auto my-auto cursor-pointer`}
							onClick={() => setIsToggleSetting(false)}
						/>
					</div>
					<div className='px-4 mt-4 dark:text-white'>
						<div className='mb-3'>
							<h2 className='mb-3 text-base font-semibold text-[#666666] dark:text-white'>Languages</h2>
							<ToggleButtonGroup color='primary' value={lng} exclusive onChange={changeLanguages} aria-label='Platform'>
								<CustomToggleButton value='vi'>Vietnamese</CustomToggleButton>
								<CustomToggleButton value='en'>English</CustomToggleButton>
							</ToggleButtonGroup>
						</div>
						<div className='mb-3'>
							<h2 className='mb-3  text-base font-semibold text-[#666666] dark:text-white'>Mode</h2>
							<ToggleButtonGroup color='primary' value={theme} exclusive onChange={toggleTheme} aria-label='Platform'>
								<CustomToggleButton value='dark'>
									<div className='flex gap-2'>
										<MdDarkMode className='my-auto w-4 h-4' /> <span>Dark</span>
									</div>
								</CustomToggleButton>
								<CustomToggleButton value='light'>
									<div className='flex gap-2'>
										<CiLight className='my-auto w-4 h-4' /> <span>Light</span>
									</div>
								</CustomToggleButton>
							</ToggleButtonGroup>
						</div>
						<div className='mb-3'>
							<h2 className='mb-3  text-base font-semibold text-[#666666] dark:text-white'>Font</h2>
							<ToggleButtonGroup color='primary' value={lng} exclusive onChange={changeLanguages} aria-label='Platform'>
								<CustomToggleButton value='sm'>sm</CustomToggleButton>
								<CustomToggleButton value='md'>md</CustomToggleButton>
								<CustomToggleButton value='lg'>lg</CustomToggleButton>
							</ToggleButtonGroup>
						</div>
					</div>
				</div>
			</Drawer>
			<div
				className={`p-4 w-fit rounded-full cursor-pointer bg-[#EEEEEE] z-10`}
				onClick={() => setIsToggleSetting(!isToggleSetting)}
			>
				<IoMdSettings className={`w-5 h-5 text-[#666666]`} />
			</div>
		</div>
	)
}

export default Setting
