<script setup>
import authStore from '../../stores/auth';
const store = authStore()
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <template v-if="!store.user">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
        </li>
        </template>
        <template v-if="store.user">
        <li class="nav-item">
          <a href="#" class="nav-link">Username: {{ store.user.name }}</a>
        </li>
        <li class="nav-item">
          <button class="nav-link" @click="store.logout()">Logout</button>
        </li>
        </template>
      </ul>
    </div>
  </div>
</nav>
</template>

