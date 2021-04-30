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
				name: "",
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

	body {
		background-color: rgb(245, 245, 245);
		h2 {
			font-size: 2.5rem;
			color: rgb(255, 255, 255);
		}
		h3 {
			font-size: 1.25rem;
			color: rgb(21, 27, 63);
		}
		h4 {
			font-size: 1rem;
			color: rgb(255, 255, 255);
			font-weight: 400;
		}
	}
}

.headline-card-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 7rem 0.5rem 7rem;
}
.title-card-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 7rem;
}
.gradient-bg {
	background: #f12711; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #f15811, #f59d19); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #f15811, #ffc165); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	height: 8rem;
}

.card-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.content-wrap {
		display: flex;
		flex-direction: column;
		border-radius: 0.75rem;
		background-color: #fff;
		border: 0.1px solid #e8e8e8;
		padding: 2rem;
		width: 100%;
		height: 10rem;
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.5rem;
		transition: transform 0.1s;
		transition-timing-function: ease-in;
		cursor: pointer;

		.icon-wrap {
			display: flex;
			flex-direction: flex-end;
			display: none;
		}

		&:hover {
			transform: scale(1.02);
			transform: translateY(-5px);
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
			filter: brightness(102%);

			.icon-wrap {
				display: flex;
				position: relative;
				margin-left: auto;

				.close-icon {
					width: 0.75rem;
					height: 0.75rem;
					display: flex;
					padding: 0.5rem;
					border-radius: 1rem;
					position: absolute;
					background-color: #e2e2e2;
					margin-top: -2.5rem;
					margin-left: 0.75rem;
				}
				.opacity {
					opacity: 0.5;
				}
			}
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
	}
	.highlight-content {
		display: flex;
		flex-direction: column;
		border-radius: 0.75rem;
		background-color: #fff;
		border: 0.1px solid #ff5200;
		padding: 2rem;
		width: 100%;
		height: 10rem;
		min-width: 20rem;
		max-width: 32rem;
		margin: 0.5rem;
		transition: transform 0.1s;
		transition-timing-function: ease-in;
		cursor: pointer;
	}
}

.button-wrap {
	display: flex;

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		font-weight: 600;
		font-size: 1rem;
		background-color: #ff5200;
		color: white;
		padding: 1rem 2rem;
		margin: 0rem 0rem 0rem 0.5rem;
		border: none;
		border-radius: 2rem;
		width: fit-content;
		font-size: 1rem;
		outline: none;
		cursor: pointer;
		transition: transform 0.1s;
		transition-timing-function: ease-in;
		&:hover {
			transform: scale(1.02);
			filter: brightness(130%);
			outline: none;
		}
	}
	.chip {
		background-color: #fff;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
		margin: 0.25rem;
		border-radius: 1rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #757575;
		border: 0.1px solid #e8e8e8;
		cursor: pointer;
		transition: transform 0.1s;
		transition-timing-function: ease-in;
		&:hover {
			color: #0059ff;
			transform: scale(1.02);
			outline: none;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
	}
}

.icon-wrap {
	display: flex;
	flex-direction: flex-end;

	.icon {
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

.author {
	font-size: 0.75rem;
	color: #949aa3;
	line-height: 1.5rem;
}
.text-link {
	font-size: 0.85rem;
	color: #0059ff;
}
.content {
	font-size: 0.75rem;
	color: rgb(92, 90, 107);
	line-height: 1.5rem;
}

.listing-end {
	color: #0069d6;
	font-weight: 800;
	font-size: 0.75rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		filter: brightness(130%);
	}
}

@media only screen and (max-width: 768px) {
	* body h2 {
		font-size: 2rem;
		color: white;
		text-align: center;
	}
	.headline-card-wrap {
		flex-direction: column;
		padding: 2rem 1rem 0.5rem 1rem;
		.title-wrap {
			text-align: center;
		}
	}
	.title-card-wrap {
		padding: 2rem;
		flex-direction: column;
	}
	.button-card-wrap {
		margin-top: 1rem;
	}
	.listing-end {
		margin-top: 1rem;
	}
	.card-wrap {
		.content-wrap {
			min-width: 14rem;
			height: 12rem;
		}
	}
}
@media only screen and (min-width: 768px) {
	.card-wrap {
		.content-wrap {
			min-width: 14rem;
			max-width: 40rem;
		}
	}
}
@media only screen and (min-width: 1024px) and (max-width: 1440px) {
	.card-wrap {
		.content-wrap {
			min-width: 18rem;
			max-width: 32rem;
		}
	}
}
@media only screen and (min-width: 1440px) {
	.card-wrap {
		.content-wrap {
			min-width: 14rem;
			max-width: 32rem;
		}
	}
}
</style>
