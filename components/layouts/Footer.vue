<template>
	<footer class="footer">
		<b-row>
			<b-col sm="4">
				<p>Moneyline is a trading name of Chestnut Financial Services Limited. We Offer a range of financial services including short term loans, Payday loans, Guarantor loans, Travel money, Pawn broking Services</p>
			</b-col>
			<b-col sm="4">
				<ul class="nav flex-column">
					<li>
						<b-link to="/about-us">About</b-link>
					</li>
					<li>
						<b-link to="/careers">Careers</b-link>
					</li>
					<li>
						<b-link to="/faq">FAQ</b-link>
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
		<b-row style="margin-top: 3em">
			<b-col sm="4">
				<img src="/logo.png">
			</b-col>
			<b-col sm="4">
				<p
					class="text-center align-middle"
					style="margin-top: 1em"
				>&copy; Moneyline. All Rights Reserved</p>
			</b-col>
			<b-col sm="4">
				<div class="effect egeon">
					<div class="buttons">
						<a href="#" class="fb" title="Join us on Facebook">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</a>
						<a href="#" class="tw" title="Join us on Twitter">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
						<a href="#" class="g-plus" title="Join us on Google+">
							<i class="fa fa-google-plus" aria-hidden="true"></i>
						</a>
						<a href="#" class="dribbble" title="Join us on Dribbble">
							<i class="fa fa-dribbble" aria-hidden="true"></i>
						</a>
						<a href="#" class="vimeo" title="Join us on Vimeo">
							<i class="fa fa-vimeo" aria-hidden="true"></i>
						</a>
						<a href="#" class="pinterest" title="Join us on Pinterest">
							<i class="fa fa-pinterest-p" aria-hidden="true"></i>
						</a>
						<a href="#" class="insta" title="Join us on Instagram">
							<i class="fa fa-instagram" aria-hidden="true"></i>
						</a>
						<a href="#" class="in" title="Join us on Linked In">
							<i class="fa fa-linkedin" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</b-col>
		</b-row>
		<!-- <b-row></b-row> -->
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

