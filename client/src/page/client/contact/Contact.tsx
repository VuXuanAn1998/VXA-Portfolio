import PageHeader from '../../../component/PageHeader'

import React from 'react'
import ContactAddress from './component/ContactAddress'
import FormContact from './component/FormContact'
const Contact: React.FC = () => {
	return (
		<div className='mb-10'>
			<PageHeader white='Get in' yellow='Touch' titleBg='Contact' />
			<div className='container mx-auto text-center'></div>
			<div className='grid grid-cols-[2fr_3fr] gap-5 container mx-auto'>
				<ContactAddress />
				<FormContact />
			</div>
		</div>
	)
}

export default Contact
