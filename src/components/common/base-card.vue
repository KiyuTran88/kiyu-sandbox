<template>
	<div class="page-wrap">
		<div class="content-wrap" v-for="book in bookList" :key="book">
			<div class="title-wrap">
				<div class="title">{{ book.title }}</div>
				<div class="price">${{ book.price }}</div>
			</div>
			<div>{{ book.content }}</div>
			<div class="button-wrap">
				<div class="button" v-if="book.quantity === 0" @click="$emit('updateCart','add', book)">
					{{ book.button }}
				</div>
				<div class="button" v-if="book.quantity > 0" @click="$emit('updateCart','remove', book)">
					{{ book.button }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "baseCard",
	data() {
		return {}
	},
	props: {
		bookList: Object,
	},
   emits: ['updateCart']
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
