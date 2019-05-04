<template>
	<footer class="footer">
		<b-row>
			<b-col sm="4">
				<p>Moneyline is a trading name of Chestnut Financial Services Limited. We Offer a range of financial services including short term loans, Payday loans, Guarantor loans, Travel money, Pawn broking Services</p>
			</b-col>
			<b-col sm="4">
				<ul>
					<li>
						<b-link to="/about-us">About</b-link>
					</li>
					<li>
						<b-link to="/careers">Careers</b-link>
					</li>
					<li>
						<b-link to="/faqs">FAQ</b-link>
					</li>
				</ul>
			</b-col>
			<b-col sm="4">
				<div>
					<h3>Contact Us</h3>
					<p>We are here if you need us</p>
				</div>
				<div>
					<a href="tel:09078440000">09078440000</a>
					<a href="mailto:hello@moneyline.ng">hello@moneyline.ng</a>
				</div>
			</b-col>
		</b-row>
	</footer>
</template>
<script>
export default {
	name: "Footer"
};
</script>

<style scoped>
footer {
	padding: 3rem;
	background: rgb(239, 239, 239);
}
</style>

