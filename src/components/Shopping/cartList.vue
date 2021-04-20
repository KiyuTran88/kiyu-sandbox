<template>
	<h2>Right Cart</h2>
	<div v-for="item in expectedCart" :key="item" @click="$emit('changeState', item.name )">
		<div v-if="item.isSelected === true">{{ item.name }} {{ item.isSelected }}</div>
	</div>
</template>
<script>
export default {
	name: "leftList",
	data() {
		return {}
	},
	props: {
		expectedCart: Object,
	},
	emits: ['changeState']
}
</script>

<style></style>
