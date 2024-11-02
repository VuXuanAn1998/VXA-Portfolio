import { useTranslation } from 'react-i18next'
import { MOCK_DATA } from '../../../constants/mockData'
import React from 'react'

const Home: React.FC = () => {
	const { t } = useTranslation()
	return (
		<div className='md:grid md:grid-cols-3 px-8 h-[100vh] my-auto'>
			<div className='hidden md:block fixed w-full h-[200%] top-[-50%] left-[-83%]  rotate-[-15deg] bg-primary-light dark:bg-primary-dark z-1 px-8'></div>
			<div className='px-8 flex md:col-span-1 md:h-full h-fit align-middle justify-center content-center z-20 '>
				<img
					src='https://th.bing.com/th/id/OIP.0uQb-J1mJAONnL6OuOcRcQHaHa?rs=1&pid=ImgDetMain'
					alt='avatar'
					className='md:w-full md:h-fit md:my-auto md:rounded-[30px] custom-shadow rounded-full w-[270px] h-[270px] object-cover bg-red-100 z-10'
				/>
			</div>
			<div className='w-full md:col-span-2 my-auto px-20'>
				<h1 className='text-3xl font-bold leading-10 block w-full md:text-left text-primary-light dark:text-primary-dark'>
					{t('welcome')}
				</h1>
				<h1 className='text-3xl font-bold leading-10 block w-full md:text-left text-[#666]'>{MOCK_DATA.name}</h1>
				<p className='text-[#666] text-sm font-normal leading-7 mt-4 mb-7'>{MOCK_DATA.intro}</p>
			</div>
		</div>
	)
}

export default Home