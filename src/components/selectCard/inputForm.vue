<template>
	<!-- <div>{{ customCard.name }}{{ customCard.phone }}{{ customCard.email }}</div> -->
	<div class="scrim-bg">
		<div class="dialog-wrap">
			<div class="content-wrap">
				<div class="icon-wrap">
					<span class="icon opacity" @click="closeDialog">
						<img src="../../assets/icon_close_dark.svg" />
					</span>
				</div>
				<h3>Write a story</h3>
				<p class="author">We believe designers are thinkers as much as they are makers.</p>
				<br /><br />
				<span>Title</span>
				<input @keydown.esc="resetInput" v-model.trim="customCard.title" type="text" />
				<br />
				<span>Tell your story</span>
				<textarea @keydown.esc="resetInput" v-model="customCard.decription" type="text" />
				<span class="desciption">Describe your story within 60-100 characters.</span>
				<br />
				<span>Your name</span>
				<input @keydown.enter="checkDuplicate" @keydown.esc="resetInput" v-model.trim="customCard.name" type="text" />
				<span v-if="errorDuplicated.isActive === false" class="desciption">Your name will display in story</span>
				<span v-if="errorDuplicated.isActive === true" class="desciption errorMessage">{{ errorDuplicated.message }}</span>
				<div class="button-wrap">
					<button class="button" @click="submitData" :disabled="!isFormCompleted">Submit</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			errorDuplicated: { message: "Duplicated name, please choose another name.", isActive: false },
			errorEmail: { message: "Sorry, your email format is not correct.", isActive: false },
		}
	},
	methods: {
		resetInput() {
			this.customCard.name = "" // refresh text field
			this.customCard.advice = "" // refresh text field
			this.customCard.email = "" // refresh text field
		},
		checkDuplicate() {
			if (this.personList.some((person) => person.name.toLowerCase() === this.customCard.name.toLowerCase())) {
				this.errorDuplicated.isActive = true
				console.log("duplicated")
			} else {
				console.log("not duplicated")
			}
		},
		isEmailValid() {
			const regex = new RegExp("@" && ".com") // get it from w3school not really know what is "RegExp"
			if (regex.test(this.customCard.email) === true) {
				this.errorEmail.isActive = false
				console.log("Found @")
			} else {
				this.errorEmail.isActive = true
				console.log("Not Found @")
			}
		},
	},
	computed: {
		isFormCompleted() {
			if (this.customCard.name === "" || this.customCard.email === "") {
				return false
			} else return true
		},
	},
	props: {
		personList: Object,
	},
	inject: ["customCard", "logConsole", "submitData", "closeDialog", "dialogMessage"],
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");

* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;
	margin: 0;
	padding: 0 h2 {
		font-size: 2rem;
		padding: 0;
		margin: 0;
	}
	h3 {
		font-size: 1.5rem;
		padding: 0;
		margin: 0;
	}
}
textarea[type="text"],
select {
	width: 100%;
	height: 8rem;
	padding: 10px 18px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}
input[type="text"],
select {
	width: 100%;
	padding: 10px 18px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}
.scrim-bg {
	display: flex;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
}
.dialog-wrap {
	align-self: center;

	.content-wrap {
		display: flex;
		flex-direction: column;
		background-color: rgb(255, 255, 255);
		border-radius: 0.75rem;
		padding: 1.5rem;
		min-width: 22rem;
		max-width: 40rem;
		margin: 0.5rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		&:hover {
			cursor: pointer;
			// transform: scale(1.05,1.05);
			transform: translateY(-5px);
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
			filter: brightness(102%);
		}

		.title-wrap {
			display: flex;
			justify-content: space-between;
			font-weight: 800;
			margin-bottom: 1rem;
		}

		.desciption {
			font-size: 0.75rem;
			color: rgb(114, 114, 114);
		}
		.errorMessage {
			color: rgb(255, 0, 0);
		}
		.email-display {
			display: none;
			&:hover {
				display: block;
				background-color: gold;
			}
		}
		.button-wrap {
			display: flex;
			margin-left: auto;

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
}

.headline-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
}
.card-wrap {
	display: flex;
	flex-wrap: wrap;
	// background-color: salmon;
	justify-content: center;
}
@media only screen and (min-width: 768px) {
	.dialog-wrap {
		.content-wrap {
			min-width: 14rem;
			max-width: 40rem;
		}
	}
}
@media only screen and (min-width: 1024px) {
	.dialog-wrap {
		.content-wrap {
			min-width: 30rem;
			max-width: 40rem;
		}
	}
}
</style>
