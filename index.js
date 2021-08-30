const app = Vue.createApp({
	data() {
		return {
			computerScore: 0,
			playerScore: 0,
			resultColor: "green",
			messages: [],
		};
	},
	methods: {
		playResult(playerMove) {
			let msg;
			let result = 0;
			computerMove = Math.floor(Math.random() * 3);
			console.log(computerMove);
			if (playerMove == computerMove) {
				result = -1;
			} else if (playerMove == 0) {
				if (computerMove == 1) {
					this.computerScore += 1;
				} else {
					this.playerScore += 1;
					result = 1;
				}
			} else if (playerMove == 1) {
				if (computerMove == 2) {
					this.computerScore += 1;
				} else {
					this.playerScore += 1;
					result = 1;
				}
			} else {
				if (computerMove == 0) {
					this.computerScore += 1;
				} else {
					this.playerScore += 1;
					result = 1;
				}
			}
			msg = `Computer choose ${this.getNames(
				computerMove
			)}. You choose ${this.getNames(playerMove)}. `;
			if (result == 0) {
				msg += "You Lost";
				this.resultColor = "red";
			} else if (result == 1) {
				msg += "You Won";
				this.resultColor = "green";
			} else {
				msg += "Its a Draw";
			}
			this.messages = [...this.messages, msg];
		},

		reset() {
			this.computerScore = 0;
			this.playerScore = 0;
			this.messages = [];
		},

		getNames(value) {
			if (value == 0) return "ROCK";
			else if (value == 1) return "PAPER";
			else return "SCISSORS";
		},
	},
});

app.mount("#app");
