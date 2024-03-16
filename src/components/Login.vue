<template>
	<div class="container">
	<div class="card" style="width: 50vw; margin-left: auto; margin-right: auto;">
		<div class="card-header">
			<div class="card-title">Login</div>
		</div>
		<div class="card-body">
			<form @submit.prevent="store.login(form)">
				<input type="email" class="form-control mt-2" placeholder="Email" v-model="form.email">
				<input type="password" class="form-control mt-2" placeholder="Password" v-model="form.password">
				<input type="submit" class="form-control mt-2" value="Login">
				<router-link :to="{name: 'forgot_password'}" class="form-control mt-2 btn btn-success">Forgot password</router-link>
			</form>
		</div>
	</div>
	</div>
</template>
<script setup>
import {ref} from 'vue'
import authStore from '../stores/auth';

const form = ref({
	email: null,
	password: null,
})
const store = authStore()
</script>