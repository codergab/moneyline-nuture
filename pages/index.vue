<template>
	<div>
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
					<b-button
						to="/loan/get-started"
						class="btn-flex"
						style="margin-left: 60%; width: 50%; margin-top: 1.5em; position: absolute"
					>
						<span class="btn-text">APPLY NOW</span>
						<img class="btn-icon" src="/right-arrow.svg">
					</b-button>
				</b-link>
			</div>
		</div>
		<b-container class="intro">
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

		<b-container fluid style="padding: 3rem">
			<b-row>
				<b-col sm="4">
					<h2>LET US HELP CREATE THE FUTURE YOU DESIRE</h2>
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
						<h2 class="text-center text-black text-uppercase text-link">How does it work?</h2>
						<p
							class="text-left text-secondary"
						>Apply and get quick, hassle free access to your loan request in 48 hours by following these easy steps.</p>

						<b-row style="margin-top: 20px;">
							<b-col sm="4" style="margin-left: 40px;">
								<b-img src="/apply.png" alt="apply" width="75"/>
							</b-col>
							<b-col sm="8" style="margin-left: -60px;">
								<h5 class="font-weight-bold">APPLY</h5>
								<p>complete our online form and fill in primary details such as Name, Contact, etc.</p>
							</b-col>
						</b-row>
						<b-row style="margin-top: 20px;">
							<b-col sm="4" style="margin-left: 40px;">
								<b-img src="/apply.png" alt="apply" width="75"/>
							</b-col>
							<b-col sm="8" style="margin-left: -60px;">
								<h5 class="font-weight-bold">PROVIDE DOCUMENTS</h5>
								<p>Upload your Government ID, Proof of address and Bank Statement and other required documents</p>
							</b-col>
						</b-row>
						<b-row style="margin-top: 20px;">
							<b-col sm="4" style="margin-left: 40px;">
								<b-img src="/apply.png" alt="apply" width="75"/>
							</b-col>
							<b-col sm="8" style="margin-left: -60px;">
								<h5 class="font-weight-bold">GET YOUR MONEY</h5>
								<p>Receive money within 24 hours if approved.</p>
							</b-col>
						</b-row>

						<b-row style="margin-top: 20px;">
							<b-button
								to="/loan/get-started"
								class="btn-flex"
								style="margin-left: 30%; width: 60	%; margin-top: 1.5em; position: absolute"
							>
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

						<b-row>
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
						<b-row>
							<b-col sm="2">
								<b-img src="/why-choose1.png"/>
							</b-col>
							<b-col sm="10">
								<p>
									We deliver our loan services on time.
									We understand the urgency of delivering on time as situations out of our control require immediate supply of cash. That is why we always keep our word on timely loan delivery.
								</p>
							</b-col>
						</b-row>
						<b-row>
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
						<b-row class="text-center">
							<b-button
								to="/loan/get-started"
								class="btn-flex"
								style="margin-left: 20%;width: 45%;margin-top: 1.5em; position: absolute"
							>
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

export default {
	components: {
		Header,
		Footer,
		CallToAction
		// swiper,
		// swiperSlide
	},
	data() {
		return {
			// 	swiperOption: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 30,
			// 		freeMode: true,
			// 		pagination: {
			// 			el: ".swiper-pagination",
			// 			clickable: true
			// 		}
			// 	}
			// };
		};
	},
	computed: {
		// swiper() {
		// return this.$refs.mySwiper.swiper;
		// }
	},
	mounted() {}
};
</script>

<style scoped>
@import "~/assets/css/imagehover.css";

.slidee {
	background: #40a774 url("/home-banner.svg");
	background-repeat: no-repeat;
	background-size: cover;
	height: 90vh;
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
	/* font-family: "Mon", sans-serif; */
	position: absolute;
	/* top: 100%; */
	background: rgba(255, 255, 255, 0.89);
	padding: 3rem;
	max-width: 38%;
	margin-top: 15%;
	font-weight: 600;
}

.slidee-description h2 {
	font-weight: 700;
}

.intro {
	padding: 4em 0em;
}

.intro-text {
	max-width: 55%;
	margin: 0 auto;
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
	bottom: 170px;
	width: 70px;
	height: 5px;
	content: "";
	display: inline-block;
	margin-top: -50px;
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
</style>
