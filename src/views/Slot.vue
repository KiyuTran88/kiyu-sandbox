<template>
	<div>
		<button @click="isLight = !isLight">Theme {{ computedTheme }}</button>
	</div>
	<base-card :theme="computedTheme">
		<template #content>
			<div class="red-content">{{ contentA }}</div>
		</template>
		<template #cta>
			<div class="text-link">Susmit</div>
		</template>
	</base-card>

	<base-card theme="card-wrap-dark">
		<template #content>
			<div class="blue-content">{{ contentB }}</div>
		</template>
		<template #cta>
			<base-button label="Read More"></base-button>
			<!-- <div class="blue-button">Susmit</div> -->
		</template>
	</base-card>
</template>

<script>
import baseCard from "../components/slot/baseCard"
import baseButton from "../components/slot/baseButton"
export default {
	data() {
		return {
			isLight: true,
			contentA:
				"So Greek philosophy isn’t the first subject that comes to mind when I talk about design research. But this might be one of those puzzle pieces that only falls into place after a few years.",
			contentB:
				"So Greek philosophy isn’t the first subject that comes to mind when I talk about design research. But this might be one of those puzzle pieces that only falls into place after a few years.",
		}
	},
	computed: {
		computedTheme() {
			return this.isLight === true ? "card-wrap" : "card-wrap-dark"
		},
	},
	components: {
		"base-card": baseCard,
		"base-button": baseButton,
	},
}
</script>

<style lang="scss">
.red-content {
	color: red;
}
.text-link {
	color: rgb(255, 174, 0);
}
.blue-content {
	color: blue;
}
.blue-button {
	background-color: lightblue;
	display: inline-flex;
	border: none;
	font-weight: 800;
	padding: 0.5rem 1rem;
	cursor: pointer;
}
</style>
