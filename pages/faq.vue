<template>
	<div class="content">
		<div class>
			<div class="slidee">
				<div class="payoff">
					<span class="highlight">Got questions?</span>
					<br>let us provide your
					<br>answers
				</div>
			</div>
			<CallToAction/>
		</div>
		<div style="background: #fafafa;" class="pt-5">
			<div class="container faq_content">
				<div class="row">
					<div class="col-md-9 mb-5 mx-auto">
						<div class="row">
							<div class="col-md-12 faq">
								<b-tabs pills card vertical>
									<template v-for="(item, i) in faqs">
										<b-tab :title="item.title" :key="i">
											<b-card-text>
												<div role="tablist">
													<template>
														<div v-for="(item, j) in item.body" :key="j">
															<b-card no-body class="mb-1 accord">
																<b-link block v-b-toggle="'a'+i+j" variant="info">
																	{{ item.title }}
																	<span class="pull-right" style="font-size:10px;">
																		<i class="fa fa-chevron-down"></i>
																	</span>
																</b-link>
																<b-collapse :id="'a'+i+j" accordion="my-accordion" role="tabpanel">
																	<b-card-text class="mt-3" v-html="item.content"></b-card-text>
																</b-collapse>
															</b-card>
														</div>
													</template>
												</div>
											</b-card-text>
										</b-tab>
									</template>
								</b-tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<CallToAction/>
	</div>
</template>
<style>
.faq .nav-pills .nav-link.active {
    border-radius: 0px !important;
    color: #fff !important;
    background-color: #329f69 !important;
}
.faq_content .content {
	color: rgb(123, 121, 121) !important;
}
.faq_content h4 {
	font-weight: 600 !important;
}
.faq_content h6 {
	color: green !important;
	font-weight: 600 !important;
}
.faq_content h6.title {
	color: #fff !important;
	text-transform: uppercase !important;
	font-weight: 300px !important;
}
.faq_content .accord {
	background: transparent !important;
	border: none !important;
	border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
	border-radius: 0px !important;
	padding-bottom: 15px !important;
	margin-left: 60px !important;
}
div.tab-content {
	margin-top: -27px !important;
	margin-left: -50px !important;
	border: 2px dashed rgb(50, 159, 105, 0.9) !important;
	padding: 20px !important;
}
.faq_content .faq {
	padding-left: 0;
	padding-top: 70px;
	padding-bottom: 50px;
	-webkit-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
	-moz-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
	box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
}
.faq_content .faq p.card-text a {
	color: rgb(36, 96, 136);
	font-weight: 600;
	margin-bottom: 1px solid #dbdbdb;
}
.faq_content .faq ul.nav {
	background: transparent !important;
	width: 234px;
	padding: 0;
	z-index: 9999;
}
.faq_content .faq a.nav-link {
	border-radius: 0px !important;
	color: #000;
}
.faq_content .faq ul.nav li.nav-item {
	border-radius: 0px !important;
	color: #000;
	margin-top: 7px;
	-webkit-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
	-moz-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
	box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
	background: #fff;
	z-index: 9;
}
.faq .nav-pills .nav-link.active {
	border-radius: 0px !important;
	color: #fff;
	background-color: #329f69;
}
.slidee {
	background-image: url("/Artboard–2.png");
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
<script>
import Header from "@/components/layouts/Header";
import CallToAction from "@/components/layouts/CallToAction";
export default {
	components: {
		Header,
		CallToAction
	},
	data() {
		return {
			faqs: [
				{
					title: "Applying for a loan",
					body: [
						{
							title: "How do I apply for a loan?",
							content: `
                            <p>Please visit our website <a href="https://moneyline.ng" target="_blank">www.moneyline.ng</a> to apply or call 0907 844 0000</p>
                            `
						},
						{
							title: "Am I eligible to apply for a loan?",
							content: `
                            <ul>
                                <li>To qualify for a loan, you must be 25-59 years old
                                <li>Be employed or have a verifiable source of income
                                <li>Have a cheque book
                                <li>Live and work in Lagos
                                <li>Have an account with any commercial bank
                            </ul>
                            `
						},
						{
							title: "What am I allowed to use a loan for?",
							content:
								"You can use the funds from your personal loan for any purpose."
						},
						{
							title:
								"What is the minimum and maximum amount I am allowed to borrow, and for how long?",
							content:
								"One month minimum and 3 months maximum loan repayment tenure"
						},
						{
							title:
								"How long does it take for my loan to be processed and approved?",
							content:
								"Within 24 - 48 hours provided all documents are valid and presented on the application"
						}
					]
				},
				{
					title: "Application",
					body: [
						{
							title:
								"How do I know if my loan has been approved?",
							content: `A loan officer will contact you`
						},
						{
							title:
								"What documents am I required to present when applying for a loan?",
							content: `
                            <ul>
                                <li>6 months bank statement
                                <li>Employment letter or company documents if you are a business owner
                                <li>BVN
                                <li>A government issued ID
                            </ul>
                            `
						},
						{
							title:
								"What are the interest rates on a loan service?",
							content: `<b>5-10%</b>, based on a Risk Based Pricing model which estimates the risk of lending to each applicant, each loan request is priced accordingly`
						},
						{
							title:
								"Do I qualify for a loan even if I do not stay in Lagos?",
							content: `Please send an email to hello@monelyline.ng`
						},
						{
							title: "As a student, can I apply for a loan?",
							content: `You must be over 25 and have  a regular source of income to apply for a loan`
						}
					]
				},
				{
					title: "Enquiry on Loan Repayment/Existing Loan",
					body: [
						{
							title:
								"If I am unemployed can I still apply for a loan?",
							content: `You must have a regular source of income to apply for a loan.`
						},
						{
							title:
								"Am I allowed to make part-payment on my loan?",
							content: `Yes, loan repayment are flexible`
						},
						{
							title:
								"What are the channels available for loan repayment?",
							content: `
                            <ul>
                                <li>Direct debit
                                <li>Cheque
                                <li>Bank transfers
                                <li>Cash deposits
                            </ul>
                            `
						},
						{
							title:
								"How soon can I reapply for another loan after repaying a loan fully?",
							content: `As soon as you have repaid all your existing loans`
						},
						{
							title:
								"Is there any penalty incurred for defaulting a loan repayment?",
							content: `There will be charges for default in repayment, but you can speak to your loan officer if you are going to run late on a repayment.`
						},
						{
							title:
								"Can I apply for multiple loans simultaneously? CAN I complete my loan repayment before its due date?",
							content: `You can repay your loan at any time before its due date, and you cannot apply for multiple loans running at the same time. One loan application at a time.`
						},
						{
							title:
								"Can I be allowed to reapply for a loan in addition to my existing loan?",
							content: `You can have only one active loan at a time`
						},
						{
							title:
								"What happens if I fail to meet up with my repayment date?",
							content: `Please contact your loan officer or email us at hello@moneyline.ng`
						},
						{
							title: "Can I skip a repayment date?",
							content: `Please contact your loan officer or email us at hello@moneyline.ng`
						},
						{
							title: "Can I pay before my repayment date?",
							content: `Yes, you can repay your loan at anytime`
						},
						{
							title: "How can I contact Moneyline?",
							content: `Visit us online at <a href="https://moneyline.ng" target="_blank">www.moneyline.ng</a>, email us at hello@moneyline.ng or call us on 0907 844 0000`
						}
					]
				}
			]
		};
	}
};
</script>
