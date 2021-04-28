<template>
	<div>Parent food: {{ parentFood }}</div>
	<main-child :parentFood="parentFood" @mainChildShout="accepted"></main-child>
</template>

<script>
export default {
	data() {
		return {
			parentFood: "Salmon",
		}
	},
	components: {
		"main-child": require("../components/deepPropsEmit/mainChild").default,
	},
	methods: {
		accepted(payload) {
			this.parentFood = payload
			console.log("parent accepted " + payload)
		},
	},
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;
	margin: 0;
	padding: 0;
	div {
		font-size: 1.5rem;
	}
}
</style>
