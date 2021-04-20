<template>
	<left-list :expectedList="itemList" @changeState="changeState"></left-list>
	<cart-list :expectedCart="itemList" @changeState="changeState"></cart-list>
</template>
<script>
import List from "../components/Shopping/leftList.vue"
import Cart from "../components/Shopping/cartList.vue"
export default {
	data() {
		return {
			itemList: [
				{ name: "Salmon", isSelected: false }, //0
				{ name: "Beef", isSelected: false },
            { name: "Eggs", isSelected: false },
			],
		}
	},
	components: {
		"left-list": List,
		"cart-list": Cart,
	},
   methods: {
      changeState(value){ // value shows Salmon
         let indexItem = this.itemList.findIndex(foodItem => foodItem.name == value )
         this.itemList[indexItem].isSelected = !this.itemList[indexItem].isSelected
         console.log(indexItem)
      }
   }
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
