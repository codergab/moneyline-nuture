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
        <div style="background: #fafafa;">
            <div class="container about_content">
                <div class="row">
                    <div class="col-md-8 mb-5 mx-auto">
                        <div class="row">
                            <div class="col-md-12">
                                
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-applying-tab" data-toggle="pill" href="#v-pills-applying" role="tab" aria-controls="v-pills-applying" aria-selected="true">Applying for a loan</a>
                                <a class="nav-link" id="v-pills-rates-tab" data-toggle="pill" href="#v-pills-rates" role="tab" aria-controls="v-pills-rates" aria-selected="false">Loan Rates Enquiry</a>
                                <a class="nav-link" id="v-pills-repayment-tab" data-toggle="pill" href="#v-pills-repayment" role="tab" aria-controls="v-pills-repayment" aria-selected="false">Enquiry on Loan Repayment/Existing Loan</a>
                                </div>
                                <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-applying" role="tabpanel" aria-labelledby="v-pills-applying-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-rates" role="tabpanel" aria-labelledby="v-pills-rates-tab">...</div>
                                <div class="tab-pane fade" id="v-pills-repayment" role="tabpanel" aria-labelledby="v-pills-repayment-tab">...</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CallToAction/>

	</div>
</template>
<style scoped>
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
    .about_content {
        padding-top: 50px;
        padding-right: 40px;
    }
    .about_content2 {
        color: #fff;
        padding:20px;
    }
    .about_content2 p{
        font-size: 14px;
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
	}
};
</script>
