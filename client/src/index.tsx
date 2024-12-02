import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n' // Cấu hình i18n
import './index.scss'
import { I18nProvider } from './plugin/I18nPlugin'
import reportWebVitals from './reportWebVitals'
import store from './store/store'

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
