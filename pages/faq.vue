<template>
	<div class="content">
		<Header/>
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
                                MoneyLine is a trading name of Chestnut Financial Services Limited. We offer a
                                range of financial services including short term loans,Payday loans, Guarantor
                                loans, Travel money, Pawn broking Services
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
