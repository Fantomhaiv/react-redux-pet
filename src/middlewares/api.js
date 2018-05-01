import { START, SUCCESS, FAIL } from '../constants';

export default store => next => (action) => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);

  console.log('--- callAPI', callAPI);
  console.log('--- type', type);
  console.log('--- rest', { ...rest });

  next({
    ...rest,
    type: type + START,
  });

  setTimeout(() => {
    fetch(callAPI)
      .then(response => response.json())
      .then(response => next({ ...action, response, type: type + SUCCESS }))
      .catch(error => next({ ...rest, type: type + FAIL, error }));
  }, 1000);
};
