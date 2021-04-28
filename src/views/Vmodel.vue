<template>
	<div>
		<h2>Log in</h2>
		<span>Username: </span>
		<input v-model="userInfo.userName" type="text" /><br /><br />
		<span>Password: </span>
		<input v-model="userInfo.passWord" type="text" />
		<div>{{ userInfo }}</div>
		<button @click="logUserInfo()">Log in</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {
				userName: "",
				passWord: "",
			},
		}
	},
	methods: {
		logUserInfo() {
			console.log(this.userInfo.userName)
			console.log(this.userInfo.passWord)
			console.table(this.userInfo)
		},
	},
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;
	margin: 0;
	padding: 0;
	h2 {
		font-size: 1rem;
	}
	button {
		font-size: 1.25rem;
		font-weight: 800;
	}
}
</style>
