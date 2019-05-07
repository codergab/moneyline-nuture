export default ({ store, redirect }) => {
	if (store.getters['auth/authenticated']) {
		return redirect('/app/dashboard');
	}
	return redirect('/login');
};
