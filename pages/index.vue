<template>
	<div>
		<Header/>
		<div class="slider">
			<div class="slidee">
				<img src="/home-slide1.png" style="width: 100%; height: 90vh;  background-size: cover;">
			</div>
			<div class="slidee-description">
				<h2 class="text-primary">Quick and Accessible Financial Loan Support For All</h2>
				<b-button
					class="custom"
					variant="primary"
					style="margin-left: 75%;
      width: 150px;
      /* padding: 0.8em 1em; */
      margin-top: 2%;
      position: absolute;"
				>Apply Now</b-button>
			</div>
		</div>

		<b-container class="intro">
			<h2
				class="text-secondary text-center intro-text"
			>We provide loans to individuals, small businesses and organizations in Nigeria</h2>

			<b-row>
				<!-- <b-container> -->
				<b-col>1 of 2</b-col>
				<b-col>2 of 2</b-col>
				<b-col>2 of 2</b-col>
				<!-- </b-container> -->
			</b-row>
		</b-container>
	</div>
</template>
<script>
import Header from "@/components/layouts/Header";
export default {
	components: {
		Header
	}
};
</script>

<style scoped>
.slidee {
	position: relative;
	width: 100%;
}
.slidee-description {
	font-family: "Palanquin", sans-serif;
	position: absolute;
	top: 100%;
	background: rgba(255, 255, 255, 0.89);
	padding: 2rem;
	max-width: 38%;
	margin-top: -30%;
	font-weight: 700;
}

.intro {
	padding: 4em 0em;
}

.intro-text {
	max-width: 50%;
	margin: 0 auto;
}
</style>
