<template>
		<nav-bar></nav-bar>
	<router-view />
</template>
<script>
export default {
	data(){
		return{}
	},
	components:{
		"nav-bar": require("./components/selectCard/navBar.vue").default,
	}
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
@import "./style/common.scss";
#app{
	min-width: 360px;
}

* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;
	margin: 0;
	padding: 0;

	h2 {
		font-size: 2rem;
		color: rgb(70, 57, 255);
	}
}
</style>
