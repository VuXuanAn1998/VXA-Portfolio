import React, { useRef } from 'react'
import { MdModeEdit } from 'react-icons/md'
export default function Uploader() {
	const buttonRef = useRef<HTMLInputElement>(null)
	const handleDivClick = () => {
		if (buttonRef.current) {
			buttonRef.current.click()
		}
	}

	return (
		<div className=''>
			<div className='relative w-fit shadow-lg rounded-full'>
				<input
					ref={buttonRef}
					type='file'
					id='imageUpload'
					accept='.png, .jpg, .jpeg'
					className='absolute top-0 left-0 w-fit h-full hidden'
				/>
				<div
					className='grid place-content-center w-[40px] h-[40px] bg-white rounded-full absolute top-2 right-6 shadow-lg cursor-pointer'
					onClick={handleDivClick}
				>
					<MdModeEdit className='w-5 h-5' />
				</div>
				<img
					src='http://i.pravatar.cc/500?img=7'
					alt=''
					className='rounded-full border-[2px] border-solid border-white w-[250px] h-[250px]'
				/>
			</div>
		</div>
	)
}
