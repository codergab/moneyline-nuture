<template>
	<div>
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
								<div class="contact-form">
									<b-form @submit.prevent="contactUs">
										<b-form-group id="input-group-2" label="Name:" label-for="name">
											<b-form-input 
											id="name" 
											name="name" 
											v-model="contact.name" 
											v-validate="'required'"
											></b-form-input>
											<span class="error">{{ errors.first('name') }}</span>
										</b-form-group>

										<b-form-group
											id="email-group"
											label="Email:"
											label-for="email">
											
											<b-form-input
											id="email"
											type="email"
											v-model="contact.email"
											v-validate="'required|email'"
											name="email"
											></b-form-input>
											<span class="error">{{ errors.first('email') }}</span>
										</b-form-group>

										<b-form-group
											id="company-description-group"
											label="Company Description:"
											label-for="company_description"
										>
											<b-form-textarea
												id="company_description"
												rows="3"
												style="resize:none"
												v-model="contact.company_description"
												v-validate="'required'"
												name="company description"
												></b-form-textarea>
												<span class="error">{{ errors.first('company description') }}</span>

										</b-form-group>
										<b-form-group
											id="message-group"
											label="Message:"
											label-for="message"
										>
											<b-form-textarea
												id="message"
												rows="6"
												style="resize:none"
												v-model="contact.message"
												name="message"
												v-validate="'required'"
												></b-form-textarea>
												<span class="error">{{ errors.first('message') }}</span>
										</b-form-group>
										<div class="text-center form-group">
											Two + 4 = <input 
											id="question" 
											v-model="contact.question" 
											class="form-input text-center" 
											placeholder="enter sum in digit" 
											type="text"
											v-validate="'required|numeric'"
											name="question"
											/>
											<div class="form-group">
												<span class="error">{{ errors.first('question') }}</span>
											</div>
										</div>
										<div class="text-center form-group">
											<b-button type="submit" variant="primary">SEND MESSAGE</b-button>
										</div>
										
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
							<div style="padding-top:20px">
								<h4>57A Oyikan Abayomi Drive</h4>
								<h5>Ikoyi, Lagos</h5>
								<p class="p-marging">MoneyLine is a trading name of Chestnut Financial Services Limited. We offer a
									range of financial services including short term loans,Payday loans, Guarantor
									loans, Travel money, Pawn broking Services
								</p>
								<p class="p-marging">
									Visit us online at www.moneyline.ng, email us at hello@moneyline.ng or call us on 0907 844 0000
								</p>
							</div>
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
import Footer from "@/components/layouts/Footer";
import CallToAction from "@/components/layouts/CallToAction";
// import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
	"name":"Contact",
	data(){
		return {
			contact:{
				name:null,
				email:null,
				company_description:null,
				message:null,
				question:null,
			}
		}
	},
	methods:{
		contactUs: function (e) {
			this.$validator.validate().then(valid => {
				if (valid) {
				alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contact))
				}
			})
    	}	
	},
	components: {
		Header,
		Footer,
		CallToAction
	},
};
</script>

<style scoped>
h4{
	font-weight: bold
}
h5{
	font-weight: 900;
}
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
.error{
	color: #bf0915;
	font-size: 14px
}
.contact-section{
	padding: 100px
}
.text-blue{
	color: #1E6B93
}
.p-marging{
	margin-top: 30px
}
.contact-form{
	padding:50px
}
.bold{
	font-weight: 600;
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

