<template>
	<div>Sub Child food: {{ foodName }}</div>
	<button @click="logItem">log status</button>
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
	inject: ["foodName","logItem"], // get data directly from parent by using provide
}
</script>

<style></style>
