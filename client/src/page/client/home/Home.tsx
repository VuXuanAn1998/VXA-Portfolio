import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import UserClass from '../user.service'
import { UserPresenter } from '../user.presenter'
const Home: React.FC = () => {
	const { t } = useTranslation()
	const [data, setData] = useState<any>(null)
	useEffect(() => {
		const fetchData = async () => {
			const data = await UserClass.getDetailsUser()
			const userPresenter = new UserPresenter(data)
			setData(userPresenter.getShortInfo)
		}

		fetchData()
	}, [])

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
			<div className='w-full md:col-span-2 my-auto px-20'>
				<h1 className='text-3xl font-bold leading-10 block w-full md:text-left text-primary'>{t('welcome')}</h1>
				<h1 className='text-3xl font-bold leading-10 block w-full md:text-left text-secondary'>{data?.name}</h1>
				<p className='text-secondary text-sm font-normal leading-7 mt-4 mb-7'>{data?.desc}</p>

				<div className='flex gap-10 my-15'>
					<button className='border-[1px] border-primary relative pr-4 rounded-[35px] mb-5 btn'>
						<span className='p-4 rounded-[35px] bg-primary btn-icon w-full h-full'>
							<FaArrowRight className='text-white w-5 h-5 ml-auto' />
						</span>
						<span className='font-bold text-base text-secondary btn-text pl-16 pr-2 py-[14px] inline-block'>
							Portfolio
						</span>
					</button>

					<button className='border-[1px] border-primary relative pr-4 rounded-[35px] mb-5 btn'>
						<span className='p-4 rounded-[35px] bg-primary btn-icon w-full h-full'>
							<FaArrowRight className='text-white w-5 h-5 ml-auto' />
						</span>
						<span className='font-bold text-base text-secondary btn-text pl-16 pr-2 py-[14px] inline-block'>About</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
