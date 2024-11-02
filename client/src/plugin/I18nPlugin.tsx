// src/I18nPlugin.tsx
import React, { createContext, ReactNode, useContext } from 'react'
import { useTranslation } from 'react-i18next'

// Tạo Context cho plugin i18n
const I18nContext = createContext<{ $t: (key: string) => string } | undefined>(undefined)

// Tạo Provider cho plugin
export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const { t } = useTranslation()

	return <I18nContext.Provider value={{ $t: t }}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
	const context = useContext(I18nContext)
	if (!context) {
		throw new Error('useI18n must be used within an I18nProvider')
	}
	return context.$t
}
