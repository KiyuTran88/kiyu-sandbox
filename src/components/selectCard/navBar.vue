<template>
	<div class="nav-bar">
			<span class="logo"></span>
		<router-link to="/">About</router-link>
		<router-link to="/uxcommunity">UX Community</router-link>
		<router-link to="/uxmembers">Members</router-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

	.logo {
    background-image: url('../../assets/Light.png');
    background-size: contain;
    width: 4rem;
    height: 1.2rem;
    justify-content: flex-start;
    flex: 4;
    background-repeat: no-repeat;
	}


.nav-bar {
	display: flex;
	align-content: center;
	padding: 0.5rem 6rem;
	background-color: #171c25;
	color: white;
	align-items: center;
}
a {
	font-size: 1rem;
	font-weight: 600;
	color: rgba(145, 171, 211, 0.699);
	padding: 1rem;
	text-decoration: none;
}

a.router-link-exact-active {
	color: white;
}

@media only screen and (max-width: 600px) {
	.nav-bar {
		display: flex;
		justify-content: center;
		padding: 0.5rem 1rem;
	}
	a{
		padding: 0.75rem 0.5rem;
	}
}

</style>
