<template>
	<div class="container">
		<div class="requirements text-left">
			<h3 class="text-primary">Personal Details</h3>
			<h5>What You'll Need</h5>
			<ul>
				<li>
					You need to be aged
					<b>22 years</b> and over
				</li>
				<li>Bank Statements</li>
				<li>Utility Bill</li>
				<li>Driver's License with your current address or PHCN/DSTV/Waste Bill</li>
				<li>National ID Card</li>
				<li>PVC or International Passport or Driver's License</li>
			</ul>
			<b-form>
				<label>
					<b-checkbox aria-checked="true" @change="checkQualified()">I agree i'm 22years and over</b-checkbox>
				</label>
			</b-form>

			<b-link to="/loan/calculate">
				<b-button variant="primary" block :disabled="!isQualified">Continue</b-button>
			</b-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isQualified: false
		};
	},
	methods: {
		checkQualified() {
			this.isQualified = !this.isQualified;
		}
	}
};
</script>

<style scoped>
.requirements {
	margin: 6rem auto;
	max-width: 400px;
}
</style>


