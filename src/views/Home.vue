<template>
	<div class="title-card-wrap gradient-bg">
		<div class="title-wrap">
			<h2>About us</h2>
			<h4>🎯 Welcome to Kiyu Vue Playground 🏖</h4>
		</div>
		<div class="button-wrap">
			<button class="button" @click="toggleSignup">Become a member</button>
		</div>
	</div>
	<div class="headline">
		<div class="content-center">
			<router-link to="/book">Book Store</router-link><br />
			<router-link to="/food">Food Calculator</router-link><br />
			<router-link to="/member">Member Show/Hide</router-link><br />
			<router-link to="/shopping">Shopping</router-link><br />
			<router-link to="/components">Components</router-link><br />
			<router-link to="/payload">Payload concept</router-link><br />
			<router-link to="/deeppropsemit">PropsEmit</router-link><br />
			<router-link to="/ProvideInject">Provide/inject</router-link><br />
			<router-link to="/VModel">V-model</router-link><br />
			<router-link to="/Computed">Computed</router-link><br />
			<router-link to="/ArrayDuplicate">Array Manipulation</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
}
</script>
<style lang="scss" scoped>
.headline {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 2rem 2rem 2rem;
}
.content-center {
	display: flex;
	flex-direction: column;
	margin: 2rem 0;
	text-align: center;
}
@media only screen and (max-width: 600px) {
	.headline-wrap {
		flex-direction: column;
		padding: 1rem;
	}
	.content-center {
		background-color:#eee;
		padding: 1rem;
		text-decoration: none;
	}
}
</style>
