<template>
	<div>
		<div class="mobile-banner">
			<!-- <div class="payoff">
				We listen to your
				<br>
				<span class="highlight">financial</span> needs when no
				<br>one else does
			</div>-->
			<div class="slidee-description">
				<h2 class="text-primary">Quick and Accessible Financial Loan Support For All</h2>
				<b-link to="/loan/get-started">
					<b-button to="/loan/get-started" class="btn-flex">
						<span class="btn-text">APPLY NOW</span>
						<img class="btn-icon" src="/right-arrow.svg">
					</b-button>
				</b-link>
			</div>
		</div>

		<div class="slidee">
			<!-- <div class="payoff">
				We listen to your
				<br>
				<span class="highlight">financial</span> needs when no
				<br>one else does
			</div>-->
			<div class="slidee-description">
				<h2 class="text-primary">Quick and Accessible Financial Loan Support For All</h2>
				<b-link to="/loan/get-started">
					<b-button to="/loan/get-started" class="btn-flex" style>
						<span class="btn-text">APPLY NOW</span>
						<img class="btn-icon" src="/right-arrow.svg">
					</b-button>
				</b-link>
			</div>
		</div>
		<b-container class="intro" fluid>
			<h2
				class="text-secondary text-center intro-text text-link"
			>We provide loans to individuals, small businesses and organizations in Nigeria</h2>

			<b-row class="mt-5 text-center">
				<!-- <b-container> -->

				<b-col sm="4">
					<div class="feature-image">
						<figure class="imghvr-zoom-out-up">
							<!-- <img src="#"> -->
							<b-img alt="friendlier" width="300" src="/features/feature1.png" fluid></b-img>
							<figcaption>
								<b-button variant="outline-primary img-button">Apply Now</b-button>
							</figcaption>
							<a href="#"></a>
						</figure>
					</div>
					<h3 class="feature-title text-primary text-left">Simpler</h3>
					<div
						class="feature-content text-left"
					>The better the process, the more effective the business. Our platform process has been made easier simpler and easily accessible for you and your business. That way we are able to help you achieve your goal in a unique way.</div>
				</b-col>
				<b-col sm="4">
					<div class="feature-image">
						<figure class="imghvr-zoom-out-up">
							<!-- <img src="#"> -->
							<b-img alt="friendlier" width="300" src="/features/feature2.png" fluid></b-img>
							<figcaption>
								<b-button variant="outline-primary img-button">Apply Now</b-button>
							</figcaption>
							<a href="#"></a>
						</figure>
					</div>
					<h3 class="feature-title text-link text-left">Faster</h3>
					<div
						class="feature-content text-left"
					>Always think Moneyline. We provide quick and easily accessible loan services. We understand the need to deliver on our promise while remaining time conscious as you can readily access loan service of up to N3,000,000 in 48 hours.</div>
				</b-col>
				<b-col sm="4">
					<div class="feature-image">
						<figure class="imghvr-zoom-out-up">
							<!-- <img src="#"> -->
							<b-img alt="friendlier" width="300" src="/features/feature3.png" fluid></b-img>
							<figcaption>
								<b-button variant="outline-primary img-button">Apply Now</b-button>
							</figcaption>
							<a href="#"></a>
						</figure>
					</div>
					<h3 class="feature-title text-secondary text-left">Friendlier</h3>
					<div
						class="feature-content text-left"
					>We believe that business is all about building relationships, and the best way we foster our relationships is by genuinely showing compassion, interest and ultimately providing solution to your business and financial needs.</div>
				</b-col>

				<!-- </b-container> -->
			</b-row>
		</b-container>

		<b-container fluid style="padding: 3rem" class="sectioned">
			<b-row>
				<b-col sm="4">
					<h2 class="font-weight-bold">LET US HELP CREATE THE FUTURE YOU DESIRE</h2>
					<p class="text-left">
						Transforming your Dreams to reality can be very expensive. While you need an open mind, drive, motivation, and the desire to achieve it, if you don’t have enough money, you may find it difficult. At Moneyline, we are here to not just get you a step closer to your dreams deliver you at the final destination of financial freedom.
						Let us help you achieve your dreams.
					</p>
				</b-col>
				<b-col sm="8">
					<!-- <swiper :options="swiperOption">
						<swiper-slide>Slide 1</swiper-slide>
						<swiper-slide>Slide 2</swiper-slide>
						<swiper-slide>Slide 3</swiper-slide>
						<swiper-slide>Slide 4</swiper-slide>
						<swiper-slide>Slide 5</swiper-slide>
						<swiper-slide>Slide 6</swiper-slide>
						<swiper-slide>Slide 7</swiper-slide>
						<swiper-slide>Slide 8</swiper-slide>
						<swiper-slide>Slide 9</swiper-slide>
						<swiper-slide>Slide 10</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>-->
					<div class="lg-slick">
						<div class="preloan-holder"></div>
						<div class="loans-holder">
							<slick ref="slick" :options="slickOptions">
								<div>
									<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
										<div class="presentation">
											<div class="loan-icon">
												<img src="/Pay-Day-Loan.gif">
											</div>

											<div class="loan-title">
												<h5>PAYDAY LOANS</h5>
											</div>

											<div class="loan-arrow text-center">
												<img src="/right-arrow-green.svg" width="100">
											</div>
										</div>
										<div class="hover-presentation">
											<h6 class="font-weight-bold">PAYDAY LOANS</h6>
											<p style class="text-white">
												At Money line, we provide payday loans to help you deliver on urgent financial responsibilities that mostly occur at odd and unexpected times.
												Get started with us today and have your financial needs met in a short period of time
											</p>
										</div>
									</div>
								</div>
								<div>
									<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
										<div class="presentation">
											<div class="loan-icon">
												<img src="/Short-Term-Loan.gif">
											</div>

											<div class="loan-title">
												<h5>SHORT TERM LOANS</h5>
											</div>

											<div class="loan-arrow text-center">
												<img src="/right-arrow-green.svg" width="100">
											</div>
										</div>
										<div class="hover-presentation">
											<h6 class="font-weight-bold">SHORT TERM LOANS</h6>
											<p
												style
												class="text-white"
											>At MoneyLine, we provide quick loans to deal with pressing financial situations or help support personal or business capital needs. It is easy to acquire, with faster processing and lower interest rates.</p>
										</div>
									</div>
								</div>
								<div>
									<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
										<div class="presentation">
											<div class="loan-icon">
												<img src="/Guarantors-Loan.gif">
											</div>

											<div class="loan-title">
												<h5>GUARANTOR LOANS</h5>
											</div>

											<div class="loan-arrow text-center">
												<img src="/right-arrow-green.svg" width="100">
											</div>
										</div>
										<div class="hover-presentation">
											<h6 class="font-weight-bold">GUARANTOR LOANS</h6>
											<p style class="text-white">
												Are you are borrowing money for the first time or have a bad credit history? A guarantor loan could help you borrow what you need.
												We offer easily accessible guarantor loan with low interest rate.
											</p>
										</div>
									</div>
								</div>
								<div>
									<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
										<div class="presentation">
											<div class="loan-icon">
												<img src="/Pawn-Broking.gif">
											</div>

											<div class="loan-title">
												<h5>Pawn Broking Services</h5>
											</div>

											<div class="loan-arrow text-center">
												<img src="/right-arrow-green.svg" width="100">
											</div>
										</div>
										<div class="hover-presentation">
											<h6 class="font-weight-bold">Pawn Broking Services</h6>
											<p
												style="font-size: 14px !important;"
												class="text-white"
											>With our Pawn broking service, you can apply for loans with household goods or personal effects as security or collateral on the loans. It’s quick, with fewer credit checks and you can redeem your goods at any time.</p>
										</div>
									</div>
								</div>
								<div>
									<div
										class="loan-options"
										style="width: 90% !important; min-height: 305px;  margin: 0 auto"
									>
										<div class="presentation">
											<div class="loan-icon">
												<img src="/7.gif">
											</div>

											<div class="loan-title">
												<h5>TRAVEL MONEY</h5>
											</div>

											<div class="loan-arrow text-center">
												<img src="/right-arrow-green.svg" width="100">
											</div>
										</div>
										<div class="hover-presentation">
											<h6 class="font-weight-bold">TRAVEL MONEY</h6>
											<p
												style
												class="text-white"
											>With Money Line, we provide Travel loans as a useful option for when you want to pay for travel expenses but don’t have the funds available immediately. Our loan process has been simplified so you can concentrate on the things that truly matter.</p>
										</div>
									</div>
								</div>
							</slick>
						</div>
					</div>
					<div class="sm-slick">
						<div class="sm-slick-child">
							<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
								<div class="presentation">
									<div class="loan-icon">
										<img src="/Pay-Day-Loan.gif">
									</div>

									<div class="loan-title">
										<h5>PAYDAY LOANS</h5>
									</div>

									<div class="loan-arrow text-center">
										<img src="/right-arrow-green.svg" width="100">
									</div>
								</div>
								<div class="hover-presentation">
									<h6 class="font-weight-bold">PAYDAY LOANS</h6>
									<p style class="text-white">
										At Money line, we provide payday loans to help you deliver on urgent financial responsibilities that mostly occur at odd and unexpected times.
										Get started with us today and have your financial needs met in a short period of time
									</p>
								</div>
							</div>
						</div>
						<div class="sm-slick-child">
							<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
								<div class="presentation">
									<div class="loan-icon">
										<img src="/Short-Term-Loan.gif">
									</div>

									<div class="loan-title">
										<h5>SHORT TERM LOANS</h5>
									</div>

									<div class="loan-arrow text-center">
										<img src="/right-arrow-green.svg" width="100">
									</div>
								</div>
								<div class="hover-presentation">
									<h6 class="font-weight-bold">SHORT TERM LOANS</h6>
									<p
										style
										class="text-white"
									>At MoneyLine, we provide quick loans to deal with pressing financial situations or help support personal or business capital needs. It is easy to acquire, with faster processing and lower interest rates.</p>
								</div>
							</div>
						</div>
						<div class="sm-slick-child">
							<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
								<div class="presentation">
									<div class="loan-icon">
										<img src="/Guarantors-Loan.gif">
									</div>

									<div class="loan-title">
										<h5>GUARANTOR LOANS</h5>
									</div>

									<div class="loan-arrow text-center">
										<img src="/right-arrow-green.svg" width="100">
									</div>
								</div>
								<div class="hover-presentation">
									<h6 class="font-weight-bold">GUARANTOR LOANS</h6>
									<p style class="text-white">
										Are you are borrowing money for the first time or have a bad credit history? A guarantor loan could help you borrow what you need.
										We offer easily accessible guarantor loan with low interest rate.
									</p>
								</div>
							</div>
						</div>
						<div class="sm-slick-child">
							<div class="loan-options" style="width: 90% !important; height: 305px;  margin: 0 auto">
								<div class="presentation">
									<div class="loan-icon">
										<img src="/Pawn-Broking.gif">
									</div>

									<div class="loan-title">
										<h5>Pawn Broking Services</h5>
									</div>

									<div class="loan-arrow text-center">
										<img src="/right-arrow-green.svg" width="100">
									</div>
								</div>
								<div class="hover-presentation">
									<h6 class="font-weight-bold">Pawn Broking Services</h6>
									<p
										style="font-size: 14px !important;"
										class="text-white"
									>With our Pawn broking service, you can apply for loans with household goods or personal effects as security or collateral on the loans. It’s quick, with fewer credit checks and you can redeem your goods at any time.</p>
								</div>
							</div>
						</div>
						<div class="sm-slick-child">
							<div class="loan-options" style="width: 90% !important; min-height: 305px;  margin: 0 auto">
								<div class="presentation">
									<div class="loan-icon">
										<img src="/7.gif">
									</div>

									<div class="loan-title">
										<h5>TRAVEL MONEY</h5>
									</div>

									<div class="loan-arrow text-center">
										<img src="/right-arrow-green.svg" width="100">
									</div>
								</div>
								<div class="hover-presentation">
									<h6 class="font-weight-bold">TRAVEL MONEY</h6>
									<p
										style
										class="text-white"
									>With Money Line, we provide Travel loans as a useful option for when you want to pay for travel expenses but don’t have the funds available immediately. Our loan process has been simplified so you can concentrate on the things that truly matter.</p>
								</div>
							</div>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>

		<section class="how-it-works">
			<b-container fluid>
				<b-row>
					<b-col sm="7">
						<b-img src="/how-it-works.png" draggable="false" style="width: 90%;" alt="how_it_works"/>
					</b-col>
					<b-col sm="5">
						<h2 class="text-center text-black text-uppercase font-weight-bold text-link">How does it work?</h2>
						<p
							class="text-left text-secondary"
						>Apply and get quick, hassle free access to your loan request in 48 hours by following these easy steps.</p>

						<b-row style="margin-top: 20px;" class="how-it-works-rows">
							<b-col sm="4" class="how-it-works--child-left">
								<b-img src="/apply.png" alt="apply" width="75"/>
							</b-col>
							<b-col sm="8" class="hos-it-works--child-right">
								<h5 class="font-weight-bold">APPLY</h5>
								<p>complete our online form and fill in primary details such as Name, Contact, etc.</p>
							</b-col>
						</b-row>
						<b-row style="margin-top: 20px;" class="how-it-works-rows">
							<b-col sm="4" class="how-it-works--child-left">
								<b-img src="/provide_doc.png" alt="apply" width="75"/>
							</b-col>
							<b-col sm="8" class="hos-it-works--child-right">
								<h5 class="font-weight-bold">PROVIDE DOCUMENTS</h5>
								<p>Upload your Government ID, Proof of address and Bank Statement and other required documents</p>
							</b-col>
						</b-row>
						<b-row style="margin-top: 20px;" class="how-it-works-rows">
							<b-col sm="4" class="how-it-works--child-left">
								<b-img src="/get-money.png" alt="apply" width="75"/>
							</b-col>
							<b-col sm="8" class="hos-it-works--child-right">
								<h5 class="font-weight-bold">GET YOUR MONEY</h5>
								<p>Receive money within 24 hours if approved.</p>
							</b-col>
						</b-row>

						<b-row style="margin-top: 20px;">
							<b-button @click="showModalForm" class="btn-flex download-form">
								<span class="btn-text">DOWNLOAD FORM</span>
								<img class="btn-icon" src="/right-arrow.svg">
							</b-button>
						</b-row>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="why_choose_us" style="margin: 3rem 0">
			<b-container fluid>
				<b-row>
					<b-col sm="6">
						<h3 class="text-left text-uppercase text-link">Why Choose Us</h3>
						<p
							class="text-left"
						>We are continually working with our clients, to help build a strong reputation for their businesses and financial incapability by providing effective loan service to help prevent money problems. We handle everything from loan issues that require quick response to those with only technical solutions.</p>

						<b-row class="why_choose_us-rows">
							<b-col sm="2">
								<b-img src="/why-choose1.png"/>
							</b-col>
							<b-col sm="10">
								<p>
									We understand the reason behind your need for cash.
									We specialize in providing the best loan option possible for whatever cash emergency you may encounter.
								</p>
							</b-col>
						</b-row>
						<b-row class="why_choose_us-rows">
							<b-col sm="2">
								<b-img src="/why-choose2.png"/>
							</b-col>
							<b-col sm="10">
								<p>
									We deliver our loan services on time.
									We understand the urgency of delivering on time as situations out of our control require immediate supply of cash. That is why we always keep our word on timely loan delivery.
								</p>
							</b-col>
						</b-row>
						<b-row class="why_choose_us-rows">
							<b-col sm="2">
								<b-img src="/why-choose3.png"/>
							</b-col>
							<b-col sm="10">
								<p>
									We understand the reason behind your need for cash.
									We specialize in providing the best loan option possible for whatever cash emergency you may encounter.
								</p>
							</b-col>
						</b-row>
						<b-row class="text-center">
							<b-button to="/loan/get-started" class="btn-flex">
								<span class="btn-text">APPLY NOW</span>
								<img class="btn-icon" src="/right-arrow.svg">
							</b-button>
						</b-row>
					</b-col>

					<b-col col sm="6">
						<div class="why-choose-img">
							<b-img src="/why-choose-side.png"></b-img>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<CallToAction/>
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
			<h4 class="text-center">Download Loan Application Forms</h4>
			<hr class="short">
			<b-card-body>
				<b-row style="margin-bottom: 2rem">
					<b-col>
						<b-row align-content="center">
							<b-col md="6" align-self="center">
								<center>
									<img class="align-self-center" src="/checklist.svg" width="150">
									<br>
									<br>
									<a
										href="/Loan-App-form.pdf"
										download="MoneylineNG_Loan_Form.pdf"
										class="btn btn-primary"
									>Download Loan Form</a>
								</center>
							</b-col>
							<b-col md="6" align-self="center">
								<center>
									<img class="align-self-center" src="/evaluation.svg" width="150">
									<br>
									<br>
									<a
										href="/Guarantor-form.pdf"
										download="MoneylineNG_Loan_Guarantor_Form.pdf"
										class="btn btn-secondary"
									>Download Loan Guarantor Form</a>
								</center>
							</b-col>
							<!-- <b-col md="6">Hello</b-col> -->
						</b-row>
					</b-col>
				</b-row>
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
// require styles

// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import { swiper, swiperSlide } from "swiper";
// import "swiper/dist/css/swiper.css";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import CallToAction from "@/components/layouts/CallToAction";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";

export default {
	components: {
		Header,
		Footer,
		CallToAction,
		Slick
		// swiper,
		// swiperSlide
	},
	data() {
		return {
			showModal: false,
			slickOptions: {
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
				prevArrow: null,
				nextArrow: null
				// Any other options that can be got from plugin documentation
			}
		};
	},
	computed: {
		// swiper() {
		// return this.$refs.mySwiper.swiper;
		// }
	},
	mounted() {},
	methods: {
		next() {
			this.$refs.slick.next();
		},

		prev() {
			this.$refs.slick.prev();
		},

		reInit() {
			// Helpful if you have to deal with v-for to update dynamic lists
			this.$nextTick(() => {
				this.$refs.slick.reSlick();
			});
		},
		showModalForm() {
			this.showModal = true;
		}
	}
};
</script>

<style scoped>
@import "~/assets/css/imagehover.css";

.how.it-works--child-left {
	margin-left: 40px;
}
.how.it-works--child-right {
	margin-left: -60px;
}

.how-it-works .download-form {
	margin-left: 30% !important;
	width: 60% !important;
	/* margin-top: 1.5em; */
	position: absolute;
}

.slidee {
	background: #40a774 url("/new-home-banner.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	min-height: 600px;
	max-height: 100%;
}
.payoff {
	font-size: 2.15em;
	font-weight: 200;
	color: #fff;
	padding: 111px 0 145px 30px;
}
/* .slidee {
	position: relative;
	width: 100%;
} */
.slidee-description {
	position: absolute;
	background: rgba(255, 255, 255, 0.89) !important;
	padding: 2rem;
	/* padding-top: 2rem; */
	margin: 2em auto;
	width: 100%;
}

.mobile-banner {
	height: 250px;
	background: #40a774 url(/new-home-banner.jpg);
	background-repeat: no-repeat;
	background-size: auto;
	display: none !important;
}

.mobile-banner .slidee-description {
	position: absolute;
	background: rgba(255, 255, 255, 0.83);
	padding: 2rem;
	/* padding-top: 2rem; */
	margin: 0em auto;
	width: 100%;
	height: inherit;
}

.slidee {
	display: none;
}

@media screen and (min-width: 768px) {
	.slidee {
		display: block;
	}
	/* .slidee {
		max-height: 
	} */
	.slidee-description {
		padding: 3rem;
		width: 40%;
		margin-top: 15%;
		font-weight: 600;
		background: rgba(255, 255, 255, 0.89) !important;
	}

	.slidee-description .btn-flex {
		margin-left: 60% !important;
		width: 60% !important;
		margin-top: 1.5em !important;
		position: absolute !important;
	}
}

.slidee-description h2 {
	font-weight: 700;
}

.intro {
	padding: 4em 0em;
}

.intro-text {
	width: 100%;
	margin: 0 auto;
}

.sm-slick-child {
	margin: 1em 0;
}

@media screen and (min-width: 560px) {
	.intro-text {
		width: 55%;
	}
}

.sm-slick {
	display: none;
}

.why_choose_us button {
	position: absolute;
	margin: 2em;
	left: 7rem;
}
@media screen and (max-width: 560px) {
	.mobile-banner .slidee-description .btn-flex {
		position: relative !important;
		margin: 1em 0em !important;
		width: 100% !important;
		/* width: 100%  */
	}
	.why_choose_us {
		padding: 1em !important;
	}

	.why_choose_us-rows {
		text-align: center;
	}
	.why_choose_us .why-choose-img img {
		margin: 1em auto !important;
		display: none;
	}

	.why_choose_us button {
		margin-left: 20%;
		width: 70%;
		/* margin-top: 1.5em; */
		position: relative;
		margin: 0rem auto;
	}

	.mobile-banner {
		display: block !important;
	}
	.how-it-works {
		padding: 1rem !important;
	}

	.how.it-works--child-left {
		margin-left: 0;
	}
	.how.it-works--child-right {
		margin-top: 1em;
	}

	.how-it-works .download-form {
		margin-left: 0% !important;
		width: 100% !important;
		/* margin-top: 1.5em; */
		position: absolute;
	}

	.how-it-works-rows {
		text-align: center;
	}

	.lg-slick {
		display: none;
	}

	.sm-slick {
		display: block;
	}
	.intro-text {
		margin: 1em 0em -1em 0;
		font-size: 26px;
	}

	h3.feature-title::before {
		display: none !important;
		margin: 0 !important;
	}

	.sectioned {
		margin: 2rem 0;
	}
}

/* .feature-image {
	margin: 0 0 1em 0;
} */

.feature-image img {
	width: 100%;
}

.feature-title {
	text-transform: uppercase;
	font-family: sans-serif;
	font-weight: 700;
	margin: 1em 0 0 0;
}

.feature-content {
	margin-top: 2em;
}

h3.feature-title::before {
	position: absolute;
	background-color: #349f6b;
	bottom: 150px;
	width: 70px;
	height: 5px;
	content: "";
	display: inline-block;
	/* margin-top: -50px; */
}

.first {
	color: #40a774;
}
.second {
	color: #025786;
}

.how-it-works {
	padding: 3rem;
	background: #fafafa;
}

.why_choose_us {
	padding: 3rem;
}

.why_choose_us .why-choose-img img {
	width: 80%;
	margin: 0 auto 0 5rem;
}

.loans-holder {
	margin-top: -120px !important;
	width: 90%;
	margin: 0 auto;
}

.loan-options {
	cursor: pointer;
	position: relative;
	background: #fff;
	padding: 1em;
	width: 90%;
	border-radius: 5%;
	box-shadow: 1px 12px 6px 0px rgba(212, 205, 205, 0.21);
	transition: all 0.2s ease-in;
}

/* .loan-options .hover-presentation {
} */
.loan-options:hover .presentation {
	display: none;
}
.loan-options .hover-presentation {
	display: none;
	padding: 1em;
	color: #fff;
}
.loan-options .hover-presentation p {
	font-size: 14px !important;
}
.loan-options:hover .hover-presentation {
	display: block;
}
.loan-options:hover {
	background: #025786;
}

.loan-arrow {
	transition: all 0.3s ease-in;
}

.loan-options .loan-icon {
	width: 50%;
	margin: 0 auto;
}

.loan-options:hover .loan-icon {
	display: none;
}
.loan-options .loan-icon img {
	width: 100%;
}

.loan-options .loan-title h5 {
	font-weight: 700;
	text-align: center;
	margin: 2rem auto;
	text-transform: uppercase;
}

.loan-options .loan-arrow img {
	width: 40px;
	text-align: center;
	margin: 0 auto;
}

.loan-options:hover .loan-arrow {
	padding-left: 10px;
}

.preloan-holder {
	width: 90%;
	margin: 0 auto;
	background: #3a8753;
	height: 150px;
	position: relative;
	box-shadow: 0px 15px 13px 0px #cacaca94;
	/* border-radius: 5%; */
}
</style>
