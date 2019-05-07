<template>
	<div>
		<div class="wrapper">
			<img src="/new-email.svg" height="300">

			<div class="content-center">
				<center>
					<h2 class="text-center">Welcome to MoneyLine</h2>
					<h5 class="text-center">We've sent you an Email, Click on the Link to continue</h5>
					<!-- <p>
						Didn't get an Email?,
						<a href="{{ route('resend-email',$registered->uuid) }}">Resend Email</a>
					</p>-->
				</center>
			</div>
		</div>
	</div>
</template>

<style scoped>
body {
	padding: 0;
	margin: 0;
	background: rgb(47, 179, 79, 0.05);
	font-family: "Roboto", sans-serif;
}

.logo {
	margin: 2em auto;
	max-width: 200px;
}

.wrapper {
	max-width: 40%;
	display: flex;
	/* background: #fafafa; */
	min-height: 500px;
	margin: 2rem auto;
	justify-content: center;
	padding: 2em;
	flex-direction: column;
}

.text-center {
	align-self: center;
}

.content-center {
	align-content: center;
	margin: 2em auto;
}
</style>
