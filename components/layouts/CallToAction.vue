<template>
	<div class="applynow text-center">
		Get a loan of up to
		<span class="orange">N3,000,000</span> with MoneyLine within 24 hours
		<br>
		<nuxt-link to="/terms" class="terms">*Terms and conditions apply</nuxt-link>
		<br>
		<nuxt-link class="btn c_btn-primary mt-2" to="/loan/calculate">
			APPLY NOW
			<i style="color: #2E9460;" class="fa fa-arrow-right"></i>
		</nuxt-link>
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
