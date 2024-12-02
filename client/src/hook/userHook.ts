import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { UserPresenter } from './../page/client/user.presenter'

const useUserPresenter = () => {
	const { i18n } = useTranslation()
	const value = useSelector((state: any) => state.user.value)
	const [UserUI, setUserUI] = useState()
	useEffect(() => {
		const userPresent = new UserPresenter(value[i18n.language])
	}, [i18n.language, value])

	return UserUI
}

export default useUserPresenter
