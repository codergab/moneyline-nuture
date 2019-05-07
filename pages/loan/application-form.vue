<template>
	<b-container>
		<div class="form-wrapper">
			<h2 class="text-center">Loan Application Form</h2>
			<b-row>
				<b-col sm="4">
					<label for>Title</label>
					<input type="radio" name="title" value="Mr">Mr
					<input type="radio" name="title" value="Mrx">Mrs
					<input type="radio" name="title" value="Dr">Dr
					<input type="radio" name="title" value="Mr">r
				</b-col>
			</b-row>
		</div>
	</b-container>
</template>

<script>
export default {};
</script>


<style scoped>
.form-wrapper {
	max-width: 50%;
	margin: 5rem auto;
	border: 1px solid #000;
}
</style>
