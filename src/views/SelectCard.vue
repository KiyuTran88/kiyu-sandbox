<template>
	<div class="headline-wrap">
		<h2>Select Cards</h2>
		<div class="button-wrap">
			<button class="button" @click="addPerson">Sample</button>
			<button class="button" @click="sortCard">Sorting</button>
			<button class="button" @click="toggleCard">Custom Card</button>
		</div>
	</div>
	<div class="card-wrap">
		<name-card v-for="person in personList" :key="person" @findIndex="removeCard" :person="person" :message="message"></name-card>
	</div>
	<input-field v-if="cardDisplay === true"></input-field>
	<!-- <div>{{`Description: ${changeMessage}`}}</div> -->
</template>
<script>
export default {
	data() {
		return {
			message: "Please input hero name",
			cardDisplay: false,
			newHero: { name: "Kiyu", phone: "Think about me, then i may call you", email: "Dont you think heroes use email?", isShow: true },
			customCard: {
				name: "",
				phone: "",
				email: "",
				isShow: true,
			},
			personList: [
				{
					name: "Aquaman",
					phone: "+63 982 876 3288",
					email: "aquamanislavie@gmail.com",
					isShow: true,
				},
				{
					name: "Joker",
					phone: "+34 943 876 3288",
					email: "jokerisjokes@gmail.com",
					isShow: true,
				},
				{
					name: "Batman",
					phone: "+63 882 176 3288",
					email: "batmanisliar@gmail.com",
					isShow: true,
				},
				{
					name: "Wonder Woman",
					phone: "+84 982 876 3288",
					email: "imwonderawoman@gmail.com",
					isShow: true,
				},
				{
					name: "Harley Quinn",
					phone: "+84 982 876 3288",
					email: "badassharleyquinn@gmail.com",
					isShow: true,
				},
				{
					name: "Cat woman",
					phone: "+84 982 876 3288",
					email: "catwomanlovedog@gmail.com",
					isShow: true,
				},
				{
					name: "Superman",
					phone: "+84 982 876 3288",
					email: "superwomaninman@gmail.com",
					isShow: true,
				},
				{
					name: "Mera",
					phone: "+88 982 876 3288",
					email: "merawarrior@gmail.com",
					isShow: true,
				},
				{
					name: "Black Canary",
					phone: "+84 982 876 3288",
					email: "blackcanary@gmail.com",
					isShow: true,
				},
			],
		}
	},
	methods: {
		removeCard(person) {
			let array = this.personList
			let missingIndex = array.findIndex((people) => people.name == person) // get index from array components
			array.splice(missingIndex, 1)
			console.log(missingIndex)
		},
		addPerson() {
			this.personList.push(this.newHero)
			console.table(this.personList)
		},
		sortCard() {
			// sorting Objects
			this.personList = this.personList.sort((a, b) => {
				return a.name < b.name ? -1 : 1
			})
		},
		submitCard() {
			const newItem = {
				name: this.customCard.name,
				phone: this.customCard.phone,
				email: this.customCard.email,
				isShow: this.customCard.isShow,
				// temporary declaration
			}
			if (this.personList.some((person) => person.name === this.customCard.name)) {
				//finding an object with key
				alert(`Please type new name. Can't add duplicated ${this.customCard.name}`)
				console.log("Duplicated")
			} else {
				this.personList.push(newItem)
				console.log(`Added ${this.customCard.name} to Hero list!`)
			}
			this.customCard.name = "" // refresh text field
			this.customCard.phone = "" // refresh text field
			this.customCard.email = "" // refresh text field
			this.cardDisplay = !this.cardDisplay
		},
		checkDuplicate() {
			if (this.personList.some((person) => person.name === this.customCard.name)) {
				this.message = false
				console.log(this.message)
			} else {
				this.message = true
				console.log(this.message)
			}
		},
		toggleCard() {
			this.cardDisplay = !this.cardDisplay
		},
	},
	mounted() {},
	components: {
		"name-card": require("../components/selectCard/nameCard.vue").default,
		"input-field": require("../components/selectCard/inputForm").default,
	},
	provide() {
		return {
			customCard: this.customCard,
			logConsole: this.logItem,
			submitData: this.submitCard,
			closeDialog: this.toggleCard,
			checkName: this.checkDuplicate,
			dialogMessage: this.message,
			changeDialogMessage: this.changeMessage,
		}
	},
	computed: {
		changeMessage() {
			return this.message
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
		font-size: 2rem;
		color: rgb(70, 57, 255);
	}
}
.content-wrap {
	display: flex;
	flex-direction: column;
	background-color: #eee;
	border-radius: 0.75rem;
	padding: 1rem;
	min-width: 20rem;
	max-width: 32rem;
	margin: 0.5rem;
	&:hover {
		cursor: pointer;
		// transform: scale(1.05,1.05);
		transform: translateY(-5px);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		filter: brightness(102%);
	}
	.desciption {
		font-size: 0.75rem;
		color: rgb(119, 119, 119);
	}
	.title-wrap {
		display: flex;
		justify-content: space-between;
		font-weight: 800;
		margin-bottom: 1rem;
	}
	.email-display {
		display: none;
		&:hover {
			display: block;
			background-color: gold;
		}
	}
}

.button-wrap {
	display: flex;

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		background-color: rgb(70, 57, 255);
		color: white;
		padding: 1rem;
		margin: 0rem 0rem 0rem 0.5rem;
		border: none;
		border-radius: 1.5rem;
		width: fit-content;
		height: 0.75rem;
		font-size: 1rem;
		outline: none;
		&:hover {
			filter: brightness(130%);
			outline: none;
		}
	}
}

.icon-wrap {
	display: flex;
	flex-direction: flex-end;

	.icon {
		// background-color: salmon;
		width: 1rem;
		height: 1rem;
		display: flex;
		margin-left: auto;
		padding: 0.5rem;
	}
	.opacity {
		opacity: 0.5;
	}
}
.headline-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 2rem 2rem 2rem;
}
.card-wrap {
	display: flex;
	flex-wrap: wrap;
	// background-color: salmon;
	justify-content: center;
}
@media only screen and (max-width: 600px) {
	.headline-wrap {
		flex-direction: column;
		padding: 1rem;
	}
	.button-wrap{
		margin-top: 1rem
	}
}
</style>
