<template>
  <button @click="$emit('changeLabel','Jimmy')">{{ expectedLabel }}</button>
</template>

<script>
export default {
   name: "list",
   data(){
      return{}
   },
   props: {
      expectedLabel: String
   }
}
</script>

<style lang="scss" scroped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");
body {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	color: #333;

	h2 {
		color: rgb(64, 131, 255);
		font-size: 2rem;
		padding: 0 1rem;
	}
}

</style>