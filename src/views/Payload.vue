<template>
	<h3>What to eat?</h3>
	<button @click="getFood(foodList)">Get food</button>
	<div>{{ foodList.name }}</div>
</template>

<script>
export default {
	data() {
		return {
			foodList: {
				name: "noodle",
				size: "large",
				price: 100,
			},
		}
	},
	methods: {
		getFood(payload) {
			console.log(payload.name + payload.size + payload.price + "peso")
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
	div.button {
		font-size: 2rem;
	}
	h2 {
		color: rgb(255, 81, 0);
		font-size: 2rem;
		padding: 0 1rem;
	}
}
</style>
