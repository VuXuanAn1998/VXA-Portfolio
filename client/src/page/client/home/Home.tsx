import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { UserPresenter } from '../user.presenter'
import { useSelector } from 'react-redux'
import BasicButton from '../../../component/Button/BasicButton'

const Home: React.FC = () => {
	const { t } = useTranslation()
	const { i18n } = useTranslation()
	const value = useSelector((state: any) => state.user.value)
	const [data, setData] = useState<any>(null)
	useEffect(() => {
		if (value) {
			if (i18n.language && value[i18n.language]) {
				const userPresenter = new UserPresenter(value[i18n.language])
				setData(userPresenter.getShortInfo)
			}
		}
	}, [i18n.language, value])
	return (
		<div className='md:grid md:grid-cols-3 px-8 h-[100vh] my-auto' data-aos='fade-right'>
			<div className='hidden md:block hexagon z-1 px-8'></div>
			<div className='px-8 grid md:col-span-1 md:h-full h-fit place-content-center z-20'>
				<img
					src={data?.avatar}
					alt='avatar'
					className='md:w-full md:h-fit md:my-auto md:rounded-[30px] custom-shadow rounded-full w-[270px] h-[270px] object-cover z-10'
				/>
			</div>
			<div className='w-full md:col-span-2 my-auto pr-32'>
				<h1 className='text-3xl font-bold leading-10 block w-full md:text-left text-primary'>{t('welcome')}</h1>
				<h1 className='text-3xl font-bold leading-10 block w-full md:text-left text-primary'>{data?.name}</h1>
				<p className='text-primary text-sm font-normal leading-7 mt-4 mb-7'>{data?.desc}</p>

				<div className='flex gap-5 my-15 justify-start'>
					<BasicButton icon={<FaArrowRight />} name={t('portfolio')} path='portfolio' />
					<BasicButton icon={<FaArrowRight />} name={t('contact')} path='contact' />
				</div>
			</div>
		</div>
	)
}

export default Home
