<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cart">Cart</router-link> | 
    <router-link to="/book">Book</router-link>
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
