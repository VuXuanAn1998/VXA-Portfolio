import { Chip, Dialog } from '@mui/material'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

interface CartItemProps {
	name: string
	img: string[]
	desc: string
	created: string
	role: string
	teamSize: string
	responsibilities: string[]
	tags: string[]
}
const CardItem: React.FC<{ cardValue: CartItemProps }> = ({ cardValue }) => {
	const [open, setOpen] = useState(false)

	return (
		<React.Fragment>
			<div
				className='relative mb-8 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'
				onClick={() => setOpen(true)}
			>
				<div className='bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-border text-white shadow-lg'>
					<img src={cardValue.img[0]} alt='' />
				</div>
				<div className='p-6'>
					<h5 className='text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased'>
						{cardValue.name}
					</h5>
					<p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
						{cardValue.desc}
					</p>
				</div>
				<div className='flex flex-wrap gap-3 p-6 pt-0'>
					{cardValue &&
						cardValue.tags.map((item: string, index: number) => {
							return <Chip label={item} color='primary' key={index} />
						})}
				</div>
			</div>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				sx={{
					'& .MuiPaper-root': {
						maxWidth: '1000px',
					},
				}}
			>
				<div className='w-[1000px] bg-[#252525]'>
					<div className='grid grid-cols-2 gap-4'>
						<div className='h-fit w-full p-5'>
							<h1 className='mb-4 border-b-[2px] border-solid border-[#666666] text-32-50-700 text-primary-light dark:text-primary-dark'>
								{cardValue.name}
							</h1>
							<Carousel
								showArrows={true}
								showThumbs={true}
								infiniteLoop={true}
								autoPlay={true}
								stopOnHover={false}
								showStatus={false}
							>
								{cardValue.img.map((image, index) => (
									<div key={index}>
										<img src={image} alt='ehhhehe' />
									</div>
								))}
							</Carousel>
						</div>

						<div className='h-fit w-full p-5'>
							<h1 className='mb-4 border-b-[2px] border-solid border-[#666666] text-32-50-700 text-primary-light dark:text-primary-dark'>
								Details
							</h1>
							<div className='flex flex-col gap-3 text-white'>
								<p className='text-16-20-400'>
									<span className='text-16-26-600'>Descriptions: </span>
									{cardValue.desc}
								</p>
								<p className='text-16-20-400'>
									<span className='text-16-26-600'>Created: </span>
									{cardValue.created}
								</p>
								<p className='text-16-20-400'>
									<span className='text-16-26-600'>Role: </span>
									{cardValue.role}
								</p>
								<p className='text-16-20-400'>
									<span className='text-16-26-600'>Team Size : </span>
									{cardValue.teamSize}
								</p>
								<p className='text-16-20-400'>
									<span className='text-16-26-600'>Frontend: </span>
									React JS
								</p>
								<p className='flex flex-col text-16-20-400'>
									<span className='text-16-26-600'>Responsibilities: </span>
									{cardValue.responsibilities.map((item) => {
										return <p className='mb-2 ml-12'>* {item}</p>
									})}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Dialog>
		</React.Fragment>
	)
}

export default CardItem
