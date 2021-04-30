<template>
	<div :class="theme">
		<div>
			<slot name="content"></slot>
		</div>
		<slot name="cta"></slot>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		content: String,
		cta: String,
		theme: String,
	},
}
</script>

<style lang="scss" scoped>
.card-wrap {
	display: inline-flex;
	flex-direction: column;
	background-color: #eee;
	border-radius: 0.5rem;
	padding: 2rem;
	width: 20rem;
	margin: 2rem;

	button {
		display: inline-flex;
		border: none;
		color: white;
		font-weight: 800;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
}
.card-wrap-dark {
   color: white;
	display: inline-flex;
	flex-direction: column;
	background-color: rgb(32, 32, 32);
	border-radius: 0.5rem;
	padding: 2rem;
	width: 20rem;
	margin: 2rem;

	button {
		display: inline-flex;
		border: none;
		color: white;
		font-weight: 800;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
}
</style>
