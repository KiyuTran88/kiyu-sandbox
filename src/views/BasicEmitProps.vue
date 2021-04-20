<template>
	<h2>{{ quotes }}</h2>
   <list :expectedLabel="buttonLabel1" @changeLabel="changeQuotes"></list> <!-- Emit, custom -->
   <cart :expectedWord="buttonLabel2" @revertLabel="changeQuotes"></cart>
</template>

<script>
import List from "../components/list.vue"
import Cart from "../components/cart.vue"
export default {
   name: "components",
	data() {
		return {
         quotes: 'Wanwan',
         buttonLabel1: 'Change label',
         buttonLabel2: 'Revert back'
      }
	},
   methods: {
      changeQuotes(value){
         this.quotes = value
      }
   },
	components: {
		"list": List,
      "cart": Cart
	},
}
</script>

<style lang="scss" scroped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
body {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	color: #333;

	h2 {
		color: rgb(255, 64, 112);
		font-size: 2rem;
		padding: 0 1rem;
	}
}
</style>
