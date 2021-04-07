<template>
	<h2>Shopping Cart</h2>

	<div class="main-wrap" @click="isCartShown" v-for="item in itemList" :key="item">
		<div class="content-wrap">
			<div @click="updateCart('add', item)" class="item-label">
				<div @click="passedItem(item.name, item.price)">{{ item.name }}</div>
				<!-- <div>{{ item.quantity }}</div> -->
				<div @click="passedItem(item.name, item.price)">${{ item.price }}</div>
			</div>
		</div>
	</div>

	<div class="cart-wrap" v-if="!isCartShown && totalItems > 0">
		<div class="content-wrap">
			<h3>Your Cart:</h3>
			<br />
			<div class="item-label">
				<div>{{ selectedItems.name }}</div>
				<div>${{ selectedItems.price }}</div>
			</div>
			<br /><br />
			<div class="item-label">
				<div>Total: ${{ totalPrice() }}</div>
				<div>Items: {{ totalItems }}</div>
				<button @click="updateCart('minus', itemList)">-</button>
				<button @click="updateCart('add', itemList)">+</button>
			</div>
		</div>
		<div class="cart-wrap"></div>
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
			itemList: [
				{
					name: "Mini Tomato",
					price: 5,
					quantity: 0,
					stock: 5,
				},
				{
					name: "US Potato",
					price: 3,
					quantity: 0,
					stock: 10,
				},
				{
					name: "Baby Carrot",
					price: 8,
					quantity: 0,
					stock: 10,
				},
				{
					name: "Local Squash",
					price: 7,
					quantity: 0,
					stock: 10,
				},
				{
					name: "Chinese Chili",
					price: 2,
					quantity: 0,
					stock: 10,
				},
			],
		}
	},
	methods: {
		updateCart(mode, item) {
			if (mode === "add") {
				// item.name = "Added to cart!"
				// item.price = "USD"
				item.quantity++
				this.totalItems++
			} else {
				item.quantity--
				this.totalItems--
			}
		},

		passedItem(passedName, passedPrice) { // passdata to cart
			this.selectedItems = { name: passedName, price: passedPrice }
		},

		totalPrice() {
			return this.selectedItems.price * this.totalItems
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
		color: #00bf82;
		font-size: 2rem;
		padding: 0 1rem;
	}
	h3 {
		color: #00bf82;
		font-size: 1.3rem;
		margin: 0;
		padding: 0.25rem 0;
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
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.25rem;
		&:hover {
			color: #00bf82;
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
				color: #00bf82;
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
