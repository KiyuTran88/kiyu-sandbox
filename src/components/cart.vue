<template>
    <button @click="$emit('revertLabel','Wanwan')">{{ expectedWord }}</button>
</template>

<script>
export default {
   name: "cart",
   data(){
      return{}
   },
   props:{
      expectedWord: String
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
		color: rgb(255, 64, 112);
		font-size: 2rem;
		padding: 0 1rem;
	}
}

</style>