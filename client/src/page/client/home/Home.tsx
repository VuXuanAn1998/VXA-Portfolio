import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import BasicButton from '../../../component/Button/BasicButton'
import { UserPresenter } from '../user.presenter'

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
		<div className='my-auto h-[100vh] px-8 md:grid md:grid-cols-3' data-aos='fade-right'>
			<div className='hexagon z-1 hidden px-8 md:block'></div>
			<div className='z-20 grid h-fit place-content-center px-8 md:col-span-1 md:h-full'>
				<img
					src={data?.avatar}
					alt='avatar'
					className='custom-shadow z-10 h-[270px] w-[270px] rounded-full object-cover md:my-auto md:h-fit md:w-full md:rounded-[30px]'
				/>
			</div>
			<div className='my-auto w-full pr-32 md:col-span-2'>
				<h1 className='text-primary block w-full text-3xl font-bold leading-10 md:text-left'>{t('welcome')}</h1>
				<h1 className='text-primary block w-full text-3xl font-bold leading-10 md:text-left'>{data?.name}</h1>
				<p className='text-primary mb-7 mt-4 text-sm font-normal leading-7'>{data?.desc}</p>

				<div className='my-15 flex justify-start gap-5'>
					<BasicButton icon={<FaArrowRight />} name={t('portfolio')} path='portfolio' />
					<BasicButton icon={<FaArrowRight />} name={t('contact')} path='contact' />
				</div>
			</div>
		</div>
	)
}

export default Home
