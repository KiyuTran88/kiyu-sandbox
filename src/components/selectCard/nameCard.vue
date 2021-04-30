<template>
	<div class="content-wrap" v-if="person.isShow === true" >
		<div class="icon-wrap">
			<span class="close-icon" @click="provideName(person.name)">
				<img src="../../assets/icon_close_dark.svg" />
			</span>
		</div>
		<div class="title">{{ person.title }}</div>
		<div class="content-card">{{ person.decription }}</div>
		<div class="text-link-wrap">
			<div class="author" >🎖{{ `${person.name} • 3 days ago` }}</div>
			<div class="text-link">Read more</div>
		</div>
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
	props: ["person", "newHero","removeCard"],
	emits: ["findIndex"],
}
</script>

<style lang="scss" scoped>

	.title {
		display: flex;
		justify-content: space-between;
		font-weight: 800;
		margin-bottom: 1rem;
		font-size: 1.15rem;
	}
	.content-card {
		font-size: 0.9rem;
		color: rgb(92, 90, 107);
		line-height: 1.2rem;
	}
	.text-link-wrap {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
	}

	.decription-display {
		display: none;
		&:hover {
			display: block;
			background-color: gold;
		}
	}

</style>
