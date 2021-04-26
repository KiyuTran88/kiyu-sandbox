<template>
	<div>Sub Child food: {{ foodName }}</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	provide: {
		subChildFood: "tomato",
	},
	inject: ["foodName"], // get data directly from parent by using provide
}
</script>

<style></style>
