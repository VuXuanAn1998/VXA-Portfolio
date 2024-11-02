import React, { useState } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiLanguage } from 'react-icons/hi2'
import { IoMdSettings } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
const Setting: React.FC = () => {
	const [isToggleSetting, setIsToggleSetting] = useState(false)
	const { t, i18n } = useTranslation()
	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark')
	}
	const changeLanguages = (lng: string) => {
		i18n.changeLanguage(lng)
	}
	return (
		<div className='flex gap-5 absolute right-4 top-4'>
			{isToggleSetting && (
				<div className='flex gap-5 '>
					<div className={`p-4 w-fit rounded-full cursor-pointer bg-[#EEEEEE]`} onClick={toggleTheme}>
						<FaRegLightbulb className={`w-5 h-5 text-[#666666]`} />
					</div>
					<div className={`p-4 w-fit rounded-full cursor-pointer bg-[#EEEEEE]`}>
						<HiLanguage className={`w-5 h-5 text-[#666666]`} />
						<button onClick={() => changeLanguages('en')}>en</button>
						<button onClick={() => changeLanguages('vn')}>vn</button>
					</div>
				</div>
			)}
			<div
				className={`p-4 w-fit rounded-full cursor-pointer bg-[#EEEEEE] `}
				onClick={() => setIsToggleSetting(!isToggleSetting)}
			>
				<IoMdSettings className={`w-5 h-5 text-[#666666]`} />
			</div>
		</div>
	)
}

export default Setting
