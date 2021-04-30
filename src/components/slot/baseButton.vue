<template>
	<div class="orange-button">{{ label }}</div>
</template>

<script>
export default {
	props: {
		label: String,
	},
}
</script>

<style>
.orange-button {
	background-color: orange;
	display: inline-flex;
	border: none;
	font-weight: 800;
	padding: 0.5rem 1rem;
	cursor: pointer;
}
</style>
