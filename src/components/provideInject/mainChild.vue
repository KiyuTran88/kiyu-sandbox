<template>
	<div>Main Child food: no food passed here</div>
   <sub-child></sub-child>
	<!-- <div>{{ subChildFood }}</div> -->
	<!--- line above mean Provide and Inject only one way passing data from parent to child --->
</template>

<script>
export default {
	components: {
		"sub-child": require("./subChild").default,
	},
	// inject:['subChildFood'] // false to inject data from sub-child to main-child
}
</script>

<style></style>
