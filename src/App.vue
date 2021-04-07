<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/food">Food</router-link> | 
    <router-link to="/book">Book</router-link> |
    <router-link to="/member">Member</router-link> |
    <router-link to="/shopping">Shopping Cart</router-link>
  </div>
  <router-view/>
</template>
<style>
#nav {
	font-family: Arial;
	font-size: 1rem;
	color: #333;
}
</style>
