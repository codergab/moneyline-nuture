<template>
	<div class="applynow text-center">
		Get a loan of up to
		<span class="orange">N3,000,000</span> with MoneyLine within 24 hours
		<br>
		<nuxt-link to="/terms" class="terms">*Terms and conditions apply</nuxt-link>
		<br>
		<b-button
			to="/loan/get-started"
			class="btn-flex variant-white"
			variant="primary"
			style="width: 18%; margin: 1em auto 0 auto"
		>
			<span class="btn-text">APPLY NOW</span>
			<img class="btn-icon" src="/right-arrow-green.svg">
		</b-button>
	</div>
</template>

<script>
export default {
	name: "CallToAction"
};
</script>


<style scoped>
.orange {
	color: orange;
}
.terms {
	font-size: 1rem;
	color: #fff;
}
.terms:hover {
	text-decoration: underline;
}
.applynow {
	background: #013a59;
	color: #fff;
	padding: 3rem;
	font-size: 1.5rem;
}
</style>
