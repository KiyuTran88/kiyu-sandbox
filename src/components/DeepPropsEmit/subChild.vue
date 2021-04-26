<template>
	<div>Sub Child food: {{ mainChildFood }}</div>
    <button @click="changeFood('Carrot')">Change food</button>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		mainChildFood: String,
	},
    methods:{
        changeFood(payload){
            this.$emit('subChildShout',payload)
            console.log("Sub Child sent "+ payload)
        }
    },
    emits:['subChildShout']
}
</script>

<style lang="scss">
div, button {
    font-size: 1.5rem
}
</style>
