import React from 'react'
import { IoMdDownload } from 'react-icons/io'
import Button from '../../../../component/Button'
const DownloadResume: React.FC = () => {
	return (
		<Button label={'Download Resume'}>
			<IoMdDownload className='text-white w-5 h-5 ml-auto' />
		</Button>
	)
}

export default DownloadResume
