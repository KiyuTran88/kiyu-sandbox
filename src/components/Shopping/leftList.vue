<template>
	<h2>Left List</h2>
	<div v-for="item in expectedList" :key="item" @click="$emit('changeState', item.name )">
		<div v-if="item.isSelected === false">{{ item.name }} {{ item.isSelected }}</div>
	</div>
</template>
<script>
export default {
	name: "leftList",
	data() {
		return {}
	},
	props: {
		expectedList: Object,
	},
   emits: ['changeState']
}
</script>

<style></style>
