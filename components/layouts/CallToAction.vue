<template>
	<div class="applynow text-center">
		Get a loan of up to
		<span class="orange">N10,000,000</span> with MoneyLine within 48 hours
		<br>
		<a href="#" class="terms">
			<span>*Terms and conditions apply</span>
		</a>
		<br>
		<b-link to="/loan/get-started" class="btn btn-primary mt-2">APPLY NOW</b-link>
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
	font-size: 9px;
	color: #fff;
}
.terms:hover {
	text-decoration: underline;
}
.applynow {
	background: #013a59;
	color: #fff;
	padding: 3rem;
}
</style>
