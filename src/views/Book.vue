<template>
	<header class="headline">
		<h2>Book store</h2>
		<div class="headline">
			<span>Your cart: </span>
			<span class="cart">{{ selectedBook }} books</span>
		</div>
	</header>
	<div class="page-wrap">
		<div class="content-wrap" v-for="book in bookList" :key="book">
			<div class="title-wrap">
				<div class="title">{{ book.title }}</div>
				<div class="price">${{ book.price }}</div>
			</div>
			<div>{{ book.content }}</div>
			<div class="button-wrap">
				<div class="button" v-if="book.quantity === 0" @click="updateCart('add', book)">
					{{ book.button }}
				</div>
				<div class="button" v-if="book.quantity > 0" @click="updateCart('remove', book)">
					{{ book.button }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Book",
	data() {
		return {
			selectedBook: 0,
			bookList: [
				{
					// image: require("../assets/tenderLand.png"),
					title: "This Tender Land",
					price: 100,
					quantity: 0,
					content:
						"If you liked Where the Crawdads Sing, you’ll love This Tender Land...This story is as big-hearted as they come. The unforgettable story of four orphans who travel the Mississippi River on a life-changing odyssey during the Great Depression.",
					button: "Add to Cart",
				},
				{
					// image: require("../assets/notGiveFek.png"),
					title: "The Subtle Art of Not Giving a F*ck",
					price: 101,
					quantity: 0,
					content:
						"Flies in the face of so much conventional self-help wisdom that it’s hard not to label the book as anti-self-help. Yet, that label undermines how pragmatic the book actually is. In the overcrowded and over-clichéd self-help genre, this is a book well worth whatever f*cks you can muster.",
					button: "Add to Cart",
				},
				{
					// image: require("../assets/everythingFek.png"),
					title: "Everything Is F*cked: A Book About Hope",
					price: 99,
					quantity: 0,
					content:
						"Everything Is F*cked is a New York Times bestseller written by Mark Manson. It is the follow-up to The Subtle Art of Not Giving a F*ck, which was itself a #1 New York Times bestseller. These books are a hit because of their humorous and counterintuitive approach to finding hope in a society overridden with hopelessness.",
					button: "Add to Cart",
				},
				{
					// image: require("../assets/thinkLikeMonk.png"),
					title: "Think Like a Monk",
					price: 108,
					quantity: 0,
					content:
						"In this inspiring, empowering book, Shetty draws on his time as a monk to show us how we can clear the roadblocks to our potential and power. Combining ancient wisdom and his own rich experiences in the ashram, Think Like a Monk reveals how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us. ",
					button: "Add to Cart",
				},
			],
		}
	},
	methods: {
		updateCart(mode, book) {
			if (mode === "add") {
				book.button = "Remove from Cart"
				book.quantity++
				this.selectedBook++
			} else {
				book.button = "Add to Cart"
				book.quantity--
				this.selectedBook--
			}
		},
	},
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;

	h2 {
		font-size: 2rem;
		color: rgb(70, 57, 255);
	}
}
.headline {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;

	.cart {
		background-color: #4639ff;
		color: white;
		display: flex;
		justify-content: flex-end;
		height: fit-content;
		width: fit-content;
		margin-left: 0.5rem;
		padding: 0.25rem 1rem;
		font-size: 1rem;
		border-radius: 1rem;
		font-weight: 600;
	}
}
.page-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0.5rem;

	.content-wrap {
		display: flex;
		flex-direction: column;
		background-color: #eee;
		border-radius: 0.75rem;
		padding: 1rem;
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.5rem;

		.title-wrap {
			display: flex;
			justify-content: space-between;
			font-weight: 800;
			margin-bottom: 1rem;

			.title {
				display: flex;
				flex-direction: flex-start;
				font-size: 1.25rem;
			}
			.price {
				display: flex;
				justify-content: flex-end;
				font-size: 1.25rem;
			}
		}
	}
}

.button-wrap {
	display: flex;
	justify-content: flex-end;
	margin-top: auto;

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		background-color: rgb(202, 202, 202);
		padding: 0.75rem 1.25rem;
		margin: 1rem 0.25rem 0.5rem 0.25rem;
		border-radius: 1.5rem;
		width: fit-content;
		height: 0.75rem;
		font-size: 1rem;
		&:hover {
			background-color: rgb(70, 57, 255);
			color: white;
		}
	}
}
</style>
