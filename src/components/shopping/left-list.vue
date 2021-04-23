<template>
	<h2>Shop now</h2>
	<div class="main-wrap" v-for="item in itemList" :key="item">
		<div class="content-wrap" v-if="item.isSelected === false" @click="$emit('changeState', item.name)">
			<div class="item-label" >
				<div>{{ item.name }}</div>
				<div>${{ item.price }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "leftList",
	data() {
		return {}
	},
	props: {
		itemList: Object,
	},
	emits: ["changeState"],
}
</script>

<style lang="scss" scroped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");

body {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	color: #333;

	h2 {
		color: #1aabe4;
		font-size: 2rem;
		padding: 0 1rem;
	}
	h3 {
		color: #1aabe4;
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
		min-width: 18rem;
		margin: 0.25rem;
		cursor: pointer;

		&:hover {
			color: #1aabe4;
		}

		.item-label {
			display: flex;
			justify-content: space-between;
			font-weight: 600;
			// background-color: rgb(154, 223, 223);
			&:hover {
				color: #1aabe4;
			}
		}
		.item-stock {
			padding: 0.5rem 0 0 0;
			font-size: 0.75rem;
		}
	}
	.selected {
		background-color: rgb(243, 243, 243);
		color: #888;
	}
}
.page-wrap {
	background-color: rgb(31, 31, 31);
	position: absolute;
	top: 0;
	right: 0;
	padding: 1rem;

	.cart-wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;

		.cart-content-wrap {
			display: flex;
			flex-direction: column;
			background-color: rgb(44, 44, 44);
			color: rgb(199, 199, 199);
			border-radius: 0.75rem;
			padding: 1rem;
			min-width: 20rem;
			margin: 0.25rem;
			height: 1.5rem;
			justify-content: center;

			.button-wrap {
				display: none;
			}

			&:hover {
				color: white;
				background-color: rgb(53, 53, 53);

				.button-wrap {
					display: flex;

					.button {
						background-color: #6afff8;
						padding: 0rem 0.5rem;
						margin: 0 0.25rem;
						border-radius: 1rem;
						cursor: pointer;
						color: rgb(43, 43, 43);
					}
				}
			}

			.cart-label {
				display: flex;
				justify-content: space-between;
				font-weight: 600;
				align-items: center;
			}
			.cart-stock {
				padding: 0.5rem 0 0 0;
				font-size: 0.75rem;
			}
		}
	}
	.total-wrap {
		display: flex;
		justify-content: space-between;
		color: white;
		margin: 1rem 0.5rem;

		.total-price {
			color: #1aabe4;
			font-weight: 800;
			font-size: 1.25rem;
		}
	}
}
</style>
