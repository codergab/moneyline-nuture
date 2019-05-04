<template>
	<div>
		<Header/>
		<div>
			<b-jumbotron class="bg_artboard_1" style="height:550px">
					<p class="text-white jumbotron_content">We provide <span class="bold">smart loans</span><br>designed to put you at <br>ease</p>
			</b-jumbotron>
		</div>
		<apply-now></apply-now>
		<b-container class="bv-example-row">
			<b-row>
				<b-col>
					<b-card>
						<div>
						<b-form @submit="onSubmit">
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
				</b-col>
				<b-col>
					
				</b-col>
			</b-row>
		</b-container>
		<apply-now></apply-now>
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
		'apply-now' : CallToAction
	}
};
</script>

<style scoped>
	.bg_artboard_1{
		background-image:  url('/Artboard – 1.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.bold{
		font-weight: 600
	}
	.jumbotron_content{
		font-size: 22px
	}
</style>

