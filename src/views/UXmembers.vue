<template>
	<div class="title-card-wrap gradient-bg">
		<div class="title-wrap">
			<h2>UX Members</h2>
			<h4>A place to seek and share UX advices.</h4>
		</div>
		<div class="button-wrap">
			<button class="button" @click="toggleCard">Become a member</button>
		</div>
	</div>
	<div class="headline-card-wrap">
		<div class="title-wrap">
			<h3>Top UX Members</h3>
			<p class="author">We believe designers are thinkers as much as they are makers.</p>
		</div>
	</div>
	<div class="card-wrap">
		<div>New Member here:</div>
		<!-- <name-card v-for="person in personList" :key="person" :person="person"></name-card> -->
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		personList: Object,
		newMember: Object,
	},
	components: {
		// "name-card": require("../components/selectCard/nameCard.vue").default,
	},
}
</script>

<style lang="scss" scoped>
.card-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.content-wrap {
		display: flex;
		flex-direction: column;
		border-radius: 0.75rem;
		background-color: #fff;
		border: 0.1px solid #e8e8e8;
		padding: 2rem;
		width: 100%;
		height: 10rem;
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.5rem;
		transition: transform 0.1s;
		transition-timing-function: ease-in;
		cursor: pointer;

		.icon-wrap {
			display: flex;
			flex-direction: flex-end;
			display: none;
		}

		&:hover {
			transform: scale(1.02);
			transform: translateY(-5px);
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
			filter: brightness(102%);

			.icon-wrap {
				display: flex;
				position: relative;
				margin-left: auto;

				.close-icon {
					width: 0.75rem;
					height: 0.75rem;
					display: flex;
					padding: 0.5rem;
					border-radius: 1rem;
					position: absolute;
					background-color: #e2e2e2;
					margin-top: -2.5rem;
					margin-left: 0.75rem;
				}
				.opacity {
					opacity: 0.5;
				}
			}
		}

		.desciption {
			font-size: 0.75rem;
			color: rgb(119, 119, 119);
		}
		.title-wrap {
			display: flex;
			justify-content: space-between;
			font-weight: 800;
			margin-bottom: 1rem;
		}
	}
	.highlight-content {
		display: flex;
		flex-direction: column;
		border-radius: 0.75rem;
		background-color: #fff4e3;
		border: 0.1px solid #ff520052;
		padding: 2rem;
		width: 100%;
		height: 10rem;
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.5rem;
		transition: transform 0.1s;
		transition-timing-function: ease-in;
		cursor: pointer;
	}
}
</style>
