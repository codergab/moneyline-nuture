<template>
	<div class="applynow text-center">
		Get a loan of up to
		<span class="orange">N10,000,000</span> with MoneyLine within 48 hours
		<br>
		<nuxt-link to="/terms" class="terms">*Terms and conditions apply</nuxt-link>
		<br>
		<nuxt-link class="btn c_btn-primary mt-2" to="/loan/calculate">APPLY NOW <i style="color: #2E9460;" class="fa fa-arrow-right"></i></nuxt-link>
	</div>
</template>

<script>
export default {
	name: "CallToAction"
};
</script>


<style scoped>
.c_btn-primary {
    background: #fff;
    color: #013959;
    font-weight: 300;
    border-left: 10px solid #2E9460;
    transition: all .5s ease-in-out;
}

.c_btn-primary i {
    transition: all .5s ease;
}
.c_btn-primary:hover i{
    margin-left: 20px;
}
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
