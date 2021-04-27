<template>
	<div class="content">
		<div>Parent food: {{ parentFood }}</div>
		<main-child></main-child>
		<aside>1. Provide & inject pair can send "parentFood" directly through sub-child without passing data through main-child</aside>
		<aside>2. Need to convert Provide:{} to function Provide(){return{ }} that return a object to be able print "Beef" in DOM</aside>
		<aside>3. Provide & inject is one way to pass and receive data from parent to child</aside>
	</div>
</template>

<script>
export default {
	data() {
		return {
			parentFood: "Beef",
		}
	},
	methods:{
		logStatus(){
			console.log("worked")
		}
	},
	components: {
		"main-child": require("../components/provideInject/mainChild").default,
	},
	provide() {
		// provide write as functions to return a object foodName
		return {
			foodName: this.parentFood, // = Beef
			logItem: this.logStatus
		}
	},
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");

div,
button {
	font-size: 1.5rem;
	margin: 1rem;

	aside {
		font-size: 1rem;
		width: 18rem;
		background-color: rgb(207, 207, 207);
		padding: 1rem;
		border-radius: 1rem;
		margin: 0.5rem 0;
	}

	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
}
</style>
