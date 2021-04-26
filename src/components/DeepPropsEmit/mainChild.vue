<template>
	<div>Main Child food: {{ parentFood }}</div>
	<sub-child :mainChildFood="parentFood" @subChildShout="accepted"></sub-child>
</template>

<script>
export default {
	data() {
		return {}
	},
	components: {
		'sub-child': require("./subChild").default,
	},
	props: {
		parentFood: String
	},
	methods:{
		accepted(payload){
			this.$emit('mainChildShout', payload) //payload
			console.log("main child accepted " + payload) //payload
		}
	},
	emits: ['mainChildShout']
}
</script>

<style></style>
