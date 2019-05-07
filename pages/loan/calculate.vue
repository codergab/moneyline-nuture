<template>
	<div>
		<section class="apply-loan">
			<b-container fluid>
				<h2 class="text-center">Loan Calculator</h2>
				<div class="loan-calculator-wrapper">
					<h4 class="text-center" style="margin-top: 2rem">Choose Amount</h4>
					<div style="
						display: flex;
						justify-content: space-between
					">
						<span class="start">10,000</span>
						<span class="end">3,000,000</span>
					</div>
					<vue-slider
						v-model="selectedAmount"
						@change="calculateMonths"
						:min="amount.min"
						:max="amount.max"
						:contained="true"
						:tooltip="'focus'"
					></vue-slider>
					<hr class="short">
					<div class="month">
						<h4 class="text-center" style="margin-top: 2rem">Choose Term</h4>

						<vue-slider
							v-model="selectedNoOfMonths"
							:min="month.min"
							:max="month.max"
							:contained="true"
							:tooltip="'focus'"
							:marks="true"
							:processStyle="'height: 10px'"
						></vue-slider>
					</div>

					<div class="loan-result" style="margin-top: 5em">
						<span class="text-title">Loan</span>
						<span class="figure" style="padding-left: 0.5em">N{{ numberComma(selectedAmount) }}</span>
					</div>
					<div class="loan-result">
						<span class="text-title">Term</span>
						<span
							class="figure"
							style="padding-left: 0.5em"
						>{{ selectedNoOfMonths }} {{ selectedNoOfMonths > 1 ? ' Months' : 'Month' }}</span>
					</div>
					<div class="loan-result">
						<span class="text-title">Monthly Payent</span>
						<span class="figure" style="padding-left: 0.5em">N{{ numberComma(monthlyRepayment) }}</span>
					</div>

					<!-- Button -->
					<div class="text-center" style="margin-top: 2em">
						<b-button variant="primary" size="lg" style="width: 60%" @click="showModal=true">Continue</b-button>
						<p
							style="max-width: 70%; margin: 2rem auto"
						>The offer above is an estimate and should only serve as a guide. Your final offer will be determined by the product type and your financial profile.</p>
					</div>
				</div>
			</b-container>
		</section>
		<vue-modaltor
			:visible="showModal"
			@hide="() => showModal  = !showModal"
			:resize-width="{1200:'30%',992:'90%',768:'90%'}"
		>
			<template slot="close-icon">
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 40 40"
					width="20"
					height="20"
					xml:space="preserve"
				>
					<path
						class="st0"
						fill="#41b883"
						d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
					></path>
				</svg>
			</template>
			<h4 class="text-center">Complete Loan Application</h4>
			<hr class="short">
			<b-card-body>
				<div class="form-group">
					<label>Firstname</label>
					<input class="form-control" type="text" v-model="loan.first_name">
				</div>
				<div class="form-group">
					<label>Lastname</label>
					<input class="form-control" type="text" v-model="loan.last_name">
				</div>
				<div class="form-group">
					<label>Email Address</label>
					<input class="form-control" type="email" v-model="loan.email">
				</div>
				<div class="form-group">
					<label>Phone</label>
					<input class="form-control" type="email" v-model="loan.phone">
				</div>
				<div class="form-group">
					<label>Password</label>
					<input class="form-control" type="password" v-model="loan.password">
				</div>
				<div class="form-group">
					<label>Confirm Password</label>
					<input class="form-control" type="password" v-model="loan.password_confirmation">
				</div>
				<div class="form-group">
					<b-button variant="primary" block>Continue</b-button>
				</div>
			</b-card-body>
		</vue-modaltor>
	</div>
</template>


<script>
import VueSlider from "vue-slider-component";

export default {
	components: {
		VueSlider
	},
	// template: '#modal-templa'
	data() {
		return {
			showModal: false,
			loan: {
				first_name: null,
				last_name: null,
				email: null,
				phone: null,
				password: null,
				password_confirmation: null
			},
			amount: {
				min: 10000,
				max: 3000000
			},
			month: {
				min: 1,
				max: 3
			},
			// data: [10000, 3000000],
			selectedAmount: 10000,
			selectedNoOfMonths: 1,
			value2: 0,
			totalRepayment: 0,
			monthlyRepayment: 0
		};
	},
	computed: {
		calculateMonths() {
			this.monthlyRepayment =
				this.getCompoundInterest(this.selectedAmount) /
				this.selectedNoOfMonths;
			this.totalRepayment = this.getCompoundInterest(this.selectedAmount);
		}
	},
	methods: {
		numberComma(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		getCompoundInterest(value) {
			return (value += Math.round(value * 0.068, 1));
		},

		toggleModal() {
			this.$modal.show("complete-loan", {
				title: "Alert!",
				text: "You are too awesome",
				buttons: [
					{
						title: "Deal with it",
						handler: () => {
							alert("Woot!");
						}
					},
					{ title: "Close" }
				]
			});
		}
	}
};
</script>


<style>
@media screen and (min-width: 768px) {
	.loan-calculator-wrapper {
		max-width: 40% !important;
		padding: 2rem;
	}

	.apply-loan {
		padding: 3rem;
		margin: 3rem;
	}
	.modal-vue-panel.modal-fade {
		width: 30% !important;
	}
}

.apply-loan {
	padding: 1rem 0;
}
.loan-calculator-wrapper {
	background: #fff;
	margin: 3rem auto;
	padding: 1rem;
	max-width: 90%;
}

.vue-slider-dot {
	/* width: 50px !important; */
	/* height: 20px !important; */
	transform: translate(-50%, -50%);
	top: 50%;
	left: 57.5556%;
	transition: left 0.5s ease 0s;
}

.vue-slider-dot-handle {
	cursor: pointer;
	width: 100%;
	height: 100%;
	border-radius: 50% !important;
	border: 2px solid #fff;
	background-color: #1e6b93;
	box-sizing: border-box;
	box-shadow: 0.5px 0.5px 1px 3px #1e6b93 !important;
}
.vue-slider {
	padding: 7px;
	width: auto;
	height: 10px !important;
}

.vue-slider-process {
	background-color: #40a774;
	border-radius: 15px;
}

.loan-result {
	display: flex;
	justify-content: space-between;
	/* margin: 5rem 0; */
	background: #fff;
	padding: 1em;
}

/* .loan-result:nth-of-type(1) { */
/* margin-top: 3em; */
/* } */

.figure {
	color: #40a774;
	font-weight: 700;
}

.monthly-repayment,
.total-repayment {
	width: 50%;
	background: #fff;
	padding: 1rem;
	font-size: 16px;
}

.total-repayment {
	align-items: flex-end;
	align-content: flex-end;
	border-left: 1px solid rgb(216, 216, 216);
}

hr.short {
	border: 0;
	height: 1px;
	background-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 0),
		rgba(162, 162, 162, 0.75),
		rgba(0, 0, 0, 0)
	);
	margin-top: 2rem;
}
</style>

