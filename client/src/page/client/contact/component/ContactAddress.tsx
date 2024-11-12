import React from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import { IoIosMailOpen } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
export default function ContactAddress() {
	return (
		<div className=' '>
			<div className='text-26-40-700 uppercase text-secondary-light dark:text-secondary-dark mb-4'>Contact Address</div>
			<p className='text-16-20-400 text-secondary-light dark:text-secondary-dark mb-6'>
				Thank you for reading to the end. I hope that you have learned a little about me through this site. If you have
				any comments about this site or me, please use the form.
			</p>
			<div>
				<div className='grid grid-rows-3 grid-flow-col gap-4 w-fit text-secondary-light dark:text-secondary-dark'>
					<div className='row-span-3'>
						<FaLocationPin className='w-9 h-9 text-primary-light dark:text-primary-dark' />
					</div>
					<div className='col-span-2  text-16-20-400   uppercase'>Current address</div>
					<div className='row-span-2 text-16-26-600 '>Ha Noi City</div>
				</div>

				<div className='grid grid-rows-3 grid-flow-col gap-4 w-fit text-secondary-light dark:text-secondary-dark'>
					<div className='row-span-3'>
						<IoIosMailOpen className='w-9 h-9 text-primary-light dark:text-primary-dark' />
					</div>
					<div className='col-span-2  text-16-20-400   uppercase'>Email Address</div>
					<div className='row-span-2 text-16-26-600 '>Anvu1308@gmail.com</div>
				</div>

				<div className='grid grid-rows-3 grid-flow-col gap-4 w-fit text-secondary-light dark:text-secondary-dark'>
					<div className='row-span-3'>
						<LuPhoneCall className='w-9 h-9 text-primary-light dark:text-primary-dark' />
					</div>
					<div className='col-span-2  text-16-20-400 uppercase'>Telephone Number</div>
					<div className='row-span-2 text-16-26-600 '>0705882717</div>
				</div>
			</div>
		</div>
	)
}
