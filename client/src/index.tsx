import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './i18n' // Cấu hình i18n
import { I18nProvider } from './plugin/I18nPlugin'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<I18nProvider>
					<App />
				</I18nProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
reportWebVitals()
