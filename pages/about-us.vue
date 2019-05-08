<template>
	<div class="content">
        <div class="">
            <div class="slidee">
                <div class="payoff">
                    We listen to your <br>
                    <span class="highlight">financial</span> needs when no<br>
                    one else does
                </div>
            </div>
            <CallToAction/>
        </div>
        <div style="background: #fafafa;">
            <div class="container about_content txt-sm-center">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="row">
                            <div class="col-md-12">
                                MoneyLine is a trading name of Chestnut Financial Services Limited. We offer a
                                range of financial services including short term loans,Payday loans, Guarantor
                                loans, Travel money, Pawn broking Services
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-2">
                                <img src="/1.gif" class="img-responsive rounded-circle" width="110px;" alt="">
                            </div>
                            <div class="col-md-10 pl-4">
                                <h6>VISION</h6>
                                We aim to be Nigeria’s most convenient loan providing Service Company, with easy 
                                access to simple financial solutions at competitive rates and first class customer 
                                service.
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-2">
                                <img src="/2.gif" class="img-responsive rounded-circle" width="110px;" alt="">
                            </div>
                            <div class="col-md-10 pl-4">
                                <h6>MISSION</h6>
                                We strive to understand our customers’ needs and create personalized solutions 
                                to meet those needs while leveraging technology and innovation to deliver seamless 
                                experiences.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="background: rgb(46, 148, 96);" class="mt-5 pb-5">
            <div class="container about_content2">
                <div class="row text-center">
                    <div class="col-md-12 mb-4 mt-2">
                        <h4>CORE VALUES</h4>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <img src="/4.gif" class="rounded-circle mb-4" width="80px">
                        <h6 class="title">Accessibility</h6>
                        <p>
                            We are ready to help
                            Our team has put together resources for all those in need 
                            of financial support to make sure our services are readily 
                            available and accessible by all, irrespective of the purpose 
                            of need.
                        </p>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <img src="/6.gif" class="rounded-circle mb-4" width="80px">
                        <h6 class="title">Transparency</h6>
                        <p>
                          Customer satisfaction is key
                        We are about full disclosure and sharing of information on our goals, 
                        performance and operations. We constantly strive to ensure that our clients 
                        and customers can trust and are comfortable financially and otherwise after 
                        interacting with our services.
                        </p>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <img src="/3.gif" class="rounded-circle mb-4" width="80px">
                        <h6 class="title">Entrepreneurship</h6>
                        <p>
                            We believe in consistency and drive.
                            We understand that being in charge and making important 
                            decisions regarding your financial needs can be fulfilling 
                            when all the necessary actions are put in place. That is why 
                            we work consistently to deliver on our promise in making you 
                            your own boss. 
                        </p>
                    </div>
                    <!-- <div class="col-md-3">
                        <img src="/4.gif" class="rounded-circle mb-4" width="80px">
                        <h6 class="title">Sustainability</h6>
                        <p>
                            We are competent and deliver quality service 
                            Financial excellence involves making continuous improvements
                             in order to achieve relentless advantage. In so doing, 
                             we help maximize value for our customers as well as providing 
                             secure financial benefits.

                        </p>
                    </div> -->
                    <div class="col-md-3 col-sm-12">
                        <img src="/5.gif" class="rounded-circle mb-4" width="80px">
                        <h6 class="title">Excellence</h6>
                        <p>
                            We are competent and deliver quality service 
                            Financial excellence involves making continuous improvements
                             in order to achieve relentless advantage. In so doing, 
                             we help maximize value for our customers as well as providing 
                             secure financial benefits.

                        </p>
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
        background-image: url('/Artboard–3.png');
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
    /* @media only screen and (min-width: 10em) {
        .txt-sm-center {
            text-align: center;
        }
    } */
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
