<template>
	<section class="callout">
		<div class="content">
			<h2>Manage Users / Loans</h2>
		</div>
	</section>
</template>

<script>
export default {
	name: "Hero"
};
</script>

<style scoped>
section.callout {
	width: 100%;
	min-height: 200px;
	height: auto;
	background-image: url(/Artboard_1.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	overflow: hidden !important;
	position: relative;
}

section.callout .content {
	position: absolute;
	padding: 2em;
	background-attachment: fixed;
	width: 50%;
	height: 250px;
	background: #035885;
	color: #eee;
	-webkit-clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%);
}

section.callout .content p {
	color: #f5ad45;
	margin-top: -15px;
}

section.callout .content h2 {
	font-size: 2.5em;
	margin-top: 1em !important;
}
</style>
