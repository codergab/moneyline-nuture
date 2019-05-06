let token;
if (localStorage.getItem('money_line_valid_token')) {
  let appStorage = localStorage.getItem('money_line_valid_token');
  token = appStorage;

}


export default function ({
  $axios,
  app
}) {

  // this.$axios.setToken('123', 'Authetication')

  //   $axios.setToken(`${token}`, 'Bearer')

  $axios.setHeader('Content-Type', 'application/json', [
    'post'
  ])

  $axios.setHeader('Authorization', `${token}`)

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // app.$toast.error(error.response.data)
      // return response
    } else {
      alert(error)
    }
  })
}
