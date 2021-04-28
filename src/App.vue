<template>
	<div class="nav-bar">
		<router-link to="/">Home</router-link>
		<router-link to="/grocery">Grocery</router-link>
		<router-link to="/SelectCard">Phone Book</router-link>
		<!-- <router-link to="/book">Book Store</router-link> -->
		<!-- <router-link to="/payload">Payload</router-link> -->
		<!-- <router-link to="/food">Food</router-link> -->
		<!-- <router-link to="/member">Member</router-link> -->
		<!-- <router-link to="/shopping">Shopping</router-link> -->
		<!-- <router-link to="/components">Components</router-link> -->
		<!-- <router-link to="/deeppropsemit">PropsEmit</router-link> -->
		<!-- <router-link to="/ProvideInject">ProvideInject</router-link> -->
		<!-- <router-link to="/VModel">VModel</router-link> -->
		<!-- <router-link to="/Computed">Computed</router-link> -->
		<!-- <router-link to="/ArrayDuplicate">ArrayDuplicate</router-link> -->
	</div>
	<router-view />
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;
	margin: 0;
	padding: 0;

	h2 {
		font-size: 2rem;
		color: rgb(70, 57, 255);
	}
}

.nav-bar {
	display: flex;
	align-content: center;
	padding: 1rem 0;
	background-color: #1f222c;
	color: white;
}

a {
	font-size: 1rem;
	font-weight: 600;
	color: rgba(145, 171, 211, 0.699);
	padding: 0.5rem 1rem;
	text-decoration: none;
}

a.router-link-exact-active {
	color:white;
}
</style>
