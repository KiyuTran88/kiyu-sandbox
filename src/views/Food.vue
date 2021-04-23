<template>
	<h2>Food page</h2>
	<h3>Please choose your menu:</h3>
	<calculator :itemList="itemList" @updateAmount="updateAmount"></calculator>
</template>
<script>
import calculator from "../components/shopping/calculator"
export default {
	data() {
		return {
			itemList: [
				{ label: "Beef Steak", price: 30, amount: 0 },
				{ label: "Roasted Carrots", price: 10, amount: 0 },
				{ label: "Phở", price: 90, amount: 0 },
			],
		}
	},
	methods: {
		updateAmount(mode, item) {
			if (mode === "minus") {
				let missingIndex = this.itemList.findIndex((foodItem) => foodItem.label == item)
				this.itemList[missingIndex].amount--
				// console.log(missingIndex)
			} else {
				let missingIndex = this.itemList.findIndex((foodItem) => foodItem.label == item)
				this.itemList[missingIndex].amount++
				// console.log(missingIndex)
			}
		},
	},

	components: {
		calculator: calculator,
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
		color: rgb(255, 81, 0);
		font-size: 2rem;
		padding: 0 1rem;
	}
}
.main-wrap {
	display: flex;
	flex-direction: column;
	margin: 0.5rem;

	.food-content {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #eee;
		border-radius: 4rem;
		font-weight: 600;

		.food-item {
			display: flex;
			flex: 2;
			margin: 0 0 0 1rem;

			.label {
				padding: 0.5rem 0.5rem;
			}
		}
	}
	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #333;
		padding: 1rem 1.5rem;
		color: white;
		border-radius: 2rem;
	}
	.amount-item {
		display: flex;
		width: 1.5rem;
		align-self: center;
		justify-content: center;
	}
	.button-wrap {
		display: flex;
		justify-content: flex-end;
		margin-left: auto;
		padding: 0 0.5rem;

		.button-containted {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgb(202, 202, 202);
			padding: 0.75rem;
			margin: 0.5rem 0.25rem;
			border-radius: 1.5rem;
			width: 0.75rem;
			height: 0.75rem;
			font-size: 1.25rem;
			&:hover {
				background-color: rgb(255, 81, 0);
				color: white;
			}
		}
	}
}
</style>
