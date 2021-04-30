// () parenthesis // [] brackets // {} curly brackets // string interpolation means to combine strings // type1: combine each from separate curly
brackets {{}} + {{}} // type2: use + in one curly bracket {{ item1 + item2 }}
// type3: `${}`
<template>
	<div>
		<input @keydown.enter="addFood" @keydown.esc="this.newFood = ''" v-model="newFood" type="text" />
		<button @click="addFood">Add</button>
		<button @click="checkName">Check Name</button>
		<button @click="isEmailValid">Check Email</button>
		<div>{{ foodList }}</div>
		<div>{{ `Wanwan food menu ${foodList}` }}</div>
		<div>{{ `Wanwan likes ${newFood}` }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			emailString: "kiyutran@gmail.com",
			foodList: [],
			newFood: "",
			personList: [{ name: "Batman" }, { name: "Hero" }],
		}
	},
	methods: {
		addFood() {
			if (this.foodList.includes(this.newFood)) {
				alert(`Duplicated ${this.newFood}`)
			} else {
				this.foodList.push(this.newFood)
				this.foodList.sort()
			}
			this.newFood = ""
		},
		checkName() {
			if (this.personList.some((person) => person.name === "Batman")) {
				console.log("Duplicated")
			} else {
				console.log("Can add")
			}
		},
		isEmailValid(){
			const emailString = 'kiyutran@gmail.com';
			const regex = new RegExp('w');
			console.log(regex.test(emailString))
		}
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
		font-size: 2rem;
		color: rgb(70, 57, 255);
	}
	div,
	input,
	button {
		font-size: 2rem;
	}
}
</style>
