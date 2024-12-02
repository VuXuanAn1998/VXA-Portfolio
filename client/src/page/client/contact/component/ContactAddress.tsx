import { FaLocationPin } from 'react-icons/fa6'
import { IoIosMailOpen } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
export default function ContactAddress() {
	return (
		<div className=' '>
			<div className='mb-4 text-26-40-700 uppercase text-secondary-light dark:text-secondary-dark'>Contact Address</div>
			<p className='mb-6 text-16-20-400 text-secondary-light dark:text-secondary-dark'>
				Thank you for reading to the end. I hope that you have learned a little about me through this site. If you have
				any comments about this site or me, please use the form.
			</p>
			<div>
				<div className='grid w-fit grid-flow-col grid-rows-3 gap-4 text-secondary-light dark:text-secondary-dark'>
					<div className='row-span-3'>
						<FaLocationPin className='h-9 w-9 text-primary-light dark:text-primary-dark' />
					</div>
					<div className='col-span-2 text-16-20-400 uppercase'>Current address</div>
					<div className='row-span-2 text-16-26-600'>Ha Noi City</div>
				</div>

				<div className='grid w-fit grid-flow-col grid-rows-3 gap-4 text-secondary-light dark:text-secondary-dark'>
					<div className='row-span-3'>
						<IoIosMailOpen className='h-9 w-9 text-primary-light dark:text-primary-dark' />
					</div>
					<div className='col-span-2 text-16-20-400 uppercase'>Email Address</div>
					<div className='row-span-2 text-16-26-600'>Anvu1308@gmail.com</div>
				</div>

				<div className='grid w-fit grid-flow-col grid-rows-3 gap-4 text-secondary-light dark:text-secondary-dark'>
					<div className='row-span-3'>
						<LuPhoneCall className='h-9 w-9 text-primary-light dark:text-primary-dark' />
					</div>
					<div className='col-span-2 text-16-20-400 uppercase'>Telephone Number</div>
					<div className='row-span-2 text-16-26-600'>0705882717</div>
				</div>
			</div>
		</div>
	)
}
