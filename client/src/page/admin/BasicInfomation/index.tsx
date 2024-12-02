import { Button } from '@mui/material'
import { MdEdit } from 'react-icons/md'
import Uploader from '../../../component/Uploader'
export default function BasicInfo() {
	return (
		<div className='container mx-auto p-3'>
			<div className='flex justify-between rounded-lg bg-white px-4 py-2'>
				<div className='flex gap-2'>
					<h5 className='my-auto text-16-26-600'>Chỉnh sửa thông tin</h5>
					<MdEdit className='my-auto h-4 w-4 text-[#666]' />
				</div>
				<div className='flex gap-2'>
					<Button variant='outlined'>Hủy</Button>
					<Button variant='contained'>Lưu</Button>
				</div>
			</div>
			<div className='mt-5 rounded-lg bg-white px-4 py-2'>
				<div className='grid grid-cols-2 gap-5'>
					<div className='col-span-2 grid grid-flow-row'>
						<Uploader />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Họ và tên </p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Ngày sinh</p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Giới tính</p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Số điện thoại</p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Quốc Tịch</p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Địa chỉ</p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='col-span-1 grid grid-flow-row gap-2'>
						<p className='text-16-26-600'>Ngôn Ngữ</p>
						<input type='text' className='h-[40px] w-full rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>
				</div>
			</div>
		</div>
	)
}
