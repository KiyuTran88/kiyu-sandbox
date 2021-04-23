<template>
	<left-list :itemList="itemList" @changeState="changeState"></left-list>
	<cart-list :itemList="itemList" @changeState="changeState" @updatedItemQty="updatedItemQty"></cart-list>
</template>
<script>
import List from "../components/shopping/left-list"
import Cart from "../components/shopping/cart-list"
export default {
	data() {
		return {
			itemList: [
				{ name: "Salmon", price: 6, quantity: 0, isSelected: false }, //0
				{ name: "Beef", price: 5, quantity: 0, isSelected: false },
				{ name: "Eggs", price: 8, quantity: 0, isSelected: false },
				{ name: "Noodle", price: 15, quantity: 0, isSelected: false },
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
			this.itemList[missingIndex].quantity = 0 // reset item.quantity = 0 when it remove from Cart
		},
		updatedItemQty(mode, item) {
			let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
			if (mode === "add") {
				this.itemList[missingIndex].quantity++
			} else if(mode === "minus" && this.itemList[missingIndex].quantity > 0){
				this.itemList[missingIndex].quantity--
			} else{
				this.itemList[missingIndex].isSelected = false
				this.itemList[missingIndex].quantity = 0
			}
		},

		// changeItemQuantity(math, item) {
		// 	let missingIndex = this.itemList.findIndex((foodItem) => foodItem.name == item)
		// 	if (this.itemList[missingIndex].quantity >= 0){
		// 		this.itemList[missingIndex].quantity += math
		// 	}else{
		// 		this.itemList[missingIndex].isSelected = !this.itemList[missingIndex].isSelected
		// 		this.itemList[missingIndex].quantity = 0
		// 	}
		// },
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
