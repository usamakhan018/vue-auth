<template>
	<div class="container">
	<div class="card" style="width: 50vw; margin-left: auto; margin-right: auto;">
		<div class="card-header">
			<div class="card-title">Reset Password</div>
		</div>
		<div class="card-body">
			<form @submit.prevent="store.reset(form)">
				<input type="password" class="form-control mt-2" placeholder="Password" v-model="form.password">
                <input type="password" class="form-control mt-2" placeholder="Confirm Password" v-model="form.password_confirmation">
				<input type="submit" class="form-control mt-2" value="Reset password">
			</form>
		</div>
	</div>
	</div>
</template>
<script setup>
import authStore from '../stores/auth';
import {ref} from 'vue'
import { useRoute } from 'vue-router'

const store = authStore()

const route = useRoute()

const form = ref({
    email: route.query.email,
    token: route.params.token,
    password: null,
    password_confirmation: null,
})
</script>

<style>

</style>