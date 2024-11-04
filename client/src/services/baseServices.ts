import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
export class BaseService {
	protected instance: AxiosInstance
	protected readonly baseURL: string

	public constructor() {
		this.baseURL = 'http://localhost:3001'
		this.instance = axios.create({
			baseURL: this.baseURL,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		this.initializeRequestInterceptor()
		this.initializeResponseInterceptor()
	}

	private initializeRequestInterceptor = () => {
		// @ts-ignore
		this.instance.interceptors.request.use(this.handleRequest)
	}

	private initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use((response) => {
			return response.data
		}, this.handleError)
	}

	private handleRequest = async (config: AxiosRequestConfig) => {


		return config
	}

	private handleError = async (error: AxiosError) => {
		const response = error.response?.data
		if (error.response?.status === 401) {
		
		}
		return response
	}
}
