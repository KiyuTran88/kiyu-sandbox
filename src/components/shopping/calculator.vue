<template>
	<div class="main-wrap">
		<div class="food-content" v-for="item in itemList" :key="item">
			<div class="food-item">
				<div class="label">{{ item.label }}</div>
				<div class="label">${{ item.price }}</div>
			</div>
			<div class="button-wrap">
				<div class="button-containted" v-if="item.amount > 0" @click="$emit('updateAmount', 'minus', item.label)">
					-
				</div>
				<div class="amount-item">{{ item.amount }}</div>
				<div class="button-containted" @click="$emit('updateAmount', 'add', item.label)">+</div>
			</div>
		</div>
	</div>
	<div class="main-wrap">
		<div class="total">
			<div>Total:</div>
			<div style="font-size: 1.1rem">
				<div>{{ calculateTotal }}$</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "calculator",
	data() {
		return {}
	},
	computed: {
		calculateTotal() {
			let totalPrice = 0
			for (const item of this.itemList) {
				console.log(item.amount * item.price)
				totalPrice = totalPrice + item.amount * item.price
			}
			return totalPrice
		},
	},
	props: {
		itemList: Object,
	},
	emits: ["updateAmount", "getIndex"],
}
</script>

<style lang="scss" scroped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
.main-wrap {
	.food-content {
		margin: 0.25rem 0;
	}
}
</style>
