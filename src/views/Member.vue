<template>
	<h2>Team members</h2>
	<div class="content-wrap" v-for="member in teamUX" :key="member">
		<div>{{ member.role }} : {{ member.name }}</div>
	</div>
	<div class="button-wrap">
		<div class="button" @click="checkRole()">Hide Senior</div>
		<div class="button">Hide Junior</div>
	</div>
</template>

<script>
export default {
	name: "Member",
	data() {
		return {
			teamUX: [
				{ role: "Senior"},
				{ role: "Senior"},
				{ role: "Senior"},
				{ role: "Senior"},
				{ role: "Junior"},
				{ role: "Junior"},
			],
			// teamUX: [
			// 	{ role: "Senior", name: "Anthony" },
			// 	{ role: "Senior", name: "Kleine" },
			// 	{ role: "Senior", name: "Kiyu" },
			// 	{ role: "Senior", name: "Mick" },
			// 	{ role: "Junior", name: "Michelle" },
			// 	{ role: "Junior", name: "Jarvey" },
			// ],
		}
	},
	methods: {
		checkRole() {
         this.teamUX.role === roles
			if (roles === "Senior") {
				console.log("Senior")
			} else {
				console.log("Junior")
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
		color: rgb(255, 115, 0);
	}
}

.content-wrap {
	display: flex;
	flex-direction: column;
	background-color: #eee;
	border-radius: 0.75rem;
	padding: 1rem;
	min-width: 20rem;
	max-width: 22rem;
	margin: 0.5rem;
}

.button-wrap {
	display: flex;
	justify-content: flex-start;
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
			background-color: rgb(255, 115, 0);
			color: white;
		}
	}
}
</style>
