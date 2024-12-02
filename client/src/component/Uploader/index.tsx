import { useRef } from 'react'
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
			<div className='relative w-fit rounded-full shadow-lg'>
				<input
					ref={buttonRef}
					type='file'
					id='imageUpload'
					accept='.png, .jpg, .jpeg'
					className='absolute left-0 top-0 hidden h-full w-fit'
				/>
				<div
					className='absolute right-6 top-2 grid h-[40px] w-[40px] cursor-pointer place-content-center rounded-full bg-white shadow-lg'
					onClick={handleDivClick}
				>
					<MdModeEdit className='h-5 w-5' />
				</div>
				<img
					src='http://i.pravatar.cc/500?img=7'
					alt=''
					className='h-[250px] w-[250px] rounded-full border-[2px] border-solid border-white'
				/>
			</div>
		</div>
	)
}
