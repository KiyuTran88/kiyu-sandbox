<template>
	<div class="content-wrap" v-if="person.isShow === true" @click="provideName(person.name)">
		<div class="icon-wrap">
			<span class="close-icon" @click="closeDialog">
				<img src="../../assets/icon_close_dark.svg" />
			</span>
		</div>
		<div class="title-wrap">{{ person.name }}</div>
		<div>☎️ {{ person.phone }}</div>
		<div>💌 {{ person.email }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		provideName(payload) {
			this.$emit("findIndex", payload)
			console.log(payload)
		},
	},
	props: ["person", "newHero"],
	emits: ["findIndex"],
}
</script>

<style lang="scss" scoped>
.content-wrap {
	display: flex;
	flex-direction: column;
	background-color: #eee;
	border-radius: 0.75rem;
	padding: 1rem;
	min-width: 20rem;
	max-width: 32rem;
	margin: 0.5rem;

	.icon-wrap {
		display: flex;
		flex-direction: flex-end;
		display: none;
	}

	&:hover {
		cursor: pointer;
		// transform: scale(1.05,1.05);
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
				position: absolute;
				background-color: rgb(207, 207, 207);
				border-radius: 1rem;
				margin-left: -0.5rem;
				margin-top: -1.2rem;
			}
			.opacity {
				opacity: 0.5;
			}
		}
	}

	.title-wrap {
		display: flex;
		justify-content: space-between;
		font-weight: 800;
		margin-bottom: 1rem;
	}
	.email-display {
		display: none;
		&:hover {
			display: block;
			background-color: gold;
		}
	}
}
</style>
