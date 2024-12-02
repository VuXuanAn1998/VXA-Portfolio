import { TbMessageShare } from 'react-icons/tb'
export default function FormContact() {
	return (
		<div className=''>
			<div className='grid grid-cols-2 gap-4'>
				<div className='col-span-1'>
					<input type='text' className='w-full rounded-[30px] bg-[#EEEEEE] px-8 py-4' />
				</div>
				<div className='col-span-1'>
					<input type='text' className='w-full rounded-[30px] bg-[#EEEEEE] px-8 py-4' />
				</div>
				<div className='col-span-2'>
					<input type='text' className='w-full rounded-[30px] bg-[#EEEEEE] px-8 py-4' />
				</div>
				<div className='col-span-2'>
					<textarea rows={7} className='w-full rounded-[30px] bg-[#EEEEEE] px-8 py-4' />
				</div>
				<div className='col-span-2'>
					<button className='border-primary btn relative mb-5 rounded-[35px] border-[1px] pr-4'>
						<span className='bg-primary btn-icon h-full w-full rounded-[35px] p-4'>
							<TbMessageShare className='ml-auto h-5 w-5 text-white' />
						</span>
						<span className='text-secondary btn-text inline-block py-[14px] pl-16 pr-2 text-base font-bold uppercase'>
							Send Message
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
