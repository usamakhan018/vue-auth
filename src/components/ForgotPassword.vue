<template>
	<div class="container">
	<div class="card" style="width: 50vw; margin-left: auto; margin-right: auto;">
		<div class="card-header">
			<div class="card-title">Login</div>
		</div>
		<div class="card-body">
			<form @submit.prevent="store.forgot(form)">
				<input type="email" class="form-control mt-2" placeholder="Email" v-model="form.email">
				<input type="submit" class="form-control mt-2" value="Reset password">
			</form>
		</div>
	</div>
	</div>
</template>
<script setup>
import authStore from '../stores/auth';
import {ref} from 'vue'
const store = authStore()
const form = ref({
    email: null
})
</script>

<style>

</style>