<template>
	<div class="title-card-wrap gradient-bg">
		<div class="title-wrap">
			<h2>UX Community</h2>
			<h4>A place to seek and share UX advices.</h4>
		</div>
		<div class="button-wrap">
			<button class="button" @click="toggleSignup">Become a member</button>
		</div>
	</div>
	<div class="headline-card-wrap">
		<div class="title-wrap">
			<h3>Top UX stories</h3>
			<p class="author">We believe designers are thinkers as much as they are makers.</p>
		</div>
		<div class="button-wrap">
			<button class="chip" @click="toggleCard">Write a story</button>
			<button class="chip" @click="sortCard">Sorting by name</button>
			<!-- <button class="chip" @click="addPerson">Sample Card</button> -->
		</div>
	</div>
	<div class="card-wrap">
		<name-card
			:class="person.name === 'Kiyu' ? 'highlight-content' : 'content-wrap'"
			v-for="person in personList"
			:key="person"
			@findIndex="removeCard"
			:person="person"
		></name-card>
	</div>
	<!-------- Base Dialog -------->

	<!-- <base-dialog theme="card-wrap" v-if="isDialogDisplay === true">
		<template #dialogContent>
			<div>{{ dialogContent }}</div>
		</template>
		<template #cta>
			<div>{{ cta }}</div>
		</template>
	</base-dialog> -->

	<!-------- Footer -------->
	<br /><br />
	<div class="title-card-wrap gradient-bg">
		<div class="title-wrap">
			<h2>🎖 188K followers</h2>
			<h4>Connect with UX Community.</h4>
		</div>
		<div class="button-wrap">
			<button class="button" @click="toggleCard">Write your first story</button>
		</div>
	</div>
	<!-------- Input form -------->
	<input-form v-if="cardDisplay === true" :personList="personList"></input-form>
	<!-------- Sign up form -------->
	<signup-form v-if="signUpDisplay === true" :personList="personList"></signup-form>
</template>
<script>
// import baseDialog from "../components/selectCard/baseDialog"
export default {
	data() {
		return {
			// isDialogDisplay: false,
			// cta: "yes",
			// dialogContent: "Are you sure?",
			message: "Please input hero name",
			cardDisplay: false,
			signUpDisplay: false,
			newHero: { name: "Kiyu", title: "Think about me, then i may call you", decription: "Dont you think heroes use decription?", isShow: true },
			newMember: {
				name: "new member kiyu",
				title: "",
				decription: "",
				isShow: true,
			},
			customCard: {
				name: "",
				title: "",
				decription: "",
				isShow: true,
			},
			personList: [
				{
					name: "Anthony",
					title: "Bringing product thinking to any team",
					decription:
						"Imagine this scenario. A team member approaches you excitedly and says, “I have an idea for a new feature we have to build! You would click here and here, then be able to do this, and it would work like this! Sh$t.",
					isShow: true,
				},
				{
					name: "Kleine",
					title: "What design research can learn from Socrates’ sneakers",
					decription:
						"So Greek philosophy isn’t the first subject that comes to mind when I talk about design research. But this might be one of those puzzle pieces that only falls into place after a few years.",
					isShow: true,
				},
				{
					name: "Mick",
					title: "A simple static visualization can often be the best approach",
					decription:
						"As a part of the process of learning Tableau, I’ve been exposed to a wealth of interactivity options. From dashboards to stories, I’ve been exposed to the world of dynamic visualization.",
					isShow: true,
				},
				{
					name: "Kiyu",
					title: "From designed-for-women to design-by-women",
					decription:
						"Design has evolved from a pragmatic methodology towards a strategic influence over the past decades; designers have engaged in complex...",
					isShow: true,
				},
				{
					name: "Michelle",
					title: "Ten genius ways Disney’s customer experience keeps the magic alive",
					decription:
						"Magic Kingdom in Disney World is known as “the most magical place on earth.” Visitors go there to disappear from reality and live in a fairy tale.",
					isShow: true,
				},
				{
					name: "Jarvey",
					title: "The art of visualising music: A brief history of graphic notation",
					decription:
						"Design and music intersect in many areas; fashion, art, filmmaking and set design, yet one relatively obscure but staggeringly creative area is in the design of graphic notation used by composers.",
					isShow: true,
				},
				{
					name: "Wanwan Tran",
					title: "Designing honesty",
					decription:
						"Rams is known for his “less is better” approach and industrial design works with Braun and Vitsoe. Most famously, this approach would go on to influence Jonathan Ive and the Apple production team’s concepts",
					isShow: true,
				},
				{
					name: "Jimmy Pena",
					title: "What can researchers learn from con artists?",
					decription:
						"Good con artists identify and study their victims, learning who they are, what motivates them, and what they want. Con artists need to build an emotional.",
					isShow: true,
				},
			],
		}
	},
	methods: {
		removeCard(person) {
			let array = this.personList
			let missingIndex = array.findIndex((people) => people.name == person) // get index from array components
			if (this.personList[missingIndex].name === "Kiyu") {
				this.isDialogDisplay = true
				console.log(this.isDialogDisplay)
			} else {
				array.splice(missingIndex, 1)
				console.log(missingIndex)
			}
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
				title: this.customCard.title,
				decription: this.customCard.decription,
				isShow: this.customCard.isShow,
				// temporary declaration
			}
			if (this.personList.some((person) => person.name === this.customCard.name)) {
				//finding an object with key
				alert(`Please type new name. Can't add duplicated ${this.customCard.name}`)
				console.log("Duplicated")
			} else {
				this.personList.unshift(newItem)
				console.log(`Added ${this.customCard.name} to Hero list!`)
			}
			this.customCard.name = "" // refresh text field
			this.customCard.title = "" // refresh text field
			this.customCard.decription = "" // refresh text field
			this.cardDisplay = !this.cardDisplay
		},
		toggleCard() {
			this.cardDisplay = !this.cardDisplay
			this.customCard.name = "" // refresh text field
			this.customCard.title = "" // refresh text field
			this.customCard.decription = "" // refresh text field
		},
		toggleSignup() {
			this.signUpDisplay = !this.signUpDisplay
			this.customCard.name = "" // refresh text field
		},
	},
	components: {
		"name-card": require("../components/selectCard/nameCard.vue").default,
		"input-form": require("../components/selectCard/inputForm").default,
		"signup-form": require("../components/selectCard/signUp").default,
		// "base-dialog": baseDialog,
	},
	provide() {
		return {
			customCard: this.customCard, // ***** should be same name
			logConsole: this.logItem,
			submitData: this.submitCard,
			closeDialog: this.toggleCard,
			toggleSignup: this.toggleSignup,
			dialogMessage: this.message,
			newMember: this.newMember
		}
	},
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");

</style>
