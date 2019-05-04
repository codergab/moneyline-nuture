<template>
	<div class="content">
        <div class="">
            <div class="slidee">
                <div class="payoff">
                    <span class="highlight">Got questions?</span> <br>
                    let us provide your <br>
                    answers
                </div>
            </div>
            <CallToAction/>
        </div>
        <div style="background: #fafafa;" class="pt-5">
            <div class="container about_content">
                <div class="row">
                    <div class="col-md-8 mb-5 mx-auto">
                        <div class="row">
                            <div class="col-md-12 faq">

                                <b-tabs pills card vertical>
                                <b-tab title="Applying for a loan" active>
                                    <b-card-text>
                                        <div role="tablist">
                                            <template>
                                                <div v-for="(item, i) in faqs" :key="i">
                                                <b-card no-body  class="mb-1 accord">
                                                <b-link block v-b-toggle="'a'+i" variant="info">{{ item.title }}</b-link>
                                                <b-collapse :id="'a'+i" accordion="my-accordion" role="tabpanel">
                                                    <b-card-text v-html="item.content"></b-card-text>
                                                </b-collapse>
                                                </b-card>
                                                </div>
                                            </template>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Loan Rates Enquiry">
                                    <b-card-text>Tab Contents 2</b-card-text></b-tab>
                                <b-tab title="Enquiry on Loan Repayment/Existing Loan">
                                    <b-card-text>Tab Contents 3</b-card-text></b-tab>
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
    .content {
        color: rgb(123, 121, 121);
    }
    h4 {
        font-weight: 600;
    }
    h6 {
        color: green;
        font-weight: 600;
    }
    h6.title {
        color: #fff;
        text-transform: uppercase;
        font-weight: 300px;
    }
    .accord {
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.125);
        border-radius: 0px;
        padding-bottom:15px;
    }
    div.tab-content {
        margin-top: -27px;
        /* border: 2px dashed #329F69;
        border-spacing: 5px; */
        padding:20px;
    }
    .faq {
        padding-left: 0;
        padding-top: 70px;
        padding-bottom: 50px;
        -webkit-box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
        box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
    }
    .faq p.card-text a {
        color: rgb(36,96,136);
        font-weight: 600;
        margin-bottom: 1px solid #dbdbdb;
    }
    .faq ul.nav {
        background: transparent !important;
        width: 234px;
        padding: 0;
    }
    .faq a.nav-link {
        border-radius: 0px !important;
        color: #000;
    }
    .faq ul.nav li.nav-item{
        border-radius: 0px !important;
        color: #000;
        margin-top: 7px;
        -webkit-box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
        box-shadow: 0px 0px 5px 1px rgba(219,219,219,1);
    }
    .faq .nav-pills .nav-link.active {
        border-radius: 0px !important;
        color: #fff;
        background-color: #329F69;
    }
    .slidee {
        background-image: url('/Artboard–2.png');
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
import CallToAction from "@/components/layouts/CallToAction"
export default {
	components: {
        Header,
        CallToAction
    },
    data() {
        return {
            faqs: [
                {
                    title: 'How do I apply for a loan?',
                    content:
                    `
                    <p>Please visit our website <a href="https://moneyline.ng" target="_blank">www.moneyline.ng</a> to apply or call 0907 844 0000</p>
                    <ul>
                        <li>Am I eligible to apply for a loan?
                        <li>To qualify for a loan, you must be 25-59 years old
                        <li>Be employed or have a verifiable source of income
                        <li>Have a cheque book
                        <li>Live and work in Lagos
                        <li>Have an account with any commercial bank
                    </ul>
                    `
                },
                {
                    title: 'What am I allowed to use a loan for?',
                    content: 'You can use the funds from your personal loan for any purpose.'
                },
                {
                    title: 'What is the minimum and maximum amount I am allowed to borrow, and for how long?',
                    content: 'One month minimum and 3 months maximum loan repayment tenure'
                },
                {
                    title: 'How long does it take for my loan to be processed and approved?',
                    content: 'Within 24 -48 hours provided all documents are valid and presented on the application'
                },
            ]
        }
    }
};
</script>
