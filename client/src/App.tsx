import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminRoute from './routes/AdminRoute'
import ClientRoute from './routes/ClientRoute'
const MyComponent: React.FC = () => {
	const currentPath = useLocation()
	const isAdmin = currentPath.pathname.includes('/admin')
	return isAdmin ? <AdminRoute /> : <ClientRoute />
}

export default MyComponent
