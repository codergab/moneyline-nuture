<template>
	<div>
		<section class="apply-loan">
			<b-container fluid>
				<div class="text-center">
					<img src="/logo.png" width="100">
				</div>
				<h2 class="text-center">Loan Calculator</h2>
				<div class="loan-calculator-wrapper">
					<div style="margin: 2rem 0; display: flex; justify-content: space-between">
						<span class="text-cemter font-weight-bold" style="width: 40%">Choose Amount</span>
						<span style="width: 50%">
							<input class="form-minimal" v-model="selectedAmount" @keypress="isNumber">
						</span>
					</div>
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
						:interval="500"
						:min="amount.min"
						:max="amount.max"
						:contained="true"
						:tooltip="'focus'"
					></vue-slider>

					<hr class="short">
					<div class="month">
						<h4 class="text-center font-weight-bold" style="margin-top: 2rem">Choose Term</h4>

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

					<div class="loan-result" style="margin-top: 5em; border-bottom: 1px solid #ccc">
						<span class="text-title">Loan</span>
						<span class="figure" style="padding-left: 0.5em">N{{ formatFigure(selectedAmount) }}</span>
					</div>
					<div class="loan-result" style=" border-bottom: 1px solid #ccc">
						<span class="text-title">Term</span>
						<span
							class="figure"
							style="padding-left: 0.5em"
						>{{ selectedNoOfMonths }} {{ selectedNoOfMonths > 1 ? ' Months' : 'Month' }}</span>
					</div>
					<div class="loan-result" style=" border-bottom: 1px solid #ccc">
						<span class="text-title font-weight-bold">Monthly Payment</span>
						<span class="figure" style="padding-left: 0.5em">N{{ formatMonthlyPayment(monthlyRepayment) }}</span>
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
			<h4 class="text-center">Create a Profile</h4>
			<hr class="short">
			<div v-if="responseErrors.length > 0" class="alert alert-danger">
				<ul>
					<li v-for="(respErr, index) in responseErrors" :key="index">{{ respErr }}</li>
				</ul>
			</div>
			<b-card-body>
				<div class="form-group">
					<b-row>
						<b-col sm="6">
							<label>Firstname</label>
							<input
								class="form-control"
								name="firstname"
								type="text"
								v-model="loan.first_name"
								:class="{'is-invalid': errors.has('firstname')}"
								v-validate="'required'"
							>
						</b-col>
						<b-col sm="6">
							<label>Lastname</label>
							<input
								class="form-control"
								name="lastname"
								type="text"
								v-model="loan.last_name"
								:class="{'is-invalid': errors.has('lastname')}"
								v-validate="'required'"
							>
						</b-col>
					</b-row>
				</div>
				<div class="form-group"></div>
				<div class="form-group">
					<label>Email Address</label>
					<input
						class="form-control"
						name="email"
						type="email"
						v-model="loan.email"
						:class="{'is-invalid': errors.has('email')}"
						v-validate="'required|email'"
					>
					<span v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</span>
				</div>

				<div class="form-group">
					<label>Phone</label>
					<input
						class="form-control"
						type="tel"
						maxlength="13"
						v-model="loan.phone"
						name="phone"
						:class="{'is-invalid': errors.has('phone')}"
						v-validate="'required|numeric|min:11|max:11'"
					>
					<span v-show="errors.has('phone')" class="help text-danger">{{ errors.first('phone') }}</span>
				</div>
				<div class="form-group">
					<b-row>
						<b-col sm="6">
							<label>Password</label>
							<input
								class="form-control"
								name="password"
								type="password"
								v-model="loan.password"
								:class="{'is-invalid': errors.has('password')}"
								v-validate="'required'"
								ref="password"
							>
							<span v-show="errors.has('password')" class="help text-danger">{{ errors.first('password') }}</span>
						</b-col>
						<b-col sm="6">
							<label>Confirm Password</label>
							<input
								name="password_confirmation"
								class="form-control"
								type="password"
								v-model="loan.password_confirmation"
								:class="{'is-invalid': errors.has('password_confirmation')}"
								v-validate="'required|confirmed:password'"
							>
							<span
								v-show="errors.has('password_confirmation')"
								class="help text-danger"
							>{{ errors.first('password_confirmation') }}</span>
						</b-col>
					</b-row>
				</div>

				<div class="form-group">
					<b-button
						v-if="!loading"
						:disabled="loading"
						variant="primary"
						block
						@click.prevent="sumbitLoan()"
					>Continue</b-button>
					<div v-if="loading" class="text-center">
						<i class="fa fa-spin fa-spinner fa-2x" style="color: #2A6F4D"></i>
					</div>
					<!-- <button-spinner :is-loading="isLoading" :disabled="isLoading" :status="status">
						<span>Submit</span>
					</button-spinner>-->
				</div>

				<b-form-group>
					<div class="text-center" style="margin-top: 1em">
						<img src="/logo.png" width="100">
					</div>
				</b-form-group>
			</b-card-body>
		</vue-modaltor>
	</div>
</template>


<script>
import VueSlider from "vue-slider-component";
import ADD_NEW_USER from "../../utils/api-routes";
export default {
	components: {
		VueSlider
	},
	// template: '#modal-templa'
	data() {
		return {
			step: 500,
			showModal: false,
			loading: false,
			isLoading: false,
			status: "",
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
			monthlyRepayment: 0,
			responseErrors: []
		};
	},
	computed: {
		calculateMonths() {
			this.monthlyRepayment =
				this.getCompoundInterest(parseInt(this.selectedAmount, 10)) /
				this.selectedNoOfMonths;
			this.totalRepayment = this.getCompoundInterest(parseInt(this.selectedAmount, 10));
		},
		computedAmount() {
			return this.formatFigure(this.selectedAmount);
		}
	},
	methods: {
		// update() {
		// 	var tempVal = this.$el.value + '';
		// 	this.Number(tempVal.replace(/[^0-9\.]+/g,"")
		// },
		isNumber: function(evt) {
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
				evt.preventDefault();;
			} else {
				return true;
			}
		},
		numberComma(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		getCompoundInterest(value) {
			return (value += Math.round(value * 0.068, 1));
		},

		roundInThousands(value) {
			return Math.round( parseInt(value, 10) / 1000) * 1000;
		},

		formatMonthlyPayment(number) {
			if(isNaN(number))
				return 0;
			return this.numberComma(number);
		},
		formatFigure(number) {
			if(isNaN(number) || number == '')
				return 0;
			return this.numberComma(this.roundInThousands(number));
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
		},
		sumbitLoan() {
			this.$validator.validate().then(valid => {
				if (valid) {
					// alert("Contact message sent successful");
					this.loading = true;
					this.$axios
						.post("register", this.loan)
						.then(response => {
							let { status } = response.data;
							this.showModal = false;
							if (status) {
								this.$router.push("/account/verify");
							}
						})
						.catch(err => {
							this.loading = false;
							const { error } = err.response.data;
							if (error.length > 0) {
								error.forEach(err => {
									this.responseErrors.push(err);
								});
							}
							// for (const err of error) {
							// }
						});
					// this.$store.dispatch("auth/createUser", this.loan);
					// console.log({ ...this.loan });
				} else {
				}
			});
		}
	}
};
</script>


<style>
.form-minimal {
	border: 2px solid #40a774;
	/* padding: 0.5em; */
	font-size: 20px;
	padding-left: 0.5em;
}
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

.form-minimal {
}
</style>

