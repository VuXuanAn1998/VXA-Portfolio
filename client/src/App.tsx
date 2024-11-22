import React from 'react'
import AdminRoute from './routes/AdminRoute'
import ClientRoute from './routes/ClientRoute'
import { useLocation } from 'react-router-dom'
const MyComponent: React.FC = () => {
	const currentPath = useLocation()
	const isAdmin = currentPath.pathname.includes('/admin')
	return isAdmin ? <AdminRoute /> : <ClientRoute />
}

export default MyComponent
