<template>
	<div>
		<Header/>
		<div class="slidee padded">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="payoff">
                            We listen to your <br>
                            <span class="highlight">financial</span> needs when no<br>
                            one else does
                        </div>
                    </div>
                </div>
            </div>
            <img src="/Artboard – 3.png" style="width: 100%;  background-size: cover;">
		</div>
	</div>
</template>
<style scoped>
    .payoff {
        font-size: 2.15em;
        font-weight: 200;
        position: absolute;
        color: #fff;
        padding: 111px 0 0 0px;
    }
    .highlight {
        font-weight: bold;
    }
</style>
<script>
import Header from "@/components/layouts/Header";
export default {
	components: {
		Header
	}
};
</script>
