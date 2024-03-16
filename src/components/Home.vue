<script setup>
import authStore from '../stores/auth';
import { onMounted } from 'vue';
const store = authStore()

onMounted(async () => {
	if(store.user){
		const user = await store.getUser()
	}
})

</script>
<template>
	<p v-if="store.user">User: {{ store.user.name }}</p>
	<p v-else>You are not logged in</p>
</template>
