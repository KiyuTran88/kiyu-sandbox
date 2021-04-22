<template>
	<left-list :itemList="itemList" @changeState="changeState"></left-list>
	<cart-list
		:itemList="itemList"
		@changeState="changeState"
		@changeItemQuantity="changeItemQuantity"
		@removeItem="removeItem"
	></cart-list>
</template>
<script>
import List from "../components/shopping/left-list"
import Cart from "../components/shopping/cart-list"
export default {
	data() {
		return {
			itemList: [
				{ name: "Salmon", price: 6, quantity: 1, isSelected: false }, //0
				{ name: "Beef", price: 5, quantity: 1, isSelected: false },
				{ name: "Eggs", price: 8, quantity: 1, isSelected: false },
			],
		}
	},
	components: {
		"left-list": List,
		"cart-list": Cart,
	},
	methods: {
		changeState(item) {
			// value shows Salmon
			let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
			this.itemList[missingIndex].isSelected = !this.itemList[missingIndex].isSelected
		},
		// updatedItemQty(mode, item) {
		// 	if (mode === "add") {
		// 		let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
		// 		this.itemList[missingIndex].isSelected = !this.itemList[missingIndex].isSelected
		// 		this.itemList[missingIndex].quantity+1
		// 		// console.log(missingIndex)
		// 	} else {
		// 		let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
		// 		this.itemList[missingIndex].isSelected = !this.itemList[missingIndex].isSelected
		// 		this.itemList[missingIndex].quantity-1
		// 		// console.log(missingIndex)
		// 	}
		// },

		changeItemQuantity(math, item) {
				let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
				this.itemList[missingIndex].quantity+=math
				console.log(this.itemList[missingIndex].quantity)
		},
		removeItem(item) {
			let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
			this.itemList[missingIndex].quantity=0
			console.log(this.itemList[missingIndex].isSelected)
		},
	},
}
</script>
<style lang="scss" scroped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
body {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	color: #333;
	h2 {
		color: #eb775a;
		font-size: 2rem;
		padding: 0 1rem;
	}
}
.main-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 0.5rem;
	width: 10rem;
	.content-wrap {
		display: flex;
		flex-direction: column;
		background-color: #eee;
		border-radius: 0.75rem;
		padding: 1rem;
		min-width: 14rem;
		margin: 0.25rem;
		cursor: pointer;
		&:hover {
			color: #e2684a;
		}
		.item-label {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
			// background-color: rgb(154, 223, 223);
			&:hover {
				color: #da0041;
			}
		}
	}
	.selected {
		background-color: rgb(243, 243, 243);
		color: #888;
	}
}
</style>
