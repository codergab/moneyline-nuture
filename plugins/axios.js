let authToken;

if (localStorage.getItem('moneyline')) {
  let appStorage = JSON.parse(localStorage.getItem('moneyline'));
  if (appStorage.auth.user) {
    const {
      token
    } = appStorage.auth.user;
    authToken = token;
  }
}

export default function ({
  $axios,
  app
}) {
  $axios.setToken(`${authToken}`);

  $axios.setHeader('Content-Type', 'application/json', ['post']);

  //   $axios.setHeader('Authorization', `${authToken}`);

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      // app.$toast.error(error.response.data)
      // this.$noty.error(`${err.response.statusText}, Please Try Again`);
      // return response
    } else {}
  });
}
