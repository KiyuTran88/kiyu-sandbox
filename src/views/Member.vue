<template>
	<h2>Team members</h2>
	<div class="button-wrap">
		<div class="button" @click="isSeniorShow = !isSeniorShow">{{ checkState(isSeniorShow) }} Seniors</div>
		<div class="button" @click="isJuniorShow = !isJuniorShow">{{ checkState(isJuniorShow) }} Junior</div>
	</div>
	<div v-for="member in teamUX" :key="member">
		<div class="content-wrap" v-if="checkRoles(member.role)">{{ member.role }} : {{ member.name }}</div>
	</div>
	<div>Is member Senior? {{ isSeniorShow }}</div>
	<div>Is member Junior? {{ isJuniorShow }}</div>
</template>

<script>
export default {
	name: "Member",
	data() {
		return {
			isSeniorShow: true,
			isJuniorShow: true, // toggle Boolean && used to change state
			teamUX: [
				{ role: "Senior", name: "Anthony" },
				{ role: "Senior", name: "Kleine" },
				{ role: "Senior", name: "Kiyu" },
				{ role: "Senior", name: "Mick" },
				{ role: "Junior", name: "Michelle" },
				{ role: "Junior", name: "Jarvey" },
			],
		}
	},
	methods: {
		checkState(state) { // toggle in commom use
			if (state === true) {
				return "Show"
			} else {
				return "Hide"
			}
		},
		checkRoles(role) {
			if (role === "Senior" && this.isSeniorShow === true) {
				// always use this. to call variable else vue will return error
				return true //  check if role = senior AND isSenior = true, will return TRUE
			} else if (role === "Junior" && this.isJuniorShow === true) {
				return true //  check if role = junior AND isJunior = true, will return TRUE
			} else {
				return false
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
