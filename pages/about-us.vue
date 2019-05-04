<template>
	<div>
		<Header/>
		<div class="row">
            <div class="col-md-12">
                <div class="slidee">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="payoff">
                                We listen to your <br>
                                <span class="highlight">financial</span> needs when no<br>
                                one else does
                            </div>
                        </div>
                    </div>
                </div>
                <CallToAction/>
            </div>
        </div>
	</div>
</template>
<style scoped>
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
