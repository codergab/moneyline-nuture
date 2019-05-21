export default ({
  store,
  redirect
}) => {
  // If the user is not authenticated
  if (!store.getters['auth/authenticated']) {
    return redirect('/account/login');
  }

  //   const user = store.getters('auth/authUserRole');
  //   console.log(user);
  //   if (user !== "admin") {
  //     return redirect('/app/me')
  //   }
};
