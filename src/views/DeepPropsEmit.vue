<template>
  <div>Parent food: {{ parentFood }}</div>
  <main-child :parentFood="parentFood" @mainChildShout="accepted"></main-child>
</template>

<script>
export default {
	data(){
		return{
			parentFood: "Salmon"
		}
	},
	components: {
		'main-child': require ("../components/DeepPropsEmit/mainChild").default,
	},
	methods: {
		accepted(payload){
			this.parentFood = payload
			console.log("parent accepted " + payload)
		}
	}
	
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
div {
	font-size: 1.5rem
}
</style>