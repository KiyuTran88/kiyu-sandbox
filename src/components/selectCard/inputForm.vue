<template>
	<!-- <div>{{ customCard.name }}{{ customCard.phone }}{{ customCard.email }}</div> -->
	<div class="scrim-bg">
		<div class="card-wrap">
			<div class="content-wrap">
				<div class="icon-wrap">
					<span class="icon opacity" @click="closeDialog">
						<img src="../../assets/icon_close_dark.svg" />
					</span>
				</div>
				<h3>Join us</h3>
				<span>Hero name</span>
				<input v-model="customCard.name" type="text" />
				<span>Phone</span>
				<input v-model="customCard.phone" type="text" />
				<span>Email</span>
				<input v-model="customCard.email" type="text" />
				<div class="button-wrap">
					<button class="button" @click="submitData">Submit</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	inject: ["customCard", "logConsole", "submitData", "closeDialog"],
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;600;800&display=swap");

* {
	font-family: "Mulish", sans-serif;
	font-size: 0.95rem;
	letter-spacing: -0.01rem;
	color: #333;

	h2 {
		font-size: 2rem;
		padding: 0;
		margin: 0;
	}
	h3 {
		font-size: 1.5rem;
		padding: 0;
		margin: 0 0 2rem 0;
	}
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
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
	position: absolute;
	top: 0;
	width: 100vw;
	height: 100vh;
}
.card-wrap {
	align-content: center;
	.content-wrap {
		display: flex;
		flex-direction: column;
		background-color: rgb(255, 255, 255);
		border-radius: 0.75rem;
		padding: 2rem;
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
		.button-wrap {
			display: flex;
			margin-left: auto;

			.button {
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 600;
				background-color: rgb(70, 57, 255);
				color: white;
				padding: 1.25rem 2.25rem;
				margin: 1rem 0 2rem 0;
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
</style>
