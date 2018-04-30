export default store => next => (action) => {
  console.log('%c ------------------------------', 'background: #222; color: #bada55');
  console.log('---', 'store before', store.getState());
  console.log('---', 'dispatching', action);
  next(action);
  console.log('---', 'store after', store.getState());
};
