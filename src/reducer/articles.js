import { OrderedMap, Map, Record } from 'immutable';
import { arrToMap } from '../helpers';
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS } from '../constants';

const ArticleRecord = Record({
  id: '',
  text: '',
  title: '',
  comments: [],
  loading: false,
});

const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({}),
});

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
  const {
    type, payload, randomId, response,
  } = action;

  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true);
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);
    case LOAD_ARTICLE + START:
      return articleState.setIn(['entities', payload.id, 'loading'], true);
    case LOAD_ARTICLE + SUCCESS:
      return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response));
    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id]);
      // return articleState.filter(article => article.id !== payload.id);
    case ADD_COMMENT:
      return articleState.updateIn(
        ['entities', payload.articleId, 'comments'],
        comments => comments.concat(randomId),
      );
  }

  return articleState;
};
