import {defineStore} from 'pinia'
import axios from 'axios'

const authStore = defineStore('auth', {
	states: () => {
		authUser: null
	},
	getters: {
		user: (state) => state.authUser
	},
	actions: {
		async getCSRFCookie() {
			await axios.get('/sanctum/csrf-cookie')
		},
		async getUser() {
			const res = await axios.get('api/user')
			console.log(res.data)
			this.authUser = res.data
			this.router.push({name: 'home'})
		},
		async login(data) {
			await this.getCSRFCookie()
			const res = await axios.post('login', {
				email: data.email,
				password: data.password
			})
			console.log(res)
			await this.getUser()
		},
		async register(data) {
			const res = await axios.post('register', {
				name: data.name,
				email: data.email,
				password: data.password,
				password_confirmation: data.password_confirmation,
			})
			console.log(res)
			this.router.push({name: 'home'})
		},
		async logout() {
			const res = await axios.post('logout')
			console.log(res)
			this.router.push({name: 'login'})
		},
		async forgot(data) {
			await this.getCSRFCookie()
			const res = await axios.post('forgot-password', data)
			console.log(res)
			this.router.push({name: 'home'})
		},
		async reset(data) {
			await this.getCSRFCookie()
			const res = await axios.post('reset-password', {
				email: data.email,
				password: data.password,
				password_confirmation: data.password_confirmation,
				token: data.token,
			})
			console.log(res.data)
			this.router.push({name: 'login'})
		}

	}
})

export default authStore