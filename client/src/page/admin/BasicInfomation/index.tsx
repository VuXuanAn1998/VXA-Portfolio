import Uploader from '../../../component/Uploader'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { MdEdit } from 'react-icons/md'
export default function BasicInfo() {
	return (
		<div className='container mx-auto p-3'>
			<div className='flex justify-between bg-white rounded-lg px-4 py-2'>
				<div className='flex gap-2'>
					<h5 className='text-16-26-600 my-auto'>Chỉnh sửa thông tin</h5>
					<MdEdit className='w-4 h-4 text-[#666] my-auto' />
				</div>
				<div className='flex gap-2'>
					<Button variant='outlined'>Hủy</Button>
					<Button variant='contained'>Lưu</Button>
				</div>
			</div>
			<div className='mt-5 bg-white rounded-lg px-4 py-2'>
				<div className='grid grid-cols-2 gap-5'>
					<div className='grid grid-flow-row col-span-2'>
						<Uploader />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Họ và tên </p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Ngày sinh</p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Giới tính</p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Số điện thoại</p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Quốc Tịch</p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Địa chỉ</p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>

					<div className='grid grid-flow-row col-span-1 gap-2'>
						<p className='text-16-26-600'>Ngôn Ngữ</p>
						<input type='text' className='w-full h-[40px] rounded-lg border-[1px] border-solid border-[#666666]' />
					</div>
				</div>
			</div>
		</div>
	)
}
