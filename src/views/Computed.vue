<template>
	<div>{{ fullName }}</div>
	<div>{{ checkAge }}</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: "Kiyu",
			lastName: "Tran",
			age: 18,
		}
	},
	computed: {
		fullName() {
			return this.firstName + " " + this.lastName
		},
		checkAge() {
			return 50 - this.age > 35 ? "still young" : "too young"
		},
	},
}
</script>

<style lang="scss">
* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;
	margin: 0;
	padding: 0;
	div {
		font-size: 2rem;
	}
}
</style>
