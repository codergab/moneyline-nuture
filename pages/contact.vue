<template>
	<div>
		<Header/>
		<div class="row">
            <div class="col-md-12">
                <div class="slidee">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="payoff">
                               We provide <span class="bold">smart loans</span><br>designed to put you at <br>ease
                            </div>
                        </div>
                    </div>
                </div>
                <CallToAction/>
				<section class="contact-section">
					<div class="row">
						
							<div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
								<b-card>
										<div>
										<b-form>
											<b-form-group id="input-group-2" label="Name:" label-for="name">
												<b-form-input id="name" required ></b-form-input>
											</b-form-group>
											<b-form-group
												id="email-group"
												label="Email:"
												label-for="email"
											>
												<b-form-input
												id="email"
												type="email"
												required
												></b-form-input>
											</b-form-group>
											<b-form-group
												id="company-description-group"
												label="Company Description:"
												label-for="company_description"
											>
												<b-form-textarea
													id="company_description"
													rows="3"
													></b-form-textarea>

											</b-form-group>
											<b-form-group
												id="message-group"
												label="Message:"
												label-for="message"
											>
												<b-form-textarea
													id="message"
													rows="6"
													></b-form-textarea>

											</b-form-group>
										<b-button type="submit" variant="primary">SEND MESSAGE</b-button>
										</b-form>
									</div>
								</b-card>
							</div>
							<div class="col-md-1 col-lg-1 text-blue"></div>
							<div class="col-md-4 col-sm-12 col-xs-12 col-lg-4 text-blue">
								<div class="mapouter">
									<div class="gmap_canvas">
										<iframe width="480" 
										height="302" 
										id="gmap_canvas" 
										src="https://maps.google.com/maps?q=57A%20Oyikan%20Abayomi%20Drive%20Ikoyi%2C%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed" 
										frameborder="0" 
										scrolling="no" 
										marginheight="0"
										marginwidth="0"></iframe>
										<a href="https://www.emojilib.com"></a>
									</div>
								</div>
							
								<h2>57A Oyikan Abayomi Drive</h2>
								<h3>Ikoyi, Lagos</h3>
								<p class="p-marging">MoneyLine is a trading name of Chestnut Financial Services Limited. We offer a
									range of financial services including short term loans,Payday loans, Guarantor
									loans, Travel money, Pawn broking Services
								</p>
								<p class="p-marging">
									Visit us online at www.moneyline.ng, email us at hello@moneyline.ng or call us on 0907 844 0000
								</p>
							</div>
					</div>
				</section>
				<CallToAction/>
            </div>
        </div>
	</div>
</template>
<script>
import Header from "@/components/layouts/Header";
import CallToAction from "@/components/layouts/CallToAction";
export default {
	"name":"Contact",
	data(){
		return {
			
		}
	},
	components: {
		Header,
		CallToAction
	}
};
</script>

<style scoped>
.mapouter{
	position:relative;
	text-align:right;
	height:302px;
	width:480px;
}
.gmap_canvas {
	overflow:hidden;
	background:none!important;
	height:290px;
	width:426px;
	}
.contact-section{
	padding: 100px
}
.text-blue{
	color: #1E6B93
}
.p-marging{
	margin-top: 60px
}
 .slidee {
        background-image: url('/Artboard_1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .payoff {
        font-size: 2.15em;
        font-weight: 200;
        color: #fff;
        padding: 111px 0 145px 30px;
    }
    .highlight {
        font-weight: bold;
    }
	
	
</style>

