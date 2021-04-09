<template>
	<h2>Shopping Cart</h2>

	<div class="main-wrap" @click="isCartShown" v-for="item in itemList" :key="item">
		<div class="content-wrap">
			<div class="item-label">
				<div @click="addItemTop(item)">{{ item }}</div>
			</div>
		</div>
	</div>
	<h3>Your cart:</h3>
	<div class="main-wrap" v-for="newItem in selectedItems" :key="newItem">
		<div class="content-wrap">
			<div class="item-label">
				<div @click="removeItem(newItem)">{{ newItem }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Shopping",
	data() {
		return {
			isCartShown: false,
			totalItems: 0,
			selectedItems: [], // empty cart, pls put items here
			itemList: ["Tomato","Fish","Bread"]
		}
	},
	methods: {
		// checkDuplicate(item) {
		// 	if (item === item) {
		// 		console.log("Tomato")
		// 	} else {
		// 		console.log("Not Tomato")
		// 	}
		// },
		addItemTop(item) {
			//unshift() add item on top of Array
			this.selectedItems.unshift(item)
			console.log(item)
		},
		removeItem(item) {
			//shift() remove item on top of Array
			this.selectedItems.shift(item)
			console.log(item)
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
		color: #00abff;
		font-size: 2rem;
		padding: 0 1rem;
	}
	h3 {
		color: #00abff;
		font-size: 1.3rem;
		margin: 0;
		padding: 0.25rem 0;
	}
	button {
		width: 10rem;
		margin: 0.25rem;
		padding: 0.25rem;
	}
}
.main-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 0.5rem;
	width: 8rem;

	.content-wrap {
		display: flex;
		flex-direction: column;
		background-color: #eee;
		border-radius: 0.75rem;
		padding: 1rem;
		min-width: 14rem;
		margin: 0.25rem;
		&:hover {
			color: #00abff;
		}
		&:visited {
			color: rgb(172, 172, 172);
		}

		.item-label {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
			// background-color: rgb(154, 223, 223);
			&:hover {
				color: #00abff;
			}
		}
		.item-stock {
			padding: 0.5rem 0 0 0;
			font-size: 0.75rem;
		}
	}
}

.cart-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	margin: 0.5rem;
	position: absolute;
	z-index: 1;

	.content-wrap {
		display: flex;
		flex-direction: column;
		color: white;
		background-color: #333;
		border-radius: 0.75rem;
		padding: 1rem;
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.25rem;

		.item-label {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
			// background-color: rgb(154, 223, 223);
		}
		.item-stock {
			padding: 0.5rem 0 0 0;
			font-size: 0.75rem;
		}
	}
}
</style>
