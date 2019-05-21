<template>
	<footer class="footer">
		<b-container fluid>
			<b-row class="footer-1">
				<b-col sm="4" lg="4" md="4">
					<p>Moneyline is a trading name of Chestnut Financial Services Limited. We Offer a range of financial services including short term loans, Payday loans, Guarantor loans, Travel money, Pawn broking Services</p>
				</b-col>
				<b-col sm="4" lg="4" class="text-center">
					<ul class="nav flex-column">
						<li class="footer-list-link">
							<b-link to="/about-us">About</b-link>
						</li>
						<li class="footer-list-link">
							<b-link to="/careers">Careers</b-link>
						</li>
						<li class="footer-list-link">
							<b-link to="/faq">FAQ</b-link>
						</li>
					</ul>
				</b-col>
				<b-col sm="6" lg="4">
					<div>
						<h3>Contact Us</h3>
						<p>We are here if you need us</p>
					</div>
					<div>
						<a class="footer-list-link" href="tel:09078440000">09078440000</a>
						<br>
						<a class="footer-list-link" href="mailto:hello@moneyline.ng">hello@moneyline.ng</a>
					</div>
				</b-col>
			</b-row>
			<b-row style="align-items: baseline" class="footer-2">
				<b-col sm="4">
					<img src="/logo.png" width="250">
				</b-col>
				<b-col sm="4">
					<p
						class="text-center align-middle font-weight-bold"
						style="margin-top: 1em"
					>&copy; Moneyline. All Rights Reserved</p>
				</b-col>
				<b-col sm="4">
					<div class="effect egeon">
						<div class="buttons">
							<a href="#" class="fb" title="Join us on Facebook">
								<i class="fa fa-facebook" aria-hidden="true"></i>
							</a>

							<a href="#" class="insta" title="Join us on Instagram">
								<i class="fa fa-instagram" aria-hidden="true"></i>
							</a>
							<a href="#" class="tw" title="Join us on Twitter">
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</b-col>
			</b-row>
			<!-- <b-row></b-row> -->
		</b-container>
	</footer>
</template>
<script>
export default {
	name: "Footer"
};
</script>

<style scoped>
@media screen and (max-width: 560px) {
	.footer {
		padding: 2rem 0;
	}
	.footer-1 {
		display: none;
	}

	.effect .buttons {
		margin-top: 0 !important;
	}

	.footer-2 {
		text-align: center;
	}
}

.footer-1,
.footer-2 {
	/* display:  */
}
footer {
	padding: 3rem;
	background: rgb(233, 233, 233);
}

.footer-list-link {
	padding: 0.5em;
}

.footer-list-link a,
a.footer-list-link {
	color: #666 !important;
	font-weight: 700;
}

.footer-list-link a:hover,
a.footer-list-link:hover {
	color: #40a774 !important;
}

/* .effect {
	width: 100%;
	padding: 50px 0px 70px 0px;
	background-color: #212121;
} */

/* .effect:nth-child(2) {
	margin-top: 50px;
} */
/* 
.effect:nth-child(2n + 1) {
	background-color: #fff;
} */

.effect:nth-child(2n + 1) h2 {
	color: #212121;
}

.effect .buttons {
	margin-top: 50px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.effect a:last-child {
	margin-right: 0px;
}

/*common link styles !!!YOU NEED THEM*/
.effect {
	/*display: flex; !!!uncomment this line !!!*/
}

.effect a {
	text-decoration: none !important;
	color: #fff;
	width: 40px;
	height: 40px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	border-radius: 10px;
	margin-right: 20px;
	font-size: 25px;
	overflow: hidden;
	position: relative;
}

.effect a i {
	position: relative;
	z-index: 3;
}

.effect a.fb {
	background-color: #3b5998;
}

.effect a.tw {
	background-color: #00aced;
}

.effect a.g-plus {
	background-color: #dd4b39;
}

.effect a.dribbble {
	background-color: #ea4c89;
}

.effect a.pinterest {
	background-color: #cb2027;
}

.effect a.insta {
	background-color: #bc2a8d;
}

.effect a.in {
	background-color: #007bb6;
}

.effect a.vimeo {
	background-color: #1ab7ea;
}

/* egeon effect */
.effect.egeon a {
	-webkit-transition: border-radius 0.2s linear 0.2s,
		-webkit-transform 0.2s linear 0s;
	transition: border-radius 0.2s linear 0.2s, -webkit-transform 0.2s linear 0s;
	transition: transform 0.2s linear 0s, border-radius 0.2s linear 0.2s;
	transition: transform 0.2s linear 0s, border-radius 0.2s linear 0.2s,
		-webkit-transform 0.2s linear 0s;
}

.effect.egeon a i {
	-webkit-transition: -webkit-transform 0.2s linear 0s;
	transition: -webkit-transform 0.2s linear 0s;
	transition: transform 0.2s linear 0s;
	transition: transform 0.2s linear 0s, -webkit-transform 0.2s linear 0s;
}

.effect.egeon a:hover {
	-webkit-transform: rotate(-90deg);
	transform: rotate(-90deg);
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	border-bottom-left-radius: 50%;
}

.effect.egeon a:hover i {
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}
</style>

