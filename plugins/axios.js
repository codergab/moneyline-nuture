let token;
if (localStorage.getItem('money_line_valid_token')) {
	let appStorage = localStorage.getItem('money_line_valid_token');
	token = appStorage;
}
if (localStorage.getItem('moneyline')) {
	let appStorage = JSON.parse(localStorage.getItem('moneyline'));
	if (appStorage.auth.user) {
		const { Token } = appStorage.auth.user;
		token = Token;
	}
}

export default function({ $axios, app }) {
	$axios.setToken(`${token}`, 'Bearer');

	$axios.setHeader('Content-Type', 'application/json', [ 'post' ]);

	$axios.setHeader('Authorization', `${token}`);

	$axios.onRequest((config) => {
		console.log('Making request to ' + config.url);
	});

	$axios.onError((error) => {
		const code = parseInt(error.response && error.response.status);
		if (code === 400) {
			// app.$toast.error(error.response.data)
			// return response
		} else {
			// this.$noty.error(`${err.response.statusText}, Please Try Again`);
		}
	});
}
