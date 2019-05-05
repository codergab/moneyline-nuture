export default () => {
  if (!localStorage.getItem('loginDetails')) {
    return location.href = '/login';
  }
}
