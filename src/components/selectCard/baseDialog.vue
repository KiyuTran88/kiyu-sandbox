<template>
	<div :class="theme">
		<div>
			<slot name="dialogContent"></slot>
		</div>
		<slot name="cta"></slot>
	</div>
</template>

<script>
export default {
	props: {
		dialogContent: String,
		cta: String,
		theme: String,
	},
}
</script>

<style lang="scss">
.card-wrap {
	display: inline-flex;
	flex-direction: column;
	background-color: #eee;
	border-radius: 0.5rem;
	padding: 2rem;
	width: 20rem;
	margin: 2rem;
	top: 0 button {
		display: inline-flex;
		border: none;
		color: white;
		font-weight: 800;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
}
</style>
