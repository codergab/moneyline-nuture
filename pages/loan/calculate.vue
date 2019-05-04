<template>
	<div>
		<section class="apply-loan">
			<b-container fluid>
				<h3 class="text-center display-4">Loan Calculator</h3>
				<vue-slider v-model="sliderValue" :min="min" :max="max"></vue-slider>
				<h4>You are to borrow - N{{ numberComma(sliderValue) }}</h4>
				<h4>And Repay - N{{ numberComma(getCompoundInterest(sliderValue)) }}</h4>
			</b-container>
		</section>
	</div>
</template>


<script>
import VueSlider from "vue-slider-component";
export default {
	components: {
		VueSlider
	},
	data() {
		return {
			min: 10000,
			max: 3000000,
			sliderValue: 10000
			// data: [0, 3000000]
		};
	},
	methods: {
		numberComma(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		getCompoundInterest(value) {
			return (value += Math.round(value * 0.068));
		}
	}
};
</script>


<style scoped>
.apply-loan {
	padding: 3rem;
}
</style>

